export default function GroceryItem({name, quantity, category}){
    return(
        
            
                <li className="dark:text-black mx-20 my-5 border p-3 rounded-md bg-amber-200 ">
                   <p className="font-semibold italic"> {name}</p>
                   <p>
                    Quantity: {quantity}<br/>
                    Category: {category}
                    </p>
                </li>
         
  
    );
}