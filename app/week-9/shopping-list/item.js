export default function Item({ name, quantity, category, onSelect }) {
    return (
      <li onClick={onSelect} className="mx-5 my-5 border-3 p-3 rounded-md bg-blue-100 cursor-pointer ">
        <p className="italic">{name}</p> 
        <p className="italic">Quantity: {quantity}</p>
        <p className="italic">Category: {category}</p>
      </li>
    );
  }