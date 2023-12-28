import { ADD, REDUCE } from "./actionType"

export const addTodoFunction = () => {
    return { type: ADD }
}

export const reduceTodoFunction = () => {
    return { type: REDUCE }
}