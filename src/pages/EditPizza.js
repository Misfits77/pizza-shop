import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, updateDoc, getDoc } from "firestorage";

function EditPizza() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const pizza = getDoc(doc("PizzaMenu", params.id)).data();
    setName(pizza.name);
    setPrice(pizza.price);
  }, []);

  const editPizza = (name, price) => {
    updateDoc(doc("PizzaMenu", params.id), { name: name, price: price });
    navigate("/");
  };

  return (
    <main>
      <h2>Pizza Shop</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editPizza(name, price);
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
        <button>Save</button>
      </form>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
      </nav>
    </main>
  );
}

export default EditPizza;
