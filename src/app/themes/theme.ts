import { createMuiTheme } from 'material-ui/styles';
import {grey, amber, red} from 'material-ui/colors';

export function getTheme() {
    const muiTheme = createMuiTheme({
        palette: {
            error: red,
            primary: grey,
            secondary: amber,
            type: 'light',

        },
    });

    return muiTheme;
}
