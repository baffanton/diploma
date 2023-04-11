import ProtectedRoute from "helpers/protectedRoute";
import { AuthPage } from "pages/AuthPage";
import { DashboardPage } from "pages/DashboardPage";
import { DashboardLayout } from "pages/DashboardPage/components/DashboardLayout";
import { DashboardMore } from "pages/DashboardPage/components/DashboardMore";
import { DashboardPagesConfig } from "pages/DashboardPage/config";
import { HomePage } from "pages/HomePage";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Outlet, redirect, Route, Routes } from "react-router-dom";
import { authUser, fetchUser } from "store/reducers/UserReducer/actions";
import { Column } from "ui/Field";

interface IPageBuilder {
    auth: boolean;
}

const PageBuilder: React.FC<IPageBuilder> = ({ auth }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(authUser());
        // @ts-ignore
        dispatch(fetchUser());
    })

    return (
        <Column className="page" fullHeight>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/home" element={
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                }
                />
                <Route path="/dashboard/*" element={auth ? <><DashboardPage /><Outlet /></> : <AuthPage />}>
                    <Route index element={<DashboardLayout />} />
                    {DashboardPagesConfig.map(page => {
                        return <Route key={page.id} path={page.id} element={<DashboardMore page={page} />} />
                    })}
                </Route>
            </Routes>
        </Column>
    )
}

const mapStateToProps = (state: any) => {
    const { user } = state;

    return {
        auth: user.auth,
    }
}

export default connect(mapStateToProps)(PageBuilder);
