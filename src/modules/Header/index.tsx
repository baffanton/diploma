import { faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AlignItemsTypes, JustifyContentTypes } from "enums/flexTypes";
import { ImageEnum } from "enums/images";
import { Link } from "react-router-dom";
import { Row } from "ui/Field"
import { HomeSvgSelector } from "ui/HomeSvgSelector";
import './style.scss';

const Profile: React.FC<any> = () => {
    return (
        <Row className="profile" ai={AlignItemsTypes.center}>
            <p className="profile__name">Баяндин А.В.</p>
            <Row className="profile__logo-container">
                <img className="profile__logo" src="https://snappygoat.com/b/8b34e326b7d1fdc739b28c8cb2f81a9ef65778a4" alt="" />
            </Row>
        </Row>
    )
}

const Header = () => {
    const admin = true;

    return (
        <Row className="header" ai={AlignItemsTypes.center} jc={JustifyContentTypes.spaceBetween}>
            <Row className="header__links" noFlex>
                <FontAwesomeIcon className="header__link" icon={faVk} />
                <FontAwesomeIcon className="header__link" icon={faTelegram} />
            </Row>
            <Link to="/home">
                <Row className="header__company" noFlex>
                    <HomeSvgSelector icon={ImageEnum.logo} />
                </Row>
            </Link>
            
            <Row className="header__profile-data" noFlex ai={AlignItemsTypes.center}>
                <Profile />
                {admin && <FontAwesomeIcon className="header__settings" icon={faGear} /> }
            </Row>
        </Row>
    )
}

export { Header };
