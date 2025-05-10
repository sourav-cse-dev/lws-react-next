function MyButton() {
  return <button>I'm a button.</button>;
}

function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton></MyButton>
    </div>
  );
}

export default function Profile() {
  return (
    <>
      <MyApp></MyApp>
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    </>
  );
}
