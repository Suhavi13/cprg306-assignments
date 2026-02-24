"use client"
import NewItem from "./NewItem";
import ItemList from "./item-list";
import itemsData from "./items.json";
import {useState} from "react";

export default function Page(){
    const [items, setItems] = useState(itemsData);

    function handleAddItem(newItem){
        setItems([...items, newItem])
    }
    return(
       <main>
          <div className="m-auto my-30 text-center max-w-fit ">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items } />
          </div>
          
         
       </main>
    );
}