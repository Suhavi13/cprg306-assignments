import ItemList from "./item-list";

export default function Page(){
    return(
        <main >
            <div>
                <h1 className=" text-center text-2xl font-bold ">Shopping List</h1>
                <ItemList />
            </div>
        </main>
    );
}