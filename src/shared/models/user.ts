import { Roles } from "..";

export interface User {
    email?: string;
    password?: string;
    userType?: Roles;
}