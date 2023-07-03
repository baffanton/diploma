import './style.scss';
import { useEffect, useState } from 'react';
import { fetchDataByPageId, getTableDataByPageId } from './helpers';
import { connect } from 'react-redux';
import {
    addUser,
    deleteUser,
    editUser,
    fetchAwards,
    fetchEducation,
    fetchFinancialHelp,
    fetchLegalHelp,
    fetchSecurity,
    fetchSport,
    fetchUsers,
} from 'store/reducers/TableReducer/actions';
import { useNavigate } from 'react-router-dom';
import { faArrowLeft, faDownload, faUserMinus, faUserPen, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { DashboardPagesUrlEnum } from 'enums/dashboardPages';
import { closeModal, hideLoader, openModal, showLoader } from 'store/reducers/PageReducer/actions';
import { ModalTypes } from 'enums/modalTypes';
import { SizeEnum } from 'enums/sizeTypes';
import { IDashboardMore, TableDataTypes } from './types';
import { UserRolesEnum } from 'enums/userTypes';
import { Icon } from 'components/ui/Icon';
import { IAddUserDataModel, IAddUserModalOptions } from 'components/ui/Modal/components/AddUser/types';
import { IChooseModalOptions } from 'components/ui/Modal/components/ChooseModal/types';
import { IEditUserDataModel, IEditUserModalOptions } from 'components/ui/Modal/components/EditUser/types';
import { Table } from 'components/ui/Table';
import { Layout } from 'components/widgets/Layout';
import { Link } from 'components/widgets/Link';
import { Text } from 'components/widgets/Text';
import { Title } from 'components/widgets/Title';

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
    auth,
    role,
}) => {
    const navigate = useNavigate();
    const [selectedRowIndex, setSelectedRowIndex] = useState<string | null>(null);
    const [tableData, setTableData] = useState<TableDataTypes | []>([]);

    const { id, title, exportUrl, tableConfig, isClickable } = page;

    useEffect(() => {
        if (auth && role === UserRolesEnum.user) {
            navigate('/home');
        }
    }, [auth, role]);

    useEffect(() => {
        fetchDataByPageId(
            id,
            fetchSecurity,
            fetchSport,
            fetchUsers,
            fetchFinancialHelp,
            fetchLegalHelp,
            fetchAwards,
            fetchEducation,
        );

        const newData = getTableDataByPageId(id, security, sport, users, financialHelp, legalHelp, awards, education);
        setTableData(newData || []);
    }, [id, page, sport, security, users, awards, education, legalHelp, financialHelp]);

    const onBackButtonHandler = () => {
        return navigate('/dashboard');
    };

    const closeModalHandler = () => {
        closeModal();
    };

    const onAddMemberButtonHandler = () => {
        openModal(ModalTypes.addUser, closeModalHandler, {
            onAddUserHandler: onAddMemberHandler,
        });
    };

    const onAddMemberHandler = (data: IAddUserDataModel) => {
        showLoader();
        addUser(data)
            .then(() => {
                fetchUsers();
                setSelectedRowIndex(null);
            })
            .finally(() => {
                closeModal();
                hideLoader();
            });
    };

    const onEditMemberHandler = (data: IEditUserDataModel) => {
        showLoader();
        editUser(data)
            .then(() => {
                fetchUsers();
                setSelectedRowIndex(null);
            })
            .finally(() => {
                closeModal();
                hideLoader();
            });
    };

    const onAcceptModalHandler = () => {
        if (!selectedRowIndex || !tableData || id !== DashboardPagesUrlEnum.users) {
            return null;
        }

        const { userId } = tableData[Number(selectedRowIndex)];

        showLoader();
        deleteUser(userId)
            .then(() => {
                fetchUsers();
                setSelectedRowIndex(null);
            })
            .finally(() => {
                closeModal();
                hideLoader();
            });
    };

    const onRemoveMemberButtonHandler = () => {
        if (!selectedRowIndex || !tableData || id !== DashboardPagesUrlEnum.users) {
            return null;
        }

        openModal(ModalTypes.chooseModal, closeModalHandler, {
            message: 'Вы уверены, что хотите удалить пользователя?',
            onAccept: onAcceptModalHandler,
            onAcceptTitle: 'Удалить',
            onCancelTitle: 'Отмена',
            title: 'Удаление пользователя',
        });
    };

    const onEditMemberButtonHandler = () => {
        if (!selectedRowIndex || !tableData || id !== DashboardPagesUrlEnum.users) {
            return null;
        }

        const selectedUser = tableData[Number(selectedRowIndex)];

        openModal(ModalTypes.editModal, closeModalHandler, {
            user: selectedUser,
            onEditUserHandler: onEditMemberHandler,
        });
    };

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
                <Title className="dashboard-more__title" fontSize={SizeEnum.large}>
                    {title}
                </Title>
                <Link className="dashboard-more__export" href={exportUrl}>
                    <Text className="dashboard-more__export-title" fontSize={SizeEnum.large}>
                        Экспорт
                    </Text>
                    <Layout className="dashboard-more__export-icon-container">
                        <Icon
                            className="dashboard-more__export-icon"
                            heightType={SizeEnum.medium}
                            fontAwesomeIcon={faDownload}
                        />
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
                            className="dashboard-more__edit-user"
                            fontAwesomeIcon={faUserPen}
                            onClick={onEditMemberButtonHandler}
                            heightType={SizeEnum.medium}
                            disabled={!selectedRowIndex || !tableData}
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
    );
};

const mapStateToProps = (state: any) => {
    const { table, user } = state;

    return {
        security: table.security,
        sport: table.sport,
        users: table.users,
        financialHelp: table.financialHelp,
        legalHelp: table.legalHelp,
        awards: table.awards,
        education: table.education,
        auth: user.auth,
        role: user.role,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchSecurity() {
            return dispatch(fetchSecurity());
        },
        fetchSport() {
            return dispatch(fetchSport());
        },
        fetchUsers() {
            return dispatch(fetchUsers());
        },
        fetchFinancialHelp() {
            return dispatch(fetchFinancialHelp());
        },
        fetchLegalHelp() {
            return dispatch(fetchLegalHelp());
        },
        fetchAwards() {
            return dispatch(fetchAwards());
        },
        fetchEducation() {
            return dispatch(fetchEducation());
        },
        closeModal() {
            return dispatch(closeModal());
        },
        openModal(
            modalTypes: ModalTypes,
            onClose: () => void,
            options: IChooseModalOptions | IAddUserModalOptions | IEditUserModalOptions,
        ) {
            return dispatch(openModal(modalTypes, onClose, options));
        },
        showLoader() {
            return dispatch(showLoader());
        },
        hideLoader() {
            return dispatch(hideLoader());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMore);
