export default function({books}){
    const {name, price} = books
    return (
        <div>
            <h4>Book Name : {name}</h4>
            <h4>Book Price : {price}</h4>
        </div>
    )
}