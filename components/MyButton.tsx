import classes from "*.module.scss";
import { Button, makeStyles, Box } from "@material-ui/core";
import NextLink from "next/link";
import {theme} from "../utils/theme";

// Custom button styles
const useStyles = makeStyles({
    gradient: {
        margin: "1rem",
        padding: "0.5rem",
        maxWidth: "25%",
        minWidth: "10vw", 
        borderRadius: "2rem",
        fontSize: "1.2rem",
        fontWeight: 400,
        textTransform: "none"
    },
    redText: {
        color: theme.base.red,
    },
    whiteText: {
        color: "white",
    }
});

// argument props
interface Props {
    text: string,
    variant: string,
    src: string,
}

// A simple custom button with rounded edges
export default function MyButton(Props) {
    const classes = useStyles();
    const myClass = classes.gradient;
    const colourClass = (Props.variant != "white") ? classes.whiteText : classes.redText;
    return (
        // Next link "links" to next.js so that it knows how to route the page
        <NextLink href={Props.src}>
            <Button
                className={`${myClass} ${colourClass}`}
                // check if it is to be multicoloured or specific colour
                style={(Props.variant=="rainbow") ? {background: "linear-gradient(to right, cyan 25%, blue 40%, purple 60%, red 75%, orange)"} : {background: Props.variant}}
                variant="contained"    
            >
                {Props.text}
            </Button>
        </NextLink>
    )
}