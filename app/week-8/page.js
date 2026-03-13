'use client';
import NewItem from './NewItem.js';
import ItemList from './item-list.js';
import itemsData from './items.json';
import {useState} from "react";
import MealIdeas from './MealIdeas.js';

export default function Page(){

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    
    const handleAddItem = (newItem) => {
        setItems((prev) => [...prev,  newItem]);
        
    };

    const handleItemSelect = (item) => {
        const cleanedName = item.name
        .split(",")[0]
        .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
        .trim();
        console.log(cleanedName);
    setSelectedItemName(cleanedName);

    }

    return(
       <div className="flex gap-6">
            <div>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>
            <div>
                <MealIdeas ingredient={selectedItemName}/>
            </div>
        </div>
    );
    
}