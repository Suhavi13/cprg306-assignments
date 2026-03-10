"use client";
import {useState} from "react";

    const initialState = {name: "", quantity: 1, category: "produce"};

export default function NewItem({onAddItem}){
   
    const [items, setItem] = useState({
        name: "",
        quantity: 1,
        category: "produce",
    })


    const handleChange = (e) => {
        const {name, value} = e.target;
        setItem((prev) => ({ ...prev, [name]: value}));
    }


    function handleSubmit(event){
        event.preventDefault();
        const newItem = { ...items, id: crypto.randomUUID() };
        onAddItem(newItem);
        setItem(initialState);


    }
    return(
        <form onSubmit={handleSubmit} className="dark:border-white text-black text-center text-bold text-lg border-black mx-auto p-10 border-3 rounded-md bg-blue-300">
         
            <label className="flex flex-row gap-2">
              Name:
              <input id="name" type="text" name="name"value={items.name} onChange={handleChange} required = {true} className="bg-blue-50 border-2 border-black p-0.5 w-full rounded-md text-black" />

            </label>   

           
            <div className="flex flex-row gap-2 mt-7">
                Quantity:
                <input type="number" name="quantity" min="1" max="99" value={items.quantity} onChange={handleChange}  className="bg-blue-50 border-2 border-black p-0.5 w-full rounded-md text-black" />
                
                <div>Category:</div> 
                <select value={items.category} name="category" onChange={handleChange} className="bg-blue-50 border-2 border-black p-0.5 w-full rounded-md text-black">
                  
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozenFoods">Frozen Foods</option>
                    <option value="cannedGoods">Canned Goods</option>
                    <option value="dryGoods">Dry goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                 </select>
            </div>
           
            <button type="submit" className=" text-bold text-2xl mx-80 px-5 p-2 rounded-md border-2 border-black bg-blue-500 text-white mt-8 hover:bg-blue-950">
                +
            </button>
        </form>
    )
}