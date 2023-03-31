import { DashboardPagesUrlEnum } from "enums/dashboardPages";
import { AwardsPage } from "pages/ControlPages/AwardsPage";
import { EducationPage } from "pages/ControlPages/EducationPage";
import { FinancialHelpPage } from "pages/ControlPages/FinancialHelpPage";
import { LegalHelpPage } from "pages/ControlPages/LegalHelpPage";
import { MembersPage } from "pages/ControlPages/MembersPage";
import { OSHAPage } from "pages/ControlPages/OSHAPage";
import { SportPage } from "pages/ControlPages/SportPage";
import { DashboardPage } from "pages/DashboardPage";
import { HomePage } from "pages/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import { Column } from "ui/Field";

const PageBuilder: React.FC<any> = () => {
    return (
        <Column className="page" fullHeight>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path={DashboardPagesUrlEnum.osha} element={<OSHAPage />} />
                <Route path={DashboardPagesUrlEnum.sport} element={<SportPage />} />
                <Route path={DashboardPagesUrlEnum.members} element={<MembersPage />} />
                <Route path={DashboardPagesUrlEnum.financialHelp} element={<FinancialHelpPage />} />
                <Route path={DashboardPagesUrlEnum.legalHelp} element={<LegalHelpPage />} />
                <Route path={DashboardPagesUrlEnum.awards} element={<AwardsPage />} />
                <Route path={DashboardPagesUrlEnum.education} element={<EducationPage />} />
            </Routes>
        </Column>
    )
}

export { PageBuilder };
