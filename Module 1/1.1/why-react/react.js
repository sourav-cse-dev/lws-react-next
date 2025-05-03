// console.log(React);
// console.log(ReactDOM);

// 1. using JS DOM manipulation
// const p = document.createElement('p');
// p.innerText = "Hello World";
// document.getElementById('root').appendChild(p);

// 2. using React for DOM manipulation
// const myElement = React.createElement('div', null, 'Hello World');
// ReactDOM.createRoot(document.getElementById('root')).render(myElement);

// 3. using React for multiple elements
// const myElement = React.createElement('div', null, React.createElement('p', null, "Hello"));
// ReactDOM.createRoot(document.getElementById('root')).render(myElement);

// 4. using JSX
const productPrice = 5000;
function Product(){
    const [quantity, setQuantity] = React.useState(0);

    function adToCard(){
        setQuantity(quantity + 1)
    }
    return(
    <div className="shadow-md rounded-lg bg-slate-800 border-slate-700">
      <a href="#">
        <img className="rounded-t-lg" src="https://dummyimage.com/680X400/087ea4/ffffff.png&text=Product" alt="product image" />
      </a>
      <div className="px-5 py-5">
        <div className="flex items-center justify-between mt-5">
          <a href="#">
            <h3 className="font-semibold text-xl tracking-tight">Reactive Accelerator Course</h3>
          </a>
          <span className="text-xl font-medium text-teal-500">{productPrice * quantity}</span>
        </div>
        <div className="flex items-center justify-between mt-5">
          <span className="text-2xl font-bold text-slate-300">{productPrice}</span>
          <a onClick={adToCard} href="#" className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#087ea4] hover:bg-[#087ea4]/[.8] focus:ring-[#087ea4]/[.5]">Add to cart</a>
        </div>
      </div>
    </div>
    )
}
const productCard = 
ReactDOM.createRoot(document.getElementById('root')).render(
    <div className="flex flex-col gap-5">
        <Product/> 
        <Product/>
    </div>
);