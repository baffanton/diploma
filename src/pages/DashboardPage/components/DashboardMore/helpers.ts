import { DashboardPagesUrlEnum } from "enums/dashboardPages";
import { 
    IAwardsModel, 
    IEventsModel, 
    IUserAwardsModel, 
    IUserEventsModel, 
    IUserModel 
} from "store/reducers/TableReducer/helpers";

export const getTableData = (
    id: DashboardPagesUrlEnum, 
    users: IUserModel[] | null,
    awards: IAwardsModel[] | null,
    events: IEventsModel[] | null,
    userAwards: IUserAwardsModel[] | null,
    userEvents: IUserEventsModel[] | null
    ) => {
    switch (id) {
        case DashboardPagesUrlEnum.users:
            return users;
        case DashboardPagesUrlEnum.awards:
            return awards;
        case DashboardPagesUrlEnum.education:
            return events;
        case DashboardPagesUrlEnum.financialHelp:
            return userAwards;
        case DashboardPagesUrlEnum.legalHelp:
            return userEvents;
        default:
            return null;
    }
}