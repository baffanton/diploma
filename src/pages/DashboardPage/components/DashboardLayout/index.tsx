import { AlignItemsTypes } from 'enums/flexTypes';
import { Column } from 'ui/Field';
import { DashboardRow } from './components/DashboardRow';
import { ControlRows } from './config';
import './style.scss';


const DashboardLayout = () => {
    return (
        <Column className="dashboard-layout" fullHeight ai={AlignItemsTypes.center}>
            <p className="dashboard-layout__title">Панель управления</p>
            <Column className="dashboard-layout__controls" noFlex ai={AlignItemsTypes.center} fullHeight>
                {ControlRows.map(({id, panels}) => {
                    return <DashboardRow key={id} panels={panels} />
                })}
            </Column>
        </Column>
    )
}

export { DashboardLayout };
