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
import { Column } from "ui/Field";;

interface IPageBuilder {
    auth: boolean;
}

const PageBuilder: React.FC<IPageBuilder> = ({ auth }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        tryAutoLogIn(dispatch);
    }, [dispatch])

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
