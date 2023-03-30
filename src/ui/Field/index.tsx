import React, { createRef, FC, PropsWithChildren } from "react";
import cx from 'classnames';
import { AlignItemsTypes, DirectionTypes, JustifyContentTypes } from "enums/flexTypes";
import { IField } from "./types";

const Field: FC<PropsWithChildren<IField>> = ({
    id = '',
    children,
    className = '',
    ai = AlignItemsTypes.default,
    jc = JustifyContentTypes.default,
    direction = DirectionTypes.default,
    noFlex = false,
    onClick,
    ...params
}) => {
    const ref = createRef<HTMLDivElement>();
    const classNames = cx(
        className,
        'field',
        jc && `field_jc_${jc}`,
        ai && `field_ai_${ai}`,
        noFlex && `field_no-flex`,
        direction && `field_${direction}`
    )

    if (id) {
        return (
            <div id={id} onClick={onClick} className={classNames} {...params} ref={ref}>{ children }</div>
        )
    }

    return (
        <div onClick={onClick} className={classNames} {...params} ref={ref}>{ children }</div>
    )

}

const Row: React.FC<any> = (props) => {
    const { children } = props;
    return (
        <Field {...props} direction={DirectionTypes.row}>
            {children}
        </Field>
    )
}

const Column: React.FC<any> = (props) => {
    const { children } = props;
    return (
        <Field {...props} direction={DirectionTypes.column}>
            {children}
        </Field>
    )
}

export { Column, Row };
