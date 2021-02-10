import React from 'react';
import './Spacing.scss'

export default class Spacing extends React.Component {
    render() {
        const objectClassName = `avita-bp__${this.props.className}`;

        return (
            <>
                <hr className={objectClassName} />
            </>
        )
    }
}