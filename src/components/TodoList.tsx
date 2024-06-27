import React from 'react'
import Todo from './Todo'
import { RootState } from '../stores/index'
import { ItemType } from '../types'
import { useSelector } from 'react-redux'

const TodoList = () => {
  
  const { todos } = useSelector((state: RootState) => state.todo)

  return (
   <>
    {
     <div className='mt-5 flex flex-col gap-2 w-full max-w-[400px]'>
      {
        !todos && 'todo yok'
      }
       {
        todos && todos.map((todo: ItemType) => (
          <Todo key={todo.id} data={todo}/>
        ))
       }
     </div>
    }
   </>
  )
}

export default TodoList