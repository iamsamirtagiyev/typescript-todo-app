import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import { ItemType, TodoType } from "../types"


const initialState: TodoType = {
    todos: []
}

export const todo = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state: TodoType, action: PayloadAction<ItemType>) => {
            state.todos = [...state.todos, action.payload]
        },
        removeTodo: (state: TodoType, action: PayloadAction<number>) => {
            state.todos = [...state.todos.filter((todo: ItemType) => todo.id != action.payload)]
        },
    }
})

export const { addTodo, removeTodo } = todo.actions
export default todo.reducer