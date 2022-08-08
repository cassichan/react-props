import { useState } from "react";

export default function Coffee() {
  const [coffeeList, setCoffeeList] = useState();
  //fetch coffee api with .then
  const getCoffee = (temperature) => {
    fetch(`https://api.sampleapis.com/coffee/${temperature}`)
      .then((results) => results.json())
      .then((data) => setCoffeeList(data)) //results
      .catch((err) => alert(err));
  };

  //fetch coffee api with async await
  const getCoffeeSync = async (temperature) => {
    try {
      const results = await fetch(
        `https://api.sampleapis.com/coffee/${temperature}`
      );
      const data = await results.json();
      setCoffeeList(data);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <>
      <button
        onClick={() => {
          getCoffeeSync("hot");
        }}
      >
        HOT
      </button>
      <button
        onClick={() => {
          getCoffeeSync("iced");
        }}
      >
        ICED
      </button>
      <section>
        <h2>Coffee list</h2>
        {!coffeeList ? (
          <p>Loading...</p>
        ) : (
          coffeeList.map((coffee) => <p key={coffee.id}>{coffee.title}</p>)
        )}
      </section>
    </>
  );
}
