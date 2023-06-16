import { IDashboardPage } from 'pages/DashboardPage/config';
import './style.scss';
import {
    IAwardsModel,
    IEducationModel,
    IFinancialHelpModel,
    ILegalHelpModel,
    ISecurityModel,
    ISportModel,
    IUsersModel
} from 'store/reducers/TableReducer/helpers';
import { Dispatch, useEffect, useState } from 'react';
import { fetchDataByPageId, getTableDataByPageId } from './helpers';
import { connect } from 'react-redux';
import {
    deleteUser,
    fetchAwards,
    fetchEducation,
    fetchFinancialHelp,
    fetchLegalHelp,
    fetchSecurity,
    fetchSport,
    fetchUsers
} from 'store/reducers/TableReducer/actions';
import {
    IFetchAwards,
    IFetchEducation,
    IFetchFinancialHelp,
    IFetchLegalHelp,
    IFetchSecurity,
    IFetchSport,
    IFetchUsers
} from 'store/reducers/TableReducer/types';
import { useNavigate } from 'react-router-dom';
import { Layout } from 'widgets/Layout';
import { Table } from 'ui/Table';
import { faArrowLeft, faDownload, faUserMinus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Text } from "widgets/Text";
import { DashboardPagesUrlEnum } from 'enums/dashboardPages';
import { closeModal, openModal } from 'store/reducers/PageReducer/actions';
import { ICloseModal, IOpenModal } from 'store/reducers/PageReducer/types';
import { ModalTypes } from 'enums/modalTypes';
import { Title } from 'widgets/Title';
import { SizeEnum } from 'enums/sizeTypes';
import { Link } from 'widgets/Link';
import { Icon } from 'ui/Icon';

interface IDashboardMore {
    page: IDashboardPage;
    security: ISecurityModel[];
    sport: ISportModel[];
    users: IUsersModel[];
    financialHelp: IFinancialHelpModel[];
    legalHelp: ILegalHelpModel[];
    awards: IAwardsModel[];
    education: IEducationModel[];
    fetchSecurity: () => Dispatch<IFetchSecurity>;
    fetchSport: () => Dispatch<IFetchSport>;
    fetchUsers: () => Dispatch<IFetchUsers>;
    fetchFinancialHelp: () => Dispatch<IFetchFinancialHelp>;
    fetchLegalHelp: () => Dispatch<IFetchLegalHelp>;
    fetchAwards: () => Dispatch<IFetchAwards>;
    fetchEducation: () => Dispatch<IFetchEducation>;
    closeModal: () => Dispatch<ICloseModal>;
    openModal: (modalTypes: ModalTypes, onClose: () => any, options: any) => Dispatch<IOpenModal>;
    deleteUser: (id: string) => Promise<any>;
}

const DashboardMore: React.FC<IDashboardMore> = ({ 
    page, 
    security, 
    sport, 
    users, 
    financialHelp, 
    legalHelp,
    awards,
    education,
    fetchSecurity,
    fetchSport,
    fetchUsers,
    fetchFinancialHelp,
    fetchLegalHelp,
    fetchAwards,
    fetchEducation,
    closeModal,
    openModal,
}) => {
    const navigate = useNavigate();
    const { id, title, exportUrl, tableConfig, isClickable } = page;
    const [selectedRowIndex, setSelectedRowIndex] = useState<string | null>(null);
    const tableData = getTableDataByPageId(id, security, sport, users, financialHelp, legalHelp, awards, education);

    useEffect(() => {
        fetchDataByPageId(
            id,
            fetchSecurity,
            fetchSport,
            fetchUsers,
            fetchFinancialHelp,
            fetchLegalHelp,
            fetchAwards,
            fetchEducation
        );
    }, [fetchAwards, fetchEducation, fetchFinancialHelp, fetchLegalHelp, fetchSecurity, fetchSport, fetchUsers, id, page]);

    const onBackButtonHandler = () => {
        return navigate('/dashboard');
    }

    const closeModalHandler = () => {
        closeModal();
    }

    const onAddMemberButtonHandler = () => {
        openModal(ModalTypes.addUser, closeModalHandler, { onAddUserHandler: onAddMemberHandler });
    }

    const onAddMemberHandler = () => {
        
    }

    const onAcceptModalHandler = () => {
        if (!selectedRowIndex || !tableData || id !== DashboardPagesUrlEnum.users) {
            return null;
        }

        const ids = tableData[Number(selectedRowIndex)].id;

        deleteUser(ids)
            .then(res => {
                const { data } = res;
                
                if (!data) {
                    return null;
                }

                fetchUsers();
            })
            .catch(error => {
                console.log(error);
            })
    }

    const onRemoveMemberButtonHandler = () => {
        if (!selectedRowIndex || !tableData || id !== DashboardPagesUrlEnum.users) {
            return null;
        }

        openModal(ModalTypes.chooseModal, closeModalHandler, {
            message: "Вы уверены, что хотите удалить пользователя?",
            onAccept: onAcceptModalHandler,
            onAcceptTitle: "Удалить",
            onCancelTitle: "Отмена",
            title: "Удаление пользователя",
        })
    }

    return (
        <Layout className="dashboard-more">
            <Layout className="dashboard-more__work-elements">
                <Icon
                    className="dashboard-more__back"
                    fontAwesomeIcon={faArrowLeft}
                    onClick={onBackButtonHandler}
                    pointer
                    heightType={SizeEnum.medium}
                />
                <Title className="dashboard-more__title" fontSize={SizeEnum.large}>{title}</Title>
                <Link className='dashboard-more__export' href={exportUrl}>
                    <Text className='dashboard-more__export-title' fontSize={SizeEnum.large}>Экспорт</Text>
                    <Layout className='dashboard-more__export-icon-container'>
                        <Icon className='dashboard-more__export-icon' heightType={SizeEnum.medium} fontAwesomeIcon={faDownload}/>
                    </Layout>
                </Link>
                {id === DashboardPagesUrlEnum.users && (
                    <Layout className="dashboard-more__edit-panel">
                        <Icon
                            className="dashboard-more__add-user"
                            fontAwesomeIcon={faUserPlus}
                            onClick={onAddMemberButtonHandler}
                            heightType={SizeEnum.medium}
                        />
                        <Icon 
                            className="dashboard-more__delete-user"
                            fontAwesomeIcon={faUserMinus}
                            onClick={onRemoveMemberButtonHandler}
                            heightType={SizeEnum.medium}
                            disabled={!selectedRowIndex || !tableData}
                        />
                    </Layout>
                )}
            </Layout>
            <Table 
                config={tableConfig} 
                tableData={tableData} 
                isClickable={isClickable}
                selectedRowIndex={selectedRowIndex}
                setSelectedRowIndex={setSelectedRowIndex}
            />
        </Layout>
    )
}

const mapStateToProps = (state: any) => {
    const { table } = state;

    return {
        security: table.security,
        sport: table.sport,
        users: table.users,
        financialHelp: table.financialHelp,
        legalHelp: table.legalHelp,
        awards: table.awards,
        education: table.education
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchSecurity() { return dispatch(fetchSecurity()); },
        fetchSport() { return dispatch(fetchSport()); },
        fetchUsers() { return dispatch(fetchUsers()); },
        fetchFinancialHelp() { return dispatch(fetchFinancialHelp()); },
        fetchLegalHelp() { return dispatch(fetchLegalHelp()); },
        fetchAwards() { return dispatch(fetchAwards()); },
        fetchEducation() { return dispatch(fetchEducation()); },
        closeModal() { return dispatch(closeModal()); },
        openModal(modalTypes: ModalTypes, onClose: () => any, options: any) { return dispatch(openModal(modalTypes, onClose, options)); },
        deleteUser(id: string) { return dispatch(deleteUser(id)); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMore);
