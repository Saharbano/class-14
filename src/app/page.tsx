import Link from "next/link";


export default async function Home() {
  let url = await fetch("https://jsonplaceholder.typicode.com/comments")
  let responce = await url.json();

  
  return (
    <>
   {responce.map((placehold:any) => (
<div>
  <Link href={`${placehold.name}`}>
<h1 className="text-4xl">{placehold.name}</h1>
</Link>
</div>
   ))} 
   
    
    
    
    
    </>
  )
}
