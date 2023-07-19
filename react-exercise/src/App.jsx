import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [product, setProduct] = useState([]);
  const products = [{}];

  function nextItem() {
    setBrand((previous) => previous + 1);
  }

  function prevItem() {
    setBrand((previous) => previous - 1);
  }

  const productList = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://dummyjson.com/products/1", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setProduct(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    productList();
  }, []);

  return (
    <div className="App">
      <section className="card">
        <button onClick={prevItem}>Prev</button>
        <div className="cardBox">
          <h3>{product.title}</h3>
          <img width={"100px"} src={product.thumbnail} alt="" />
          <p>{product.description}</p>
          <span>${product.price}</span>
        </div>
        <button onClick={nextItem}>Next</button>
      </section>
    </div>
  );
}

export default App;
