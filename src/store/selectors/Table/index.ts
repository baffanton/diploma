import { createStateSelector } from '../helpers';

const table = {
    security: createStateSelector('table.security'),
    sport: createStateSelector('table.sport'),
    users: createStateSelector('table.users'),
    financialHelp: createStateSelector('table.financialHelp'),
    legalHelp: createStateSelector('table.legalHelp'),
    awards: createStateSelector('table.awards'),
    education: createStateSelector('table.education'),
};

export { table };
