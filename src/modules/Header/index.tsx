import { faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { ImageEnum } from "enums/images";
import { UserRolesEnum } from "enums/userTypes";
import { connect } from "react-redux";
import { Link as LinkRouter } from "react-router-dom";
import { HomeSvgSelector } from "ui/HomeSvgSelector";
import './style.scss';
import { getShortName } from "./helpers";
import { Layout } from "widgets/Layout";
import { Text } from "widgets/Text";
import { SizeEnum } from "enums/sizeTypes";
import { Icon } from "ui/Icon";
import { Link } from 'widgets/Link';

interface IHeader {
    role: UserRolesEnum;
    firstname: string;
    lastname: string;
    surname: string;
    imageUrl: string;
}

const Header: React.FC<IHeader> = ({ firstname, lastname, surname, role, imageUrl }) => {
    const shortName = getShortName(firstname, lastname, surname);

    return (
        <Layout className="header">
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
                    <LinkRouter to="/home">
                        <HomeSvgSelector icon={ImageEnum.logo} />
                    </LinkRouter>
                </Layout>
                <Layout className="header__profile-data">
                    <Text className="header__user-name" fontSize={SizeEnum.medium}>{shortName}</Text>
                    <img className="header__user-icon" src={imageUrl} alt="" />
                    {role === UserRolesEnum.admin && (
                        <LinkRouter to="/dashboard">
                            <Icon className="header__settings" fontAwesomeIcon={faGears} heightType={SizeEnum.medium} />
                        </LinkRouter>
                    )}
                </Layout>
            </Layout>
            
            
        </Layout>
    )
}

const mapStateToProps = (state: any) => {
    const { user } = state;

    return {
        firstname: user.firstname,
        lastname: user.lastname,
        surname: user.surname,
        role: user.role,
        imageUrl: user.imageUrl
    }
}

export default connect(mapStateToProps)(Header);
