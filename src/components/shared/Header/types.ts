import { Dispatch } from '@reduxjs/toolkit';
import { UserRolesEnum } from 'enums/userTypes';
import { ILogOutUser } from 'store/reducers/UserReducer/types';

export interface IHeader {
    role: UserRolesEnum;
    firstname: string;
    lastname: string;
    surname: string;
    imageUrl: string;
    logoutUser: () => Dispatch<ILogOutUser>;
}
