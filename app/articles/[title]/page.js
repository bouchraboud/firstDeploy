export default function ShowAriclesPage(props){
    console.log(props);
    return(
        <div>
            <h1>
                show Article
            </h1>
            <h1>{props.params.title}</h1>
        </div>
    )
}