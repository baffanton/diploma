import { Dispatch } from "react";
import { IFetchUser } from "store/reducers/UserReducer/types";

export const tryLogIn = (
    navigate: any, 
    fetchUser: () => Dispatch<IFetchUser>,
) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return navigate('/');
    }

    fetchUser();
}