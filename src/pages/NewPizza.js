import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { doc, addDoc } from "firestorage";

function NewPizza() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const newPizza = (name, price) => {
    addDoc(doc("PizzaMenu"), { name: name, price: price });
  };

  return (
    <>
      <main>
        <h2>Pizza Shop</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            newPizza(name, price);
            navigate("/");
          }}
        >
          <label>
            {" "}
            Name
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label>
            {" "}
            Price
            <input
              type="number"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </label>
          <button>Create</button>
        </form>
      </main>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
      </nav>
    </>
  );
}

export default NewPizza;
