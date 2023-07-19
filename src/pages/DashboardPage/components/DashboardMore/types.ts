import { Dispatch } from 'react';
import { IAddUserModalOptions } from 'components/core/Modal/components/AddUser/types';
import { IChooseModalOptions } from 'components/core/Modal/components/ChooseModal/types';
import { IEditUserModalOptions } from 'components/core/Modal/components/EditUser/types';
import { ModalTypes } from 'enums/modalTypes';
import { UserRolesEnum } from 'enums/userTypes';
import { IDashboardPage } from 'pages/DashboardPage/types';
import { ICloseModal, IHideLoader, IOpenModal, IShowLoader } from 'store/reducers/PageReducer/types';
import {
    IAwardsModel,
    IEducationModel,
    IFinancialHelpModel,
    ILegalHelpModel,
    ISecurityModel,
    ISportModel,
    IUsersModel,
} from 'store/reducers/TableReducer/helpers';
import {
    IFetchAwards,
    IFetchEducation,
    IFetchFinancialHelp,
    IFetchLegalHelp,
    IFetchSecurity,
    IFetchSport,
    IFetchUsers,
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
