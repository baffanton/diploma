import { useNavigate } from 'react-router-dom';
import './style.scss';
import { Layout } from 'widgets/Layout';
import { Text } from 'widgets/Text';
import { SizeEnum } from 'enums/sizeTypes';
import { Icon } from 'ui/Icon';

const ControlPanel: React.FC<any> = ({ panel }) => {
    const navigate = useNavigate();

    const { title, icon, url } = panel;

    const clickHandler = () => {
        return navigate(url);
    }

    return (
        <Layout className="control-panel" onClick={clickHandler}>
            <Icon className="control-panel__icon" pointer fontAwesomeIcon={icon} />
            <Text className="control-panel__title" pointer fontSize={SizeEnum.large}>{title}</Text>
        </Layout>
    )
}

export { ControlPanel };
