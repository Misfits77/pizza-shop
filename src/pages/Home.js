import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteDoc, doc, getDocs } from "firestorage";

function Home() {
  const [pizzaMenu, setPizzaMenu] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const PizzaMenu = getDocs(doc("PizzaMenu")).data();
    setPizzaMenu(PizzaMenu);
  }, []);

  const deletePizza = (menu) => {
    deleteDoc(doc("PizzaMenu", menu.id));

    const newMenu = pizzaMenu.filter((pizza) => {
      if (pizza.id === menu.id) {
        return false;
      } else {
        return true;
      }
    });
    setPizzaMenu(newMenu);
  };

  return (
    <>
      <main>
        <h1>Pizza Shop</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </tbody>
          {pizzaMenu.map((menu) => {
            return (
              <tbody key={menu.id}>
                <tr>
                  <td>{menu.name}</td>
                  <td>{menu.price}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        navigate(`/${menu.id}/edit`);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        deletePizza(menu);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </main>
      <nav>
        <Link to="/new">
          <button>New Pizza</button>
        </Link>
      </nav>
    </>
  );
}

export default Home;
