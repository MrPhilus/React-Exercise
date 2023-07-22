import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [product, setProduct] = useState({});
  const [inStock, setInStock] = useState(randomStock());

  function randomStock() {
    const minStock = 1;
    const maxStock = 30;
    return Math.floor(Math.random() * (maxStock - minStock + 1)) + minStock;
  }

  function nextItem() {
    setInStock(randomStock());
  }

  function prevItem() {
    setInStock(randomStock());
  }

  const productList = () => {
    fetch(`https://dummyjson.com/products/${inStock}`)
      .then((response) => response.json())
      .then((result) => {
        setProduct(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    productList();
  }, [inStock]);

  return (
    <div className="App">
      <section className="card">
        <button onClick={prevItem}>Prev</button>
        <div className="cardBox">
          <h3>{product?.title}</h3>
          <img width={"200px"} src={product?.thumbnail} alt="" />
          <p style={{ fontSize: "12px", padding: "10px" }}>
            {product?.description}
          </p>
          <p style={{ padding: "10px" }}>${product?.price}</p>
        </div>
        <button onClick={nextItem}>Next</button>
      </section>
      <input
        type="number"
        onInput={(e) => {
          setInStock(Number(e.target.value));
        }}
      />
    </div>
  );
}

export default App;

//add a function to change product on input
