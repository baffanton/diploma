import { IDashboardPage } from "pages/DashboardPage/config";
import './style.scss';
import { Column, Row } from "ui/Field";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUserMinus, faUserPen, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { AlignItemsTypes, JustifyContentTypes } from "enums/flexTypes";
import { useNavigate } from "react-router-dom";
import { DashboardPagesUrlEnum } from "enums/dashboardPages";
import { ExportButton } from "ui/ExportButton";
import { Table } from "ui/Table";
import { connect, useDispatch } from "react-redux";
import { IAwardsModel, IEventsModel, IUserAwardsModel, IUserEventsModel, IUserModel } from "store/reducers/TableReducer/helpers";
import { getTableData } from "./helpers";
import { useEffect, useState } from "react";
import { deleteUser, fetchAwards, fetchEvents, fetchUserAwards, fetchUserEvents, fetchUsers } from "store/reducers/TableReducer/actions";
import { closeModal, openModal } from "store/reducers/ModalReducer/actions";
import { ModalTypes } from "enums/modalTypes";
import { DashboardPage } from "pages/DashboardPage";

interface IDashboardMore {
    page: IDashboardPage;
    users: IUserModel[] | null;
    awards: IAwardsModel[] | null;
    events: IEventsModel[] | null;
    userAwards: IUserAwardsModel[] | null;
    userEvents: IUserEventsModel[] | null;
}

const DashboardMore: React.FC<IDashboardMore> = ({ 
    page, 
    users, 
    awards, 
    events, 
    userAwards, 
    userEvents 
}) => {
    const { id, title, exportUrl, tableConfig, isClickable } = page;
    const [selectedRowIndex, setSelectedRowIndex] = useState<string | null>(null);
    const dispatch = useDispatch();
    const tableData = getTableData(id, users, awards, events, userAwards, userEvents);

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchUsers())
        // @ts-ignore
        dispatch(fetchAwards())
        // @ts-ignore
        dispatch(fetchEvents())
        // @ts-ignore
        dispatch(fetchUserAwards())
        // @ts-ignore
        dispatch(fetchUserEvents())
    }, [dispatch])

    const navigate = useNavigate();

    const onBackButtonHandler = () => {
        return navigate('/dashboard');
    }

    const closeModalHandler = () => {
        // @ts-ignore
        dispatch(closeModal());
    }

    const onAddMemberButtonHandler = () => {
        // @ts-ignore
        dispatch(openModal(ModalTypes.addUser, closeModalHandler, null));
    }

    const onRemoveMemberButtonHandler = () => {
        if (!selectedRowIndex || !tableData || id !== DashboardPagesUrlEnum.users) {
            return null;
        }

        // @ts-ignore
        const ids = tableData[Number(selectedRowIndex)].id;
        // @ts-ignore
        dispatch(deleteUser(ids));
    }

    const onChangeMemberButtonHandler = () => {
        if (!tableData || !selectedRowIndex) {
            return null;
        }
    
        const choosenUser = tableData[Number(selectedRowIndex)];
        // @ts-ignore
        dispatch(openModal(ModalTypes.editUser, closeModalHandler, choosenUser));
    }

    return (
        <Column className="dashboard-more">
            <Row className="dashboard-more__work-elements" ai={AlignItemsTypes.center}>
                <FontAwesomeIcon className="dashboard-more__back" icon={faArrowLeft} onClick={onBackButtonHandler} />
                <p className="dashboard-more__title">{title}</p>
                <ExportButton url={exportUrl} />
                {id === DashboardPagesUrlEnum.users && (
                    <Row 
                        className="dashboard-more__user-edit" 
                        ai={AlignItemsTypes.center} 
                        jc={JustifyContentTypes.spaceBetween}
                    >
                        <FontAwesomeIcon 
                            className="dashboard-more__button-user-plus" 
                            icon={faUserPlus} 
                            onClick={onAddMemberButtonHandler} 
                        />
                        <FontAwesomeIcon 
                            className="dashboard-more__button-user-minus" 
                            icon={faUserMinus} 
                            onClick={onRemoveMemberButtonHandler} 
                        />
                        <FontAwesomeIcon 
                            className="dashboard-more__button-user-edit"
                            icon={faUserPen}
                            onClick={onChangeMemberButtonHandler}
                        />
                    </Row>
                )}
            </Row>
            <Table 
                config={tableConfig} 
                tableData={tableData} 
                isClickable={isClickable}
                selectedRowIndex={selectedRowIndex}
                setSelectedRowIndex={setSelectedRowIndex}
            />
        </Column>
    )
}

const mapStateToProps = (state: any) => {
    const { table } = state;

    return {
        users: table.users,
        awards: table.awards,
        events: table.events,
        userAwards: table.userAwards,
        userEvents: table.userEvents
    }
}

export default connect(mapStateToProps)(DashboardMore);
