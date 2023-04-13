import { useState } from 'react';
import './style.scss';
import { Column, Row } from 'ui/Field';
import cx from 'classnames';
import { AlignItemsTypes, JustifyContentTypes } from 'enums/flexTypes';

const News: React.FC<any> = () => {
    const [moreClicked, setMoreClicked] = useState<boolean>(false);

    return (
        <Column className={cx("news", moreClicked && "news_isActive")}>
            <Column className="news__body" fullHeight>
                <p className="news__title">Новость №1</p>
                <p className="news__description">Какое-то описание</p>
                <Row jc={JustifyContentTypes.flexEnd} ai={AlignItemsTypes.flexEnd} fullHeight>
                    <p 
                        onClick={() => setMoreClicked(!moreClicked)} 
                        className="news__button"
                    >
                        {moreClicked ? "Меньше" : "Подробнее"}
                    </p> 
                </Row>
            </Column>
            
        </Column>
    )
}

export { News };
