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
    name: string;
    surname: string;
    patronymic: string;
    picture: string;
}

const Header: React.FC<IHeader> = ({ name, surname, patronymic, role, picture }) => {
    const shortName = getShortName(name, surname, patronymic);

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
                <img className="header__user-icon" src={picture} alt="" />
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
        name: user.name,
        surname: user.surname,
        patronymic: user.patronymic,
        role: user.role,
        picture: user.picture
    }
}

export default connect(mapStateToProps)(Header);
