import './index.css'

function Book({author, title, cover}){
    return (
        <section>
            <img src={cover} alt={title} />
            <h2 className="text-xl font-bold" >{title}</h2>
            <p className="text-lg">By {author}</p>
        </section>
    )
}


export default Book;