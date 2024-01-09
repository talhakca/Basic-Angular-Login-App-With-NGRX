import { Roles } from ".";
import { User } from "./models/user";

export const REGISTERED_USERS: User[] = [
    {
        email: 'adminmail@mockmail.com',
        password: 'Test12345@',
        userType: Roles.Admin
    },
    {
        email: 'superadminmail@mockmail.com',
        password: 'Test12345@',
        userType: Roles.SuperAdmin
    },
    {
        email: 'customer@mockmail.com',
        password: 'Test12345@',
        userType: Roles.Customer
    }
]