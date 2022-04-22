import axios from 'axios'
import { ParseDate } from '@/helpers/dates'
// @ts-ignore
// todo: trazer o helper ASAP
import { formatNumber } from '@js/helpers'

export type Status = 'active' | 'inactive' | 'pending' | 'deleted' | undefined
export type Icon = 'success' | 'warning'

export interface MysqlFetch {
    (): User
}

export interface User {
    name: String
    age: Number
    status: Status
    create(): User
    update(): User
}

export type XUser = {
    name: String,
    age: Number,
    status?: Status,
}

export const user: User = {
    name: 'Tio Jobs',
    age: 22,
    status: undefined,
    create() { return this },
    update() {
        const date: Date = ParseDate('01/01/2022')

        const number: String = formatNumber(123456)

        console.log(date, number)

        return this
    },
}

// user.status = 'closed'
// user.update()



export interface Response {
    message: String
    status?: Status[]
    data: Array<User>
}

const api = async() =>  {
    // const response: Response = await foo()

    // user.status = response.status[0]
}

