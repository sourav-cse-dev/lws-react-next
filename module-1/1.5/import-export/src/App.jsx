import Gallery, { Card as Book, Card, Profile } from "./components/Gallery"; // default import and named import

function App() {
  return (
    <div>
      <Gallery />
      <Profile />
      <Card />
      <Book />
    </div>
  );
}

export default App;
