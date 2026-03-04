export default function Item({ name, quantity, category }) {
    return (
      <li className="mx-5 my-5 border-3 p-3 rounded-md bg-blue-100 ">
        <p className="italic">{name}</p> 
        <p className="italic">Quantity: {quantity}</p>
        <p className="italic">Category: {category}</p>
      </li>
    );
  }