import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Icon } from 'components/ui/Icon';
import { Layout } from 'components/widgets/Layout';
import { Text } from 'components/widgets/Text';

import { IControlPanel } from './types';
import { SizeEnum } from 'enums/sizeTypes';

import './style.scss';

const ControlPanel: React.FC<IControlPanel> = ({ panel }) => {
    const navigate = useNavigate();

    const { title, icon, url } = panel;

    const clickHandler = () => {
        return navigate(url);
    };

    return (
        <Layout className="control-panel" onClick={clickHandler}>
            <Icon className="control-panel__icon" pointer fontAwesomeIcon={icon} />
            <Text className="control-panel__title" pointer fontSize={SizeEnum.large}>
                {title}
            </Text>
        </Layout>
    );
};

export { ControlPanel };
