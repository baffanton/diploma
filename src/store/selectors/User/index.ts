import { createStateSelector } from "../helpers";

const user = {
    firstname: createStateSelector('user.firstname'),
    lastname: createStateSelector('user.lastname'),
    surname: createStateSelector('user.surname'),
    imageUrl: createStateSelector('user.imagaUrl'),
    auth: createStateSelector('user.auth'),
    role: createStateSelector('user.role'),
}

export { user };
