import { useState } from "react";

export default function Coffee() {
  const [coffeeList, setCoffeeList] = useState();
  const getCoffee = (temperature) => {
    //fetch coffee api
fetch(`https://api.sampleapis.com/coffee/${temperature}`)
.then(results => results.json()) //pulls body out and returns as another promise
.then(data => setCoffeeList(data))
.catch(err => alert(err))

    //results -> set coffeeList
  };
  return (
    <>
      <button onClick={() => {
        getCoffee('hot')
      }}>HOT</button>
      <button onClick={()=> {
        getCoffee('iced')
      }}>ICED</button>
      <section>
        <h2>Coffee list</h2>
        {!coffeeList ? <p>Loading...</p>:coffeeList.map(coffee => (<p key={coffee.id}>{coffee.title}</p>
        ))
        }
      </section>
    </>
  );
}
