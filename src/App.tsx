import CreateTodo from "./components/CreateTodo"
import TodoList from "./components/TodoList"

function App() {

  return (
    <div className="bg-zinc-900 text-white h-screen flex flex-col ga-5 items-center pt-10 px-3">
      <CreateTodo/>
      <TodoList/>
    </div>
  )
}

export default App
