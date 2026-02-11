import Item from './item';
import items from './items.json';
export default function ItemList(){
    return(
        <ul className=" dark:text-black mx-30 my-10 border p-3 rounded-md bg-blue-200">
            {items.map((item) => (
                <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                 />
            ))}
        </ul>
    );
    
}