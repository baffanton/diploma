import { AlignItemsTypes } from 'enums/flexTypes';
import { Header } from 'modules/Header';
import { Column } from 'ui/Field';
import { DashboardRow } from './components/DashboardRow';
import { ControlRows } from './config';
import './style.scss';

const DashboardPage = () => {
    const withHeader = true;
    return (
        <>
            {withHeader && <Header />}
            <Column className="dashboard-page" fullHeight ai={AlignItemsTypes.center}>
                <p className="dashboard-page__title">Панель управления</p>
                <Column className="dashboard-page__controls" noFlex ai={AlignItemsTypes.center} fullHeight>
                    {ControlRows.map(({id, panels}) => {
                        return <DashboardRow key={id} panels={panels} />
                    })}
                </Column>
            </Column>
        </>
        
    )
}

export { DashboardPage };
