import * as React from 'react';
import * as style from './style.css';
import * as classnames from 'classnames/bind';
import { Typography } from 'material-ui';
import { STORE_UI } from '../../constants/stores';
import { UIStore } from '../../stores';
import { inject, observer } from 'mobx-react';
import { IPlannerStore } from '../../stores';

// Bind our classnames and stylesheet
const cx = classnames.bind(style);

export interface ToolboxElementProps {
    className?: string;
    text: string;
    store: IPlannerStore;
}

@inject(STORE_UI)
@observer
export class ToolboxElement extends React.Component<ToolboxElementProps> {
    private handleClick(): void {
        const uiStore = this.props[STORE_UI] as UIStore;
        uiStore.togglePlanner(this.props.store);
    }

    public render() {
        const iconWrapperClasses = cx({
            'iconWrapper': true,
            'iconWrapperToggled': this.props.store.state.isActive,
        });

        return (
            <div className={style.toolboxElement} onClick={() => this.handleClick()}>
                <Typography className={style.toolboxText}>
                    {this.props.text}
                </Typography>
                <div className={iconWrapperClasses}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
