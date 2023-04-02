import { IDashboardPage } from "pages/DashboardPage/config";
import './style.scss';
import { Column, Row } from "ui/Field";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faDownload, faUserMinus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { ButtonWithIcon } from "ui/ButtonWithIcon";
import { AlignItemsTypes, JustifyContentTypes } from "enums/flexTypes";
import { useNavigate } from "react-router-dom";
import { DashboardPagesUrlEnum } from "enums/dashboardPages";

interface IDashboardMore {
    page: IDashboardPage;
}

const DashboardMore: React.FC<IDashboardMore> = ({ page }) => {
    const { id, title, exportFunction } = page;
    const navigate = useNavigate();

    const onBackButtonHandler = () => {
        return navigate('/dashboard');
    }

    const onAddMemberButtonHandler = () => {

    }

    const onRemoveMemberButtonHandler = () => {

    }

    return (
        <Column className="dashboard-more">
            <Row className="dashboard-more__work-elements" ai={AlignItemsTypes.center}>
                <FontAwesomeIcon className="dashboard-more__back" icon={faArrowLeft} onClick={onBackButtonHandler} />
                <p className="dashboard-more__title">{title}</p>
                <ButtonWithIcon icon={faDownload} onClick={exportFunction} />
                {id === DashboardPagesUrlEnum.members && (
                    <Row 
                        className="dashboard-more__user-edit" 
                        ai={AlignItemsTypes.center} 
                        jc={JustifyContentTypes.spaceBetween}
                    >
                        <FontAwesomeIcon className="dashboard-more__user-plus" icon={faUserPlus} onClick={onAddMemberButtonHandler} />
                        <FontAwesomeIcon className="dashboard-more__user-minus" icon={faUserMinus} onClick={onRemoveMemberButtonHandler} />
                    </Row>
                )}
            </Row>
        </Column>
    )
}

export { DashboardMore };
