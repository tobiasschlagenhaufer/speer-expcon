import { createMuiTheme } from '@material-ui/core/styles';

// Custom theme. A bit annoying to implement with TS
export const theme = createMuiTheme({
    base: {
        red:  '#d24848',
        blue: '#1fe1e9',
        yellow: '#ffb33f',
        coal: '#191919'
    },
    palette: {
        neutral: {
            main: '#5c6ac4',
        },
    },
});

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        base: {
            red: string,
            blue: string,
            yellow: string,
            coal: string,
        }
    }
    interface ThemeOptions {
        base: {
            red: string,
            blue: string,
            yellow: string,
            coal: string,
        }
    }
}
    
declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        neutral: Palette['primary'];
    }
    interface PaletteOptions {
        neutral: PaletteOptions['primary'];
    }
}