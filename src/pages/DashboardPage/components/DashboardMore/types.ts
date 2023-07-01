import { ModalTypes } from 'enums/modalTypes';
import { UserRolesEnum } from 'enums/userTypes';
import { IDashboardPage } from 'pages/DashboardPage/config';
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
import { IAddUserModalOptions } from 'ui/Modal/components/AddUser/types';
import { IChooseModalOptions } from 'ui/Modal/components/ChooseModal/types';
import { IEditUserModalOptions } from 'ui/Modal/components/EditUser/types';

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
        onClose: () => any,
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
