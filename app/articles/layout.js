export const metadata={
    title:'Articles',
};
export default function ({children}){
    return(
        <div>
            <h1>Articles</h1>
            <div style={{marginTop:'50px',backgroud:'blue',padding:"20px"}}>
                {children}

            </div>
        </div>
    )
}