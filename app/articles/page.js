import Link from "next/link";


export default function ArtcilesPage(){
    return(
        <div>
            <h3>Articles Page</h3>
            <Link href="/posts">
            <button>Take me to the posts</button>
            </Link>
        </div>
    )
}