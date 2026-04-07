# 1.3 How React works: Virtual DOM

- কেন react virtual dom এত জনপ্রিয়?
- কেন virtual dom এর কারণেই react অনেক fast?
- Is DOM really slow?

## Browser Rendering Process

```
                       DOM
                        |
HTML -> HTML Parser -> DOM Tree       Layout
                        |             |
                    attachment -> Render Tree -> Painting -> Display
                        |
CSS -> CSS Parser -> Style Rules
                        |
                      CSSOM
```

- Whatever a web developer is doing on the web, is actually manipulating the DOM.
- Layout Phase: Browser তার viewport এর x & y axis বরাবর, কোন co-ordinate বরাবর কি print করবে সেটা নির্ধারন করে।
- DOM এর কোথাও কোন change হলে অর্থাৎ DOM manipulate করলে উপরের process টা আবার re-calculate হয়। Render tree আবার তৈরী হয়। পুনরায় আবার Paint হয়।
- Actually DOM operation slow নয়, Painting process টা slow।
- পুর্বের Multipage Web Application এ অনেক গুলো page থাকে, সেখানে নতুন নতুন page load হতো, তখন এই সমস্যা গুলো হতো না। কোথাও DOM manipulate করা হলে page reload হতো। নতুন করে আবার DOM আসতো।
- Modern Web Application গুলো Single Page Application হয়। সেখানে অনেক ধরনের interactivity প্রয়োজন হয়। এ ধরনের application এ একবারই page load হয়, এবং DOM একবারেই চলে আসে। আমরা page reload না দিয়ে, আমরা in-place এ DOM maipulate করি। এখন আমাদের চেষ্টা করতে হয়, প্রতিবার কোন change এর জন্য বার বার render tree তৈরি না হয়। এজন্যই react এ virtual dom নিয়ে আসা হয়েছে।
- যখন virtual dom ছিল না, তখন What is the best we can do about?

1. Batch Update: সব operation করে, তারপর DOM update করা।
2. Less DOM Operation

- Code ঠিক মতো করলে DOM slow না।

- React কিভাবে করবে?
- কোন change করার আগের অবস্থা এবং তার পরের অবস্থা, এই দুই অবস্থার মধ্যে comparison করে যেখানে change পাবে, কেবলমাত্র DOM এর সেই জায়গায় পরিবর্তন করে দিয়ে আসবে।
- Virtual DOM(JS object) হচ্ছে real DOM এর replica।
- প্রথম render এ object টা কি ছিল, এবং change করার পরে object এর কোথায় change হলো। এই comparison(diffing/reconciliation algorithm) টা করে যে change টুকু দেখে সেই change টুকু DOM এ update করে দেয়।
- React এর component গুলো গাছের মতো।
- Is Virtual DOM slow?
- Real DOM এ re rendering যতটুকু slow, React এ DOM + Virtual DOM মিলিত চেষ্টা fast enough, comparitively faster than re-painting.
