import React, { useState } from "react";
import background from "../../imges/background-image.jpg";
import item1 from "../../imges/item1.jpg";
import item2 from "../../imges/item2.jpeg";
import item3 from "../../imges/item3.jpeg";
import item4 from "../../imges/item4.jpeg";
import item5 from "../../imges/item5.jpeg";
import item6 from "../../imges/item6.jpg";
import item7 from "../../imges/item7.jpeg";

import blackTea from "../../imges/blackTea.jpeg";
import masalaTea from "../../imges/masalaTea.jpeg";
import greenTea from "../../imges/greenTea.jpeg";
import senchaTea from "../../imges/senchaTea.jpeg";


const Category = ["Cofee", "Iced Tea", "Fresh Juices", "MilkShakes"];
const cofees = [
  {
    id: 1,
    title: "Cappuccino",
    description:
      "Cappuccino is a beloved coffee classic known for its rich and bold espresso foundation.",
    price: "$15.00",
    image: item1,
  },

  {
    id: 2,
    title: "Latte",
    description:
      "Cappuccino is a beloved coffee classic known for its rich and bold espresso foundation.",
    price: "$18.00",
    image: item2,
  },
  {
    id: 3,
    title: "Frappuccino",
    description:
      "Cappuccino is a beloved coffee classic known for its rich and bold espresso foundation.",
    price: "$12.00",
    image: item3,
  },
  {
    id: 4,
    title: "Mocha",
    description:
      "Cappuccino is a beloved coffee classic known for its rich and bold espresso foundation.",
    price: "$8.00",
    image: item4,
  },
  {
    id: 5,
    title: "Americano",
    description:
      "Cappuccino is a beloved coffee classic known for its rich and bold espresso foundation.",
    price: "$20.00",
    image: item5,
  },
  {
    id: 6,
    title: "Irish Coffee",
    description:
      "Cappuccino is a beloved coffee classic known for its rich and bold espresso foundation.",
    price: "$14.00",
    image: item6,
  },
  {
    id: 7,
    title: "Long Black",
    description:
      "Cappuccino is a beloved coffee classic known for its rich and bold espresso foundation.",
    price: "$16.00",
    image: item7,
  },
  {
    id: 8,
    title: "Doppio",
    description:
      "Cappuccino is a beloved coffee classic known for its rich and bold espresso foundation.",
    price: "$19.00",
    image: item1,
  },
];

const tea = [
  {
    id: 1,
    title: "Black Tea",
    description:
      "The most flavorful of teas, black teas are oxidized for longer than their green.",
    price: "$15.00",
    image: blackTea,
  },

  {
    id: 2,
    title: "Masala tea",
    description:
      "Take black tea and add ginger and cardamon (and sometimes cinnamon, clove, or anise)",
    price: "$18.00",
    image: masalaTea,
  },
  {
    id: 3,
    title: "Green Tea",
    description:
      "This traditional Chinese tea is made from leaves that aren't oxidized as long as black tea leaves,",
    price: "$12.00",
    image: greenTea,
  },
  {
    id: 4,
    title: "Sencha Tea",
    description:
      "Sencha is also one of the most-popular Japanese teas, but it differs from matcha ",
    price: "$8.00",
    image: senchaTea,
  },
];

function App() {
  const [items, setItems] = useState(cofees);
  const [isActive, setIsActive] = useState("home");
  const [category, setCategory] = useState(1);

  const iconClick = (value) => {
    return setIsActive(value);
  };

  const categoryClick = (item) => {
    setCategory(item);
  };

  const getActiveTab = () => {
    switch (category) {
      case 0:
        return cofees;
      case 1:
        return tea;
      case 2:
        return cofees;
      default:
        return tea;
    }
  };

  return (
    <>
      <div className=" bg-white d-flex justify-content-between px-2  ">
        {Category.map((item, index) => (
          <span
            key={index}
            onClick={() => categoryClick(index)}
            className={`pointer px-1 my-3 ${
              category === index ? "brown-border" : "border-bottom"
            }`}
          >
            {" "}
            {item}
          </span>
        ))}
      </div>

      <div className=" container text-decoration-none rounded-lg py-3 mb-5 body-color">
        <div className="row">
          {getActiveTab().map((item) => (
            <div className="col-md-6 col-sm-12 my-1 ">
              <span
                href="#"
                className="card flex-row  box-shadow custom-border border-none"
              >
                <img
                  className="card-img-left flex-auto my-auto rounded d-lg-block "
                  src={item.image}
                  style={{ width: "80px", height: "80px" }}
                  alt=""
                />
                <div className="card-body d-flex align-items-start ">
                  <div className="line-h">
                    <h5 className="mb-1">
                      <a className="text-dark custom-text-clr" href="#">
                        {item.title}
                      </a>
                    </h5>
                    <span className=" mb-auto card-text-size custom-text-clr">
                      {item.description}
                    </span>
                  </div>
                  <div className="d-flex flex-column ml-3">
                    <button className="btn btn-secondary plus-btn bg-color text-decoration-none">
                      +
                    </button>
                    <span className="text-center mt-3 custom-text-clr  ">
                      {item.price}
                    </span>
                  </div>
                </div>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
