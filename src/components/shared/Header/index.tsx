import React from 'react';
import { connect } from 'react-redux';
import { Link as LinkRouter, useNavigate } from 'react-router-dom';
import { Icon } from 'components/core/Icon';
import { Layout } from 'components/core/Layout';
import { Link } from 'components/core/Link';
import { Text } from 'components/core/Text';
import { getCompanyLogo } from '../../../helpers/companyLogo';
import { getShortName } from './helpers';
import { IHeader } from './types';
import { faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';
import { faArrowRightFromBracket, faGears } from '@fortawesome/free-solid-svg-icons';
import { SizeEnum } from 'enums/sizeTypes';
import { UserRolesEnum } from 'enums/userTypes';
import { logoutUser } from 'store/reducers/UserReducer/actions';
import './style.scss';

const Header: React.FC<IHeader> = ({ firstname, lastname, surname, role, imageUrl, logoutUser }) => {
    const navigate = useNavigate();
    const shortName = getShortName(firstname, lastname, surname);

    const onExitClickHandler = () => {
        logoutUser();
        navigate('/');
    };

    const onDashboardIconClickHandler = () => {
        if (role === UserRolesEnum.admin) {
            navigate('/dashboard');
        }
    };

    return (
        <Layout className="header" id="header">
            <Layout className="header__container">
                <Layout className="header__links">
                    <Link href="https://vk.com/eurochem_prof">
                        <Icon className="header__link" fontAwesomeIcon={faVk} heightType={SizeEnum.medium} />
                    </Link>
                    <Link href="/">
                        <Icon className="header__link" fontAwesomeIcon={faTelegram} heightType={SizeEnum.medium} />
                    </Link>
                </Layout>
                <Layout className="header__company">
                    <LinkRouter className="header__company-link" to="/home">
                        {getCompanyLogo()}
                    </LinkRouter>
                </Layout>
                <Layout className="header__profile-data">
                    {role === UserRolesEnum.admin && (
                        <LinkRouter to="/dashboard">
                            <Icon
                                className="header__settings"
                                fontAwesomeIcon={faGears}
                                onClick={onDashboardIconClickHandler}
                                heightType={SizeEnum.short}
                            />
                        </LinkRouter>
                    )}
                    <Text className="header__user-name" fontSize={SizeEnum.medium}>
                        {shortName}
                    </Text>
                    <Icon className="header__user-icon" src={imageUrl}></Icon>
                    <Icon
                        className="header__exit"
                        fontAwesomeIcon={faArrowRightFromBracket}
                        onClick={onExitClickHandler}
                        heightType={SizeEnum.short}
                    />
                </Layout>
            </Layout>
        </Layout>
    );
};

const mapStateToProps = (state) => {
    const { user } = state;

    return {
        firstname: user.firstname,
        lastname: user.lastname,
        surname: user.surname,
        role: user.role,
        imageUrl: user.imageUrl,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser() {
            return dispatch(logoutUser());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
