import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];



export default function App(){
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );

}
//Logo 2.Form 3. Packing List 4. Stats


//logo function'
function Logo(){

  return <h1>🌴FAR AWAY💼</h1>
}


//form function

function Form(){
  const [description, setDescription] = useState("");
  const [quantiy, setQuantity] = useState(1);

  function handleSubmit(e){

    e.preventDefault();

    if(!description) return;
    const newItem = {description, quantiy, packed:false, id:Date.now()};
    console.log(newItem);

    setDescription('')
    setQuantity(1);
  }
  return (
      <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😊 Trip?</h3>
      <select value={quantiy} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({length : 20}, (_,i) => i + 1).map
        ((num) => (
          <option value = {num} key = {num}>
            {num}
          </option>
          ))}
      
      </select>
      <input type="text" placeholder="Item..." value = {description}
      onChange={(e) => 
        setDescription(e.target.value)}/>
      <button>Add</button>
      </form>
  );
}


//Packaging List

function PackingList(){
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
        <Item item ={item} key = {item.id} />

        ))}
      </ul>
    </div>
  );
  
}



function Item({item}){

  return (
    <li>
      <span style={item.packed ? {textDecoration: "Line-through"} : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  )
}



//stats

function Stats(){

  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
      
    </footer>
  )
}






