export enum RequestApiEnum {
    // Отчеты
    tableUsers = '/user/all',
    tableSport = '/sport',
    tableAwards = '/awards',
    tableEducation = '/education',
    tableFinancialHelp = '/financial-help',
    tableLegalHelp = '/legal-help',
    tableSecurity = '/security',

    // Домашняя страница
    getUser = '/user',
    getNews = '/news',
    getEvents = '/event',

    // Изменение участников
    deleteUser = '/users/delete',
    addUser = '/users/add',
    editUser = '/users/edit',
}
