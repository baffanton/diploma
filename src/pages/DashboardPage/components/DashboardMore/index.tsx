import { IDashboardPage } from "pages/DashboardPage/config";
import './style.scss';
import { Column, Row } from "ui/Field";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUserMinus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { AlignItemsTypes, JustifyContentTypes } from "enums/flexTypes";
import { useNavigate } from "react-router-dom";
import { DashboardPagesUrlEnum } from "enums/dashboardPages";
import { ExportButton } from "ui/ExportButton";
import { Table } from "ui/Table";
import { connect, useDispatch } from "react-redux";
import { IUserModel } from "store/reducers/TableReducer/helpers";
import { getTableData } from "./helpers";
import { useState } from "react";
import { deleteUser } from "store/reducers/TableReducer/actions";

interface IDashboardMore {
    page: IDashboardPage;
    users: IUserModel[] | null;
}

const DashboardMore: React.FC<IDashboardMore> = ({ page, users }) => {
    const { id, title, exportUrl, tableConfig, isClickable } = page;
    const [selectedRowIndex, setSelectedRowIndex] = useState<string | null>(null);
    const dispatch = useDispatch();
    const tableData = getTableData(id);

    const navigate = useNavigate();

    const onBackButtonHandler = () => {
        return navigate('/dashboard');
    }

    const onAddMemberButtonHandler = () => {

    }

    const onRemoveMemberButtonHandler = () => {
        if (!selectedRowIndex || !tableData) {
            return null;
        }

        const id = tableData[Number(selectedRowIndex)].id;
        // @ts-ignore
        dispatch(deleteUser(id));
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
                            className="dashboard-more__user-plus" 
                            icon={faUserPlus} 
                            onClick={onAddMemberButtonHandler} 
                        />
                        <FontAwesomeIcon 
                            className="dashboard-more__user-minus" 
                            icon={faUserMinus} 
                            onClick={onRemoveMemberButtonHandler} 
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
    }
}

export default connect(mapStateToProps)(DashboardMore);
