import * as React from 'react';
import * as style from './style.css';
import * as classnames from 'classnames/bind';
import { Typography } from 'material-ui';
import { STORE_UI } from '../../constants/stores';
import { UIStore } from '../../stores';
import { inject, observer } from 'mobx-react';
import { ApplicationMode } from '../../models';

// Bind our classnames and stylesheet
const cx = classnames.bind(style);

export interface ToolboxElementProps {
    className?: string;
    text: string;
    mode: ApplicationMode;
}

@inject(STORE_UI)
@observer
export class ToolboxElement extends React.Component<ToolboxElementProps> {
    private handleClick(): void {
        const uiStore = this.props[STORE_UI] as UIStore;
        uiStore.toggleMode(this.props.mode);
    }

    public render() {
        const uiStore = this.props[STORE_UI] as UIStore;
        const iconWrapperClasses = cx({
            'iconWrapper': true,
            'iconWrapperToggled': uiStore.uiState.appMode === this.props.mode,
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
