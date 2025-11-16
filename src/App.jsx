import './index.css'
import Book from './Book';
import MasteringReact from './mastering react.svg'
import PracticalReact from './practical react.svg'
import ReactInAction from './react in action.svg'
import TodoList from './TodoList'
import React from 'react'

function App(){
  // const names = ["Anthony Pham", "Alex Johnson", "Bob Climo"];

  // const list = names.map(name => {
  //   return <li>{name}</li>
  // })

  // return <ul>{list}</ul>

  // return (
    // <main className='w-screen h-screen flex justify-center items-center'>
    //   <div className='flex flex-col gap-3 w-[45%]'>
    //     <h1 className="text-3xl font-bold">Favorite Books</h1>
    //     <div className='flex gap-5 justify-center w-full'>
    //       <Book author="Anthony Pham" title="Mastering React" cover={MasteringReact}/>
    //       <Book author="Alex Johnson" title="Practical React" cover={PracticalReact}/>
    //       <Book title="React in Action" author="Bob Climo" cover={ReactInAction}/>
    //     </div>
    //   </div>
    // </main>
  // )

  const books = [
    {title: "Mastering React", author: "Anthony Pham", cover: MasteringReact},
    {title: "Practical React", author: "Alex Johnson", cover: PracticalReact},
    {title: "React in Action", author: "Bob Climo", cover: ReactInAction}
  ];

  const todos = [
    {id:1, title: "Learn React", completed: true},
    {id:2, title: "Build an app", completed: false},
    {id:3, title: "Deploy the app", completed: false}
  ]

  const renderBooks = books.map(book => {
    return (
      <Book
      key={crypto.randomUUID()}
      title={book.title}
      author={book.author}
      cover={book.cover}
      />
    )
  })

  return (
    <main className = "w-screen h-screen flex justify-center items-center">
      <div className = "w-[45%] space-y-6 hidden">
        <h1 className = "text-3xl font-bold">Favorites</h1>
        <div className="flex gap-3">{renderBooks}</div>
      </div>

      <div>
        <h2 className="text-3xl font-bold">ToDo List</h2>
        <div>
          <TodoList todos={todos}/>
        </div>
      </div>


    </main>
  )
}

export default App;