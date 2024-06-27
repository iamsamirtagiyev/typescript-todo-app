import React from 'react'
import { GoTrash } from "react-icons/go";
import { FaEdit } from "react-icons/fa";
import { ItemType } from '../types';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../stores/todo';

interface TodoProps {
  data: ItemType
}

const Todo = ({data}: TodoProps) => {

  const dispatch = useDispatch()

  const removeItem = () => {
    dispatch(removeTodo(data.id))
  }

  return (
    <div className=' relative flex gap-2 items-center text-lg font-medium capitalize justify-between group px-5 py-2'>
        <div className='md:absolute transition-all duration-500 group-hover:-left-16 left-0 top-0 w-full h-full bg-zinc-800 flex items-center px-5 rounded-md'>
          <input className='bg-transparent outline-0 w-full cursor-pointer' readOnly type="text" value={data.todo} />
        </div>
        <div className='flex gap-3 py-1 justify-end w-auto md:w-full'>
            <button onClick={removeItem} className='transition-all duration-500 bg-red-500 p-2 rounded-md flex items-center justify-center text-lg hover:bg-white hover:text-red-500'>
                <GoTrash/>
            </button>
        </div>
    </div>
  )
}

export default Todo