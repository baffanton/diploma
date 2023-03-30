import { HomePage } from "pages/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import { Column } from "ui/Field";
import { pages } from "./pagesConfig";

interface IPageBuilder {
    
}

const PageBuilder: React.FC<IPageBuilder> = () => {
    return (
        <Column className="page">
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </Column>
    )
}

export { PageBuilder };
