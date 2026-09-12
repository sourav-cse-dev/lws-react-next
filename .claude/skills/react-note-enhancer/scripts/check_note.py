#!/usr/bin/env python3
"""Validate a topic README against this repo's note conventions.

Run after enhancing a note:  python3 check_note.py <path/to/README.md>

Checks four things that are objectively verifiable and easy to get wrong by eye:
  1. Bangla/English prose ratio (target ~60% Bangla)
  2. Relative links actually resolve
  3. Heading hierarchy is real (no skipped levels, no sentence-as-heading)
  4. Required sections exist, with 5-6 interview questions

Code blocks, inline code, and the Interview Questions section are excluded from
the ratio, since those are English by design and would otherwise skew it.

Exit 1 on errors, 0 otherwise. Warnings never fail the run.
"""

import re
import sys
from pathlib import Path

BENGALI = re.compile(r"[ঀ-৿]")
LATIN = re.compile(r"[A-Za-z]")
FENCE = re.compile(r"^\s*(`{3,}|~{3,})")
HEADING = re.compile(r"^(#{1,6})\s+(.*)$")
LINK = re.compile(r"\[([^\]]*)\]\(([^)]+)\)")

TARGET_LOW, TARGET_HIGH = 0.45, 0.80


def strip_code(text):
    """Remove fenced blocks and inline code spans."""
    out, fence = [], None
    for line in text.splitlines():
        m = FENCE.match(line)
        if m:
            marker = m.group(1)[0]
            if fence is None:
                fence = marker
            elif fence == marker:
                fence = None
            continue
        if fence is None:
            out.append(re.sub(r"`[^`]*`", " ", line))
    return "\n".join(out)


# Both heading spellings below already exist in this repo (1.1 uses
# "Interview Preparation" / "Key Takeaways", 1.4-1.5 use "Interview Questions" /
# "Summary"). Accept either rather than failing notes over a synonym — the
# template picks one as canonical for new notes.
INTERVIEW_H = re.compile(r"^##\s+Interview\s+(Questions|Preparation)", re.I)
SUMMARY_H = re.compile(r"^##\s+(Summary|Key\s+Takeaways)", re.M | re.I)
QUESTION = re.compile(
    r"^\s*(?:\d+\.\s+\*\*|\*\*Q\d+[:.]|<summary>.*?Q\d+[:.])", re.M | re.I
)


def split_interview(text):
    """Return (prose_before_interview, interview_section)."""
    lines = text.splitlines()
    for i, line in enumerate(lines):
        if INTERVIEW_H.match(line):
            return "\n".join(lines[:i]), "\n".join(lines[i:])
    return text, ""


def check_ratio(text, errors, warnings, info):
    prose, _ = split_interview(strip_code(text))
    prose = re.sub(r"^#{1,6}\s+.*$", " ", prose, flags=re.M)  # headings are English
    bn, en = len(BENGALI.findall(prose)), len(LATIN.findall(prose))
    if bn + en == 0:
        warnings.append("No prose found to measure language ratio.")
        return
    ratio = bn / (bn + en)
    info.append(f"Bangla prose ratio: {ratio:.0%}  ({bn} Bangla / {en} Latin chars)")
    if ratio < TARGET_LOW:
        warnings.append(
            f"Bangla ratio {ratio:.0%} is below target ~60%. "
            "Explanations should be in Bangla; only technical terms stay English."
        )
    elif ratio > TARGET_HIGH:
        warnings.append(
            f"Bangla ratio {ratio:.0%} is above target ~60% — check that technical "
            "terms (state, props, render, hook) were not translated."
        )


def check_links(text, path, errors, info):
    base = path.parent
    checked = 0
    for label, target in LINK.findall(strip_code(text)):
        target = target.split("#")[0].strip()
        if not target or target.startswith(("http://", "https://", "mailto:")):
            continue
        checked += 1
        if not (base / target).resolve().exists():
            errors.append(f"Broken relative link: [{label}]({target})")
    info.append(f"Relative links checked: {checked}")


def check_headings(text, errors, warnings):
    prev = 0
    for n, line in enumerate(strip_code(text).splitlines(), 1):
        m = HEADING.match(line)
        if not m:
            continue
        level, title = len(m.group(1)), m.group(2).strip()
        if prev and level > prev + 1:
            errors.append(f"L{n}: heading jumps h{prev}->h{level} — {title[:50]!r}")
        if re.match(r"^\*{0,2}(Answer|উত্তর)\b", title, re.I) or len(title) > 80:
            errors.append(f"L{n}: heading looks like content, not a title — {title[:60]!r}")
        prev = level


def check_sections(text, errors, warnings, info):
    if not SUMMARY_H.search(text):
        errors.append("Missing '## Summary (Key Takeaways)' section.")
    _, interview = split_interview(text)
    if not interview:
        errors.append("Missing '## Interview Questions' section (CLAUDE.md Rule 4).")
        return
    count = len(QUESTION.findall(interview))
    info.append(f"Interview questions found: {count}")
    if not 5 <= count <= 6:
        warnings.append(f"Found {count} interview questions; Rule 4 asks for 5-6.")


def main():
    if len(sys.argv) != 2:
        print(__doc__)
        return 2
    path = Path(sys.argv[1])
    if not path.is_file():
        print(f"error: no such file: {path}")
        return 2

    text = path.read_text(encoding="utf-8")
    errors, warnings, info = [], [], []

    check_ratio(text, errors, warnings, info)
    check_links(text, path, errors, info)
    check_headings(text, errors, warnings)
    check_sections(text, errors, warnings, info)

    print(f"\n{path}")
    for line in info:
        print(f"  · {line}")
    for w in warnings:
        print(f"  ⚠ {w}")
    for e in errors:
        print(f"  ✗ {e}")
    if not errors and not warnings:
        print("  ✓ all checks passed")
    print()
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
