import axios from "axios"
import { data } from "../model/state.model"

export const getdata = () => {
    return async (dispach: any) => {
        dispach({
            type: 'LOADING',
            payload: { loading: true, data: false }
        })
        const server = await axios.get('https://jsonplaceholder.typicode.com/todos')
        dispach({
            type: 'LOADING',
            payload: { loading: false, data: true }
        })
        dispach({
            type: 'GETUSER',
            payload: server
        })
    }
}
export const removeitem = (item: data) => {
    return {
        type: 'REMOVE-ITEM',
        payload: item
    }
}
export const addlist = (item: data) => {
    return {
        type: 'ADD-LIST',
        payload: item
    }
}
export const search = (item: String) => {
    return {
        type: 'SEARCH',
        payload: item
    }
}