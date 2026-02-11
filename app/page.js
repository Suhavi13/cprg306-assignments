import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className=" text-2xl text-center font-bold">CPRG 306: Web Development 2 - Assignments</h1>

      
        <ul className=" dark:text-black mx-30 my-10 border p-3 rounded-md bg-amber-200">
          <li className="mx-10 my-5 border p-3 rounded-md bg-amber-100">
            <Link href="/week-2">Go to Week 2 Assignment</Link>
          </li>
          <li className="mx-10 my-5 border p-3 rounded-md bg-amber-100">
            <Link href="/week-3">Go to Week 3 Assignment</Link>
          </li>
          <li className="mx-10 my-5 border p-3 rounded-md bg-amber-100">
            <Link href="/week-4">Go to Week 4 Assignment</Link>
          </li>
          <li className="mx-10 my-5 border p-3 rounded-md bg-amber-100">
            <Link href="/week-5">Go to Week 5 Assignment</Link>
          </li>
        </ul>
   
    </main>
  )
}