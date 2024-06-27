import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ItemType } from '../types'
import { addTodo } from '../stores/todo'

const CreateTodo = () => {

  const [todo, setTodo] = useState<string>('')
  const dispatch = useDispatch()

  const submitHandle = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(todo.trim()){
      const payload: ItemType = {
        id: Math.floor(Math.random() * 99999999999),
        todo
      }

      dispatch(addTodo(payload))
      setTodo('')
    }
  }

  return (
    <form onSubmit={submitHandle} className='w-full max-w-[400px] flex items-center gap-2'>
        <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value) } value={todo} className='w-full outline-0 text-lg font-medium capitalize bg-zinc-800 placeholder:text-white/20 rounded-md px-5 h-11' placeholder='add to do...' type="text" />
        <button className='bg-indigo-500 px-5 h-11 transition-all duration-500 hover:bg-indigo-600 text-lg font-medium rounded-md'>Add</button>
    </form>
  )
}

export default CreateTodo