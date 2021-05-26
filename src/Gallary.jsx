import React, { useState } from "react";
import Menu from "./Menu";

const Gallary = () => {
    const [items, setItems] = useState(Menu);
    const filterItem = (catItem) =>
    {
        const updatedItems = Menu.filter((curElem) =>
        {
            return curElem.category === catItem;
        });
        setItems(updatedItems);
    }
  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Order Your Favourite Dish
      </h1>
      <hr />
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
                  <button className="btn btn-warning" onClick={() => filterItem("breakfast")}>Breakfast</button>
          <button className="btn btn-warning"onClick={() => filterItem("lunch")}>Lunch</button>
          <button className="btn btn-warning"onClick={() => filterItem("evening")}>Evening</button>
          <button className="btn btn-warning" onClick={() => filterItem("dinner")}>Dinner</button>
          <button className="btn btn-warning" onClick={() => setItems(Menu)}>All</button>
        </div>
      </div>
      <div className="menu-items container-fluid mt-5 my-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5 gy-5">
              {items.map((item) => {
                const { id, name, image, description, price } = item;

                return (
                  <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4"  key={id}>
                    <div className="row Item-inside">
                      <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img src={image} alt="menuPic" className="img-fluid" />
                      </div>
                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-title pt-4 pb-3">
                          <h1>{name}</h1>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                        <div className="menu-price-book">
                          <div className="price-book-divide d-flex justify-content-between">
                            <h2>{price}</h2>
                            <a href="#">
                              <button className="btn btn-primary">
                                Order Now
                              </button>
                            </a>
                          </div>
                          <p>*Price may very on selected date.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallary;
