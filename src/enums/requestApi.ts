export enum RequestApiEnum {
    // Новые (проверенные)
    authUser = 'auth/login',
    getUser = '/user',
    getNews = '/news',
    getEvents = '/events',

    logoutUser = '/logout',
    getLogin = '/login',
    usersExport = 'http://192.168.0.52:8080/export/users',
    getUsers = '/users',
    getAwards = '/awards',
    getUserEvents = '/userEvents',
    getUserAwards = '/userAwards',
    deleteUser = '/users',
    addUser = '/users',
    userIsExist = '/users',
    editUser = '/users/update',
    awardsExport = 'http://192.168.0.52:8080/export/awards',
    eventsExport = 'http://192.168.0.52:8080/export/events',
    userAwardsExport = 'http://192.168.0.52:8080/export/userAwards',
    userEventsExport = 'http://192.168.0.52:8080/export/userEvents',
}