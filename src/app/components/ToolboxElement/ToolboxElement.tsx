import * as React from 'react';
import * as style from './style.css';
import * as classNames from 'classnames/bind';
import { Paper, Typography } from 'material-ui';

// Bind our classnames and styles
const cx = classNames.bind(style);

export interface ToolboxElementProps {
    className?: string;
    text: string;
}

export interface ToolboxElementState {
    extended: boolean;
}

export class ToolboxElement extends React.Component<ToolboxElementProps, ToolboxElementState> {
    constructor(props: ToolboxElementProps, context: ToolboxElementState) {
        super(props, context);

        this.state = {
            extended: false,
        };
    }

    private mouseEnter(): void {
        this.setState({
            extended: true,
        });
    }

    private mouseLeave(): void {
        this.setState({
            extended: false,
        });
    }

    public render() {
        const classes = cx({ 'toolboxElement': true, 'elementExtended': this.state.extended });
        const textClasses = cx({'toolboxText': true, 'textHidden': !this.state.extended });
        return (
            <div className={classes} onMouseEnter={() => this.mouseEnter()} onMouseLeave={() => this.mouseLeave()}>
                <Typography className={textClasses}>
                    {this.props.text}
                </Typography>
                <div className={style.iconWrapper}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
