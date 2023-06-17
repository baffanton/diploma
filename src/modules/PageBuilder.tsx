import AuthPage from "pages/AuthPage";
import { DashboardPage } from "pages/DashboardPage";
import { DashboardLayout } from "pages/DashboardPage/components/DashboardLayout";
import DashboardMore from "pages/DashboardPage/components/DashboardMore";
import { DashboardPagesConfig } from "pages/DashboardPage/config";
import HomePage from "pages/HomePage";
import { connect } from "react-redux";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { IModal } from "store/reducers/PageReducer/helpers";
import { fetchUser } from "store/reducers/UserReducer/actions";
import { Modal } from "ui/Modal";
import { Layout } from "widgets/Layout";
import './style.scss';
import { Loader } from "widgets/Loader";
import { tryLogIn } from "helpers/autoLogin";
import { Dispatch, useEffect } from "react";
import { IFetchUser } from "store/reducers/UserReducer/types";


interface IPageBuilder {
    auth: boolean;
    isOpenModal: boolean;
    modal: IModal | null;
    loaderPoints: number;
    fetchUser: () => Dispatch<IFetchUser>;
}

const getModal = (isOpenModal: boolean, modal: IModal | null) => {
    if (!isOpenModal || !modal) {
        return null;
    }

    const { type, onClose, option } = modal;

    return <Modal type={type} closeModal={onClose} option={option} />
}

const PageBuilder: React.FC<IPageBuilder> = ({
    isOpenModal,
    modal,
    loaderPoints,
    fetchUser,
}) => {
    const navigate = useNavigate();

    useEffect(() => {
        tryLogIn(navigate, fetchUser);
    }, [])

    return (
        <Layout className="page">
            {loaderPoints > 0 && (
                <Loader />
            )}
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/dashboard/*" element={<><DashboardPage /><Outlet /></>}>
                    <Route index element={<DashboardLayout />} />
                    {DashboardPagesConfig.map(page => {
                        return <Route key={page.id} path={page.id} element={<DashboardMore page={page} />} />
                    })}
                </Route>
            </Routes>
            {getModal(isOpenModal, modal)}
        </Layout>
    )
}

const mapStateToProps = (state: any) => {
    const { user, page } = state;

    return {
        auth: user.auth,
        isOpenModal: page.isOpenModal,
        modal: page.modal,
        loaderPoints: page.loaderPoints,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchUser() { return dispatch(fetchUser()); },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageBuilder);
