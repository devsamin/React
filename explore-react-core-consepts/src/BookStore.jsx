import Book from "./Book"
export default function BookStore({books}){
    return(
        <div>
            <h3>Total Book {books.length}</h3>
            <h3>{
                books.map(book=><Book books={book}></Book>)
                }
            </h3>
        </div>
    )
}