import { IAddUserModalOptions } from 'components/ui/Modal/components/AddUser/types';
import { IChooseModalOptions } from 'components/ui/Modal/components/ChooseModal/types';
import { IEditUserModalOptions } from 'components/ui/Modal/components/EditUser/types';
import { ModalTypes } from 'enums/modalTypes';
import { UserRolesEnum } from 'enums/userTypes';
import { IDashboardPage } from 'pages/DashboardPage/types';
import { Dispatch } from 'react';
import { ICloseModal, IOpenModal, IShowLoader, IHideLoader } from 'store/reducers/PageReducer/types';
import {
    ISecurityModel,
    ISportModel,
    IUsersModel,
    IFinancialHelpModel,
    ILegalHelpModel,
    IAwardsModel,
    IEducationModel,
} from 'store/reducers/TableReducer/helpers';
import {
    IFetchSecurity,
    IFetchSport,
    IFetchUsers,
    IFetchFinancialHelp,
    IFetchLegalHelp,
    IFetchAwards,
    IFetchEducation,
} from 'store/reducers/TableReducer/types';

export interface IDashboardMore {
    page: IDashboardPage;
    security: ISecurityModel[];
    sport: ISportModel[];
    users: IUsersModel[];
    financialHelp: IFinancialHelpModel[];
    legalHelp: ILegalHelpModel[];
    awards: IAwardsModel[];
    education: IEducationModel[];
    fetchSecurity: () => Dispatch<IFetchSecurity>;
    fetchSport: () => Dispatch<IFetchSport>;
    fetchUsers: () => Dispatch<IFetchUsers>;
    fetchFinancialHelp: () => Dispatch<IFetchFinancialHelp>;
    fetchLegalHelp: () => Dispatch<IFetchLegalHelp>;
    fetchAwards: () => Dispatch<IFetchAwards>;
    fetchEducation: () => Dispatch<IFetchEducation>;
    closeModal: () => Dispatch<ICloseModal>;
    openModal: (
        modalTypes: ModalTypes,
        onClose: () => void,
        options: IAddUserModalOptions | IEditUserModalOptions | IChooseModalOptions,
    ) => Dispatch<IOpenModal>;
    showLoader: () => Dispatch<IShowLoader>;
    hideLoader: () => Dispatch<IHideLoader>;
    auth: boolean;
    role: UserRolesEnum;
}

export interface ITableColumn {
    Header: string;
    accessor: string;
}

export type TableDataTypes =
    | ISecurityModel[]
    | ISportModel[]
    | IUsersModel[]
    | IFinancialHelpModel[]
    | ILegalHelpModel[]
    | IAwardsModel[]
    | IEducationModel[];
