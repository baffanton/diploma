export enum RequestApiEnum {
    // Отчеты
    tableUsers = '/table-users',
    tableSport = '/table-sport',
    tableAwards = '/table-awards',
    tableEducation = '/table-education',
    tableFinancialHelp = '/table-financial-help',
    tableLegalHelp = '/table-legal-help',
    tableSecurity = '/table-security',

    // Домашняя страница
    getNews = '/news',
    getEvents = '/events',

    // Изменение участников
    deleteUser = '/table-users',
    addUser = '/table-users',
    editUser = '/table-users',

    // Получение токена
    getToken = '/login',
}
