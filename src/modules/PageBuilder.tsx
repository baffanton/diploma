import { DashboardPage } from "pages/DashboardPage";
import { DashboardLayout } from "pages/DashboardPage/components/DashboardLayout";
import { DashboardMore } from "pages/DashboardPage/components/DashboardMore";
import { DashboardPagesConfig } from "pages/DashboardPage/config";
import { HomePage } from "pages/HomePage";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Column } from "ui/Field";

const PageBuilder: React.FC<any> = () => {
    return (
        <Column className="page" fullHeight>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
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

export { PageBuilder };
