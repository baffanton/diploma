import { createStateSelector } from "../helpers";

const table = {
    users: createStateSelector('table.users'),
    awards: createStateSelector('table.awards'),
    events: createStateSelector('table.events'),
    userAwards: createStateSelector('table.userAwards'),
    userEvents: createStateSelector('table.userEvents')
}

export { table };
