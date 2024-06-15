export default async function PostDetails({ postId }) {

    await new Promise((resolve)=>
    {
        setTimeout(()=>{
                resolve();
        },2000);
    })
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
            next: {
                revalidate: 60
            },
        }

    );
    const post = await response.json();

     return (
        
           
            <div
                style=
                {{
                    width: "70%",
                    background: "white",
                    color: "black",
                    margin: "10px",
                    borderRadius: "10px",
                    borderColor: "black",
                    borderWidth: "2px",
                    paddingLeft: "10px"
                }}>

                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
       
    )
}