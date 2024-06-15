import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";


export default async function PostDetailsPage({ params }) {
    const postId = params.postId;
    const loadingJsx=(<div>kjh</div>);

    console.log(`==========================================================================${params.postId}`);
    return (
        <div>
            <h1>posts details</h1>
            <Suspense fallback={loadingJsx}>
                <PostDetails postId={postId}/>
                </Suspense>
           
        </div>
    )
}