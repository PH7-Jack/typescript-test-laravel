import { user, User } from '@/models/user'


declare global {
    interface Window {
        user: User
    }
}


window.user = user
