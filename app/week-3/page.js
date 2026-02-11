import GroceryItemList from "./GroceryItemList";
export default function Page(){
    return(
        <main className="bg-amber-100" >
            <h1 className="dark:text-black m-auto text-center text-2xl font-bold underline">
                Shopping List📃
            </h1>
            <GroceryItemList />
        </main>
    );
}