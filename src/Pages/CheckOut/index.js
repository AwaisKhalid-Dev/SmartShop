import React, { useState } from "react";
import coffee from "../../imges/coffee.png";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const CheckOut = () => {
  const [counter, setCounter] = useState({ item1: 1, item2: 1 });

  const cofees = [
    {
      id: 1,
      name: "Cappuccino",
      detail: "A smooth, mild coffee blend.",
      price: 15,
      image: coffee,
    },
    {
      id: 2,
      name: "Latte",
      detail: "A smooth, mild coffee blend.",
      price: 18,
      image: coffee,
    },
  ];

  const handleIncrementClick = (itemId) => {
    setCounter({ ...counter, [itemId]: counter[itemId] + 1 });
  };

  const handleDecrementClick = (itemId) => {
    if (counter[itemId] > 1) {
      setCounter({ ...counter, [itemId]: counter[itemId] - 1 });
    }
  };

  const getTotalPrice = (itemId, price) => {
    return counter[itemId] * price;
  };

  const calculateTotalBill = () => {
    return cofees.reduce((total, item) => total + getTotalPrice(`item${item.id}`, item.price), 0);
  };

  return (
    <div className="mx-auto w-100 mt-2 custom-mb">
      <div className="mx-auto col-md-6 col-sm-12">
        <div className="row">
          {cofees.map((item, index) => (
            <div key={item.id} className="col-sm-12 my-1 px-2 rounded">
              <div className="d-flex justify-content-between content-items-center my-2 shadow-lg px-2">
                <img className="my-auto rounded" src={item.image} style={{width:"80px",height:"80px"}} alt="" />
                <div className="ml-2">
                  <b className="m-0 custom-text-clr">{item.name}</b>
                  <p className=" line-h custom-text-clr mt-1">
                      {item.detail}
                    </p>
                </div>
                <div className="d-flex flex-column justify-content-center mt-4">
                  <div className="d-flex">
                  <AiOutlineMinusCircle className="h3 pointer heading-color" onClick={() => handleDecrementClick(`item${item.id}`)} />
                  <h1 className="h4 heading-color mx-1">{counter[`item${item.id}`]}</h1>
                  <AiOutlinePlusCircle className="h3 pointer heading-color" onClick={() => handleIncrementClick(`item${item.id}`)} />
                  </div>
                  <div><h4 className="text-center custom-text-clr">${getTotalPrice(`item${item.id}`, item.price)}</h4></div>
                </div>
                
              </div>
            </div>
          ))}
        </div>

        <div className="bottom-0 w-100">
          <div className="d-flex justify-content-between">
            <h1 className="h4 heading-color mt-3">Total:</h1>
            <h1 className="h4 heading-color mt-3">${calculateTotalBill().toFixed(2)}</h1>
          </div>

          <button className="bg-color text-white pointer py-2 rounded fs-5 text-center w-100 mt-3 fw-normal">
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;