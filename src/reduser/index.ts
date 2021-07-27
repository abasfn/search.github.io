import { AnyAction } from "redux"
import { CombindeReduser } from "../model/combinde.model"
import { data, StateModel } from "../model/state.model"

const inishialState: StateModel = {
    data: [],
    status: 0
}
export const getuser = (state = inishialState, action: AnyAction) => {
    if (action.type === 'GETUSER') {
        state = { ...action.payload }
    }
    if (action.type === 'REMOVE-ITEM') {
        state.data = state.data.filter((item: data) => item !== action.payload)
        return { ...state }
    }
    if (action.type === 'ADD-LIST') {
        state.data = [action.payload, ...state.data]
        return { ...state }
    }
    if (action.type === 'SEARCH') {
        state.data = state.data.filter(item => (item.title ?? '').search(action.payload) >= 0)
        return { ...state }
    }
    return state
}
export const mainState = (item: CombindeReduser) => item.getuser