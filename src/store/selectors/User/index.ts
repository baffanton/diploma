import { createStateSelector } from "../helpers";

const user = {
    userData: createStateSelector('user.data'),
    userType: createStateSelector('user.type')
}

export { user };
