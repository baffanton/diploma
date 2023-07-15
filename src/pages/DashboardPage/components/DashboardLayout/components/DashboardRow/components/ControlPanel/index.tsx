import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Icon } from 'components/core/Icon';
import { Layout } from 'components/core/Layout';
import { Text } from 'components/core/Text';

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
