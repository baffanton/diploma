import { tryAutoLogIn } from "helpers/autoLogin";
import AuthPage from "pages/AuthPage";
import { DashboardPage } from "pages/DashboardPage";
import { DashboardLayout } from "pages/DashboardPage/components/DashboardLayout";
import DashboardMore from "pages/DashboardPage/components/DashboardMore";
import { DashboardPagesConfig } from "pages/DashboardPage/config";
import { HomePage } from "pages/HomePage";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { IModal } from "store/reducers/ModalReducer/helpers";
import { checkAuth } from "store/reducers/UserReducer/actions";
import { Column } from "ui/Field";
import { Modal } from "ui/Modal";


interface IPageBuilder {
    auth: boolean;
    isOpen: boolean;
    modal: IModal | null;
}

const getModal = (isOpen: boolean, modal: IModal | null) => {
    if (!isOpen || !modal) {
        return null;
    }

    const { type, onClose, option } = modal;

    return <Modal type={type} closeModal={onClose} option={option} />
}

const PageBuilder: React.FC<IPageBuilder> = ({ auth, isOpen, modal }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            // @ts-ignore
            dispatch(checkAuth());
        }
    }, [])

    useEffect(() => {
        if (!auth) {
            navigate('/');
        }
    }, [auth, navigate])

    return (
        <Column className="page" fullHeight>
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
            {getModal(isOpen, modal)}
        </Column>
    )
}

const mapStateToProps = (state: any) => {
    const { user, modal } = state;

    return {
        auth: user.auth,
        isOpen: modal.isOpen,
        modal: modal.modal
    }
}

export default connect(mapStateToProps)(PageBuilder);
