// console.log(React);
// console.log(ReactDOM);

// creating DOM using JS code
const firstApproach = document.createElement("div"); // element তৈরি করা হলো
firstApproach.innerText = "Hello World from DOM!"; // content তৈরি করা হলো
document.getElementById("root-1").appendChild(firstApproach); // browser এর DOM এ element এর মধ্যে content কে render করা হলো

const secondApproach = React.createElement(
  "div",
  null,
  React.createElement("p", null, "Hello World from React"),
); // react এর মাধ্যমে content সহ element তৈরি করা হলো
ReactDOM.createRoot(document.getElementById("root-2")).render(secondApproach); // react dom এর মাধ্যমে browser এর DOM এ element এর মধ্যে content কে render করা হলো

// JSX syntax, যা babel দিয়ে parse করে browser এর বোধগম্য করা হয়
const thirdApproach = (
  <div>
    <p>Hello</p>
  </div>
);
ReactDOM.createRoot(document.getElementById("root-3")).render(thirdApproach);

// পুর্বের index.html & script.js দিয়ে যা করা হয়েছিলো, তাই এখানে react দিয়ে করা হচ্ছে
const productPrice = 500;

function Product() {
  const [quantity, setQuantity] = React.useState(0);

  function addToCart() {
    setQuantity(quantity + 1);
  }

  return (
    <div className="shadow-md rounded-lg bg-slate-800 border-slate-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://dummyimage.com/680X400/087ea4/ffffff.png&text=Product"
          alt="product image"
        />
      </a>
      <div className="px-5 py-5">
        <div className="flex items-center justify-between mt-5">
          <a href="#">
            <h3 className="font-semibold text-xl tracking-tight">
              Reactive Accelerator Course
            </h3>
          </a>
          <span className="text-xl font-medium text-teal-500">
            {productPrice * quantity}
          </span>
        </div>
        <div className="flex items-center justify-between mt-5">
          <span className="text-2xl font-bold text-slate-300">
            {productPrice}
          </span>
          <a
            href="#"
            onClick={addToCart}
            className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#087ea4] hover:bg-[#087ea4]/[.8] focus:ring-[#087ea4]/[.5]"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root-4")).render(
  <>
    <Product />
    <Product />
  </>,
);
