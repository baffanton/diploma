import { faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightFromBracket, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AlignItemsTypes, JustifyContentTypes } from "enums/flexTypes";
import { ImageEnum } from "enums/images";
import { UserRolesEnum } from "enums/userTypes";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Row } from "ui/Field"
import { HomeSvgSelector } from "ui/HomeSvgSelector";
import './style.scss';

interface IHeader {
    role: UserRolesEnum;
}

const Header: React.FC<IHeader> = ({ role }) => {
    return (
        <Row className="header" ai={AlignItemsTypes.center}>
            <Row className="header__links">
                <a href="https://vk.com/eurochem_prof" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="header__link" icon={faVk} />
                </a>
                <FontAwesomeIcon className="header__link" icon={faTelegram} />
            </Row>
            <Row className="header__company" jc={JustifyContentTypes.center}>
                <Link to="/home">
                    <HomeSvgSelector icon={ImageEnum.logo} />
                </Link>
            </Row>
            <Row className="header__profile-data" ai={AlignItemsTypes.center} jc={JustifyContentTypes.flexEnd}>
                <FontAwesomeIcon 
                    className="header__log-out" 
                    icon={faArrowRightFromBracket} 
                />
                {role === UserRolesEnum.admin && (
                    <Link to="/dashboard">
                        <FontAwesomeIcon className="header__settings" icon={faGear} />
                    </Link>
                )}
            </Row>
        </Row>
    )
}

const mapStateToProps = (state: any) => {
    const { user } = state;

    return {
        role: user.role
    }
}

export default connect(mapStateToProps)(Header);
