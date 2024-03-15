import { useState } from "react";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
  });

  const [restaurants, setRestaurants] = useState([]);

  const handleForm = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addrestaurant = (e) => {
    e.preventDefault();
    setRestaurants([...restaurants, formData]);
  };

  const renderList = () => {
    return restaurants.map((restaurant, i) => {
      return (
        <div
          key={i}
          style={{ border: "2px solid red", padding: "25px", margin: "12px" }}
        >
          <h1>{restaurant.name}</h1>
          <h2>{restaurant.cuisine}</h2>
        </div>
      );
    });
  };

  return (
    <>
      <h1>Add a Restaurant</h1>
      <form action="" onSubmit={addrestaurant}> 
      {/* If we use onSubmit function in button or input type=submit then when we click enter it won't work */}
        <label htmlFor="name">Name</label>
        <br />
        <input
          value={formData.name}
          onChange={handleForm}
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <br />
        <label htmlFor="cuisine">Cuisine</label> <br />
        <input
          value={formData.cuisine}
          onChange={handleForm}
          type="text"
          name="cuisine"
          id="cuisine"
          placeholder="cuisne"
        />{" "}
        <br />
        <input type="submit" />
      </form>
      <h2>My Restaurants</h2>
      {restaurants.length === 0 ? <h1>Nothing here yet</h1> : renderList()}
    </>
  );
}

export default App;
