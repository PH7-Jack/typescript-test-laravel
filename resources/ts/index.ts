export interface User {
    name: String
    age: Number
    isAdmin: Boolean,
}
declare global {
    interface Window {
        user: User
    }
}
window.user = {
    name: 'John',
    age: 30,
    isAdmin: true,
    id: 1,
    email: 'john@gmail.com'
} as User
