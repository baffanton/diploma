import { useNavigate } from 'react-router-dom';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Layout } from 'widgets/Layout';
import { Text } from 'ui/Text';
import { FontSizesEnum } from 'enums/fontSizeTypes';

const ControlPanel: React.FC<any> = ({ panel }) => {
    const navigate = useNavigate();

    const { title, icon, url } = panel;

    const clickHandler = () => {
        return navigate(url);
    }

    return (
        <Layout className="control-panel" onClick={clickHandler}>
            <FontAwesomeIcon className="control-panel__icon" icon={icon} />
            <Text className="control-panel__title" fontSize={FontSizesEnum.large}>{title}</Text>
        </Layout>
    )
}

export { ControlPanel };
