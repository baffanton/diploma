import { DashboardPagesUrlEnum } from "enums/dashboardPages";
import MOCKED_DATA_USERS from './mockDataUsers.json';
import MOCKED_DATA_AWARDS from './mockDataAwards.json';

export const getTableData = (id: DashboardPagesUrlEnum) => {
    switch (id) {
        case DashboardPagesUrlEnum.users:
            return MOCKED_DATA_USERS;
        case DashboardPagesUrlEnum.awards:
            return MOCKED_DATA_AWARDS;
        default:
            return null;
    }
}