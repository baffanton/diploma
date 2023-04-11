import { AlignItemsTypes, JustifyContentTypes } from 'enums/flexTypes';
import { connect } from 'react-redux';
import { Row } from 'ui/Field';
import { getShortNameByFullName } from './helpers';
import './style.scss';

interface IProfile {
    name: string;
    surname: string;
    patronymic: string;
    picture?: string;
}

const Profile: React.FC<IProfile> = ({
    name,
    surname,
    patronymic,
    picture
}) => {
    if (!name || !surname || !patronymic) {
        return null;
    }
    
    const shortName = getShortNameByFullName(name, surname, patronymic);

    return (
        <Row className="profile" ai={AlignItemsTypes.center} jc={JustifyContentTypes.flexEnd}>
            <p className="profile__name">{shortName}</p>
            <Row className="profile__logo-container">
                <img className="profile__logo" src={picture} alt="" />
            </Row>
        </Row>
    )
}

const mapStateToProps = (state: any) => {
    const { user } = state;

    return {
        name: user.name,
        surname: user.surname,
        patronymic: user.patronymic,
        picture: user.picture
    }
}

export default connect(mapStateToProps)(Profile);
