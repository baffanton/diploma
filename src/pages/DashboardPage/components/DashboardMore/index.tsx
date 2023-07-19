import React, { useEffect, useState } from 'react';
import { downloadExcel } from 'react-export-table-to-excel';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/core/Button';
import { Icon } from 'components/core/Icon';
import { Layout } from 'components/core/Layout';
import { IAddUserDataModel, IAddUserModalOptions } from 'components/core/Modal/components/AddUser/types';
import { IChooseModalOptions } from 'components/core/Modal/components/ChooseModal/types';
import { IEditUserDataModel, IEditUserModalOptions } from 'components/core/Modal/components/EditUser/types';
import { Table } from 'components/core/Table';
import { Title } from 'components/core/Title';
import {
    fetchDataByPageId,
    getBodyConfigByPageId,
    getFileNameByPageId,
    getHeaderConfigByPageId,
    getTableDataByPageId,
} from './helpers';
import { IDashboardMore, TableDataTypes } from './types';
import { faArrowLeft, faDownload, faUserMinus, faUserPen, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { DashboardPagesUrlEnum } from 'enums/dashboardPages';
import { ModalTypes } from 'enums/modalTypes';
import { SizeEnum } from 'enums/sizeTypes';
import { UserRolesEnum } from 'enums/userTypes';
import { closeModal, hideLoader, openModal, showLoader } from 'store/reducers/PageReducer/actions';
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
import './style.scss';

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

    const { id, title, tableConfig, isClickable } = page;

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
    }, [id]);

    useEffect(() => {
        const newData = getTableDataByPageId(id, security, sport, users, financialHelp, legalHelp, awards, education);
        setTableData(newData || []);
    }, [users, security, sport, financialHelp, legalHelp, awards, education]);

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

    const onAddMemberHandler = (id: string, data: IAddUserDataModel) => {
        showLoader();
        addUser(id, data)
            .then(() => {
                fetchUsers();
                setSelectedRowIndex(null);
            })
            .finally(() => {
                closeModal();
                hideLoader();
            });
    };

    const onEditMemberHandler = (id: string, data: IEditUserDataModel) => {
        showLoader();
        editUser(id, data)
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

        const { id: userId } = tableData[Number(selectedRowIndex)];

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

    const onExportHandler = () => {
        return downloadExcel({
            fileName: getFileNameByPageId(id),
            sheet: '',
            tablePayload: {
                header: getHeaderConfigByPageId(id),
                body: getBodyConfigByPageId(id, tableData),
            },
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
                <Button
                    className="dashboard-more__export"
                    onClick={onExportHandler}
                    icon={faDownload}
                    title="Экспорт"
                />
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

const mapStateToProps = (state) => {
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

const mapDispatchToProps = (dispatch) => {
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
