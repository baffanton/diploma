import { faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImageEnum } from "enums/images";
import { UserRolesEnum } from "enums/userTypes";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { HomeSvgSelector } from "ui/HomeSvgSelector";
import './style.scss';
import { getShortName } from "./helpers";
import { Layout } from "widgets/Layout";
import { Text } from "ui/Text";
import { FontSizesEnum } from "enums/fontSizeTypes";

interface IHeader {
    role: UserRolesEnum;
    firstname: string;
    lastname: string;
    surname: string;
    imageUrl: string;
}

const Header: React.FC<IHeader> = ({ firstname, lastname, surname, role, imageUrl }) => {
    debugger;
    const shortName = getShortName(firstname, lastname, surname);

    return (
        <Layout className="header">
            <Layout className="header__links">
                <a href="https://vk.com/eurochem_prof" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="header__link" icon={faVk} />
                </a>
                <FontAwesomeIcon className="header__link" icon={faTelegram} />
            </Layout>
            <Layout className="header__company">
                <Link to="/home">
                    <HomeSvgSelector icon={ImageEnum.logo} />
                </Link>
            </Layout>
            <Layout className="header__profile-data">
                <Text className="header__user-name" fontSize={FontSizesEnum.large}>{shortName}</Text>
                <img className="header__user-icon" src={imageUrl} alt="" />
                {role === UserRolesEnum.admin && (
                    <Link to="/dashboard">
                        <FontAwesomeIcon className="header__settings" icon={faGears} />
                    </Link>
                )}
            </Layout>
        </Layout>
    )
}

const mapStateToProps = (state: any) => {
    const { user } = state;

    return {
        firstname: user.firstname,
        lastname: user.lastname,
        surname: user.patronymic,
        role: user.role,
        imageUrl: user.imageUrl
    }
}

export default connect(mapStateToProps)(Header);
