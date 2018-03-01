import * as React from 'react';
import * as style from './style.css';
import { Typography } from 'material-ui';
import { STORE_UI } from '../../constants/stores';
import { UIStore } from '../../stores';
import { inject, observer } from 'mobx-react';

export interface ToolboxElementProps {
    className?: string;
    text: string;
}

export interface ToolboxElementState {
    toggle: boolean;
}

@inject(STORE_UI)
@observer
export class ToolboxElement extends React.Component<ToolboxElementProps, ToolboxElementState> {
    constructor(props: ToolboxElementProps, context: ToolboxElementState) {
        super(props, context);

        this.state = {
            toggle: false,
        };
    }

    private toggle(): void {
        const storeUi = this.props[STORE_UI] as UIStore;
        storeUi.toggleDrawer();

        this.setState({
            toggle: !this.state.toggle,
        });
    }

    public render() {
        return (
            <div className={style.toolboxElement} onClick={() => this.toggle()}>
                <Typography className={style.toolboxText}>
                    {this.props.text}
                </Typography>
                <div className={style.iconWrapper}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
