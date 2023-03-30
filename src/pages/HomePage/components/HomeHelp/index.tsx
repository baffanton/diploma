import { JustifyContentTypes } from 'enums/flexTypes';
import { Column, Row } from 'ui/Field';
import { configHelp } from './config';
import './style.scss';

const HomeHelp: React.FC<any> = () => {
    return (
        <Column className="home-help" fullHeight>
            <p className="home-help__title">Заказать</p>
            {configHelp.map(({id, title}) => {
                return (
                    <Row key={id} className="home-help__item" jc={JustifyContentTypes.center}>
                        <p className='home-help__reference'>{title}</p>
                    </Row>
                )
            })}
        </Column>
    )
}

export { HomeHelp };
