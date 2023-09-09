const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];



export default function App() {
  return(
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}



//making compoment for webpage


function Logo(){
  return <h1>🌴 Far Away 💼</h1>
}


function Form() {
  return(
    <form className="add-form">
      <h3>What do you need for your 😍 trip ?</h3>
      <select name="" id="">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <input type="text" placeholder="Item...."/>
    </form>
  )
}

function PackingList() {
  return (
      <div className="list">
        <ul>
          {initialItems.map((item/**this argument of callback function  */) => (
            <Item/**name of component which we declare */ item/**this will be name 
            of props */={item/**object  */} />
            ))}
        </ul>
     </div>
  )
}

function Item({item})
{
  return <li>
      <span style={item.packed ? {textDecoration: "line-through"} : {}}>
          {" "}
          {item.quantity} {item.description}
      </span>
      <button>❌&times;</button>
    </li>
}


function Stats() {
  return (
    <footer className="stats">
      <em>💼 You Have X items on your list, and you already packed X (X%)</em>
    </footer>
  )
}



