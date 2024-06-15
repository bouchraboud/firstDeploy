import Link from "next/link";
import Todo from "../components/todo";

export default async function PostsPage(){
   
   const response = await fetch('https://jsonplaceholder.typicode.com/posts', 
            {
                next:{
                    revalidate:60
                } 
            }

   );
   const posts =await response.json();
   const postsJSX = posts.map((post)=>{
        return(
            <Link href={`/posts/${post.id}`}
             style={{width:"70%"}}>
            <div style={{width:"70%",background:"white",color:"black",margin:"10px",borderRadius:"10px",borderColor:"black",borderWidth:"2px",paddingLeft:"10px"}}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div></Link>
        )
   })
      
    return(
        <div>
            <h1>Posts Page</h1>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",}}>{postsJSX}</div>
            <div><Todo /></div>
        </div>
    )
}