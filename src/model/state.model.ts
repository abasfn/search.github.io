export type StateModel = {
    status: number;
    data: data[]
}
export type data = {
    completed?: boolean
    id?: number
    title?: string
    userId?: number
}
export type addData = {
    title: string
}