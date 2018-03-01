import * as React from 'react';
import * as style from './style.css';
import { getTheme } from '../../themes/theme';
import { AppBar, Toolbar, IconButton } from 'material-ui';
import { GalaxyIcon } from '../../components/icons';
import { MuiThemeProvider } from 'material-ui/styles';
import { red } from 'material-ui/colors';
import Typography from 'material-ui/Typography/Typography';

export class Header extends React.Component {
    public render() {
        return (
                <AppBar position='static' className={style.header}>
                    <Toolbar>
                            <GalaxyIcon className={style.logoIcon} width={70} height={70}/>
                            <Typography className={style.title} variant='title'>
                                Kerballium
                            </Typography>
                    </Toolbar>
                </AppBar>
        );
    }
}
