export enum RequestApiEnum {
    // Новые (проверенные)
    authUser = 'auth/login',
    getUser = '/user',
    getNews = '/news',
    getEvents = '/event',

    tableUsers = '/user/all',
    deleteUser = '/user/',
    addUser = '/user',

    // Новые (не проверенные)
    getSecurity = '/security',
    getSport = '/sport',
    getUsers = '/users',
    getFinancialHelp = '/financial-help',
    getLegalHelp = '/legal-help',
    getAwards = '/awards',
    getEducation = '/education',
}