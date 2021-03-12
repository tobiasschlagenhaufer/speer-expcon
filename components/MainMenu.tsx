import React from "react";
import { Box, Button, Grow, makeStyles, List, ListItem, ListItemText } from "@material-ui/core";
import { Menu } from "@material-ui/icons"
import NextLink from "next/link"
import { theme } from "../utils/theme";

// Styles specifically for burger menu
const useStyles = makeStyles({
    fullPage: {
        width: '100vw',
        height: '100vh',
        transition: '500ms ease-in-out'
    },
    regPage: {
        height: 'auto',
        width: 'auto',
    },
    menuContent: {
        borderRadius: '50%',
        width: '60vh',
        transform: 'translate(-20%, -20%)',
        transition: '500ms ease-in-out'
    },
    hoverTextWhat: {
        '&:hover': {
            color: theme.base.red,
        }
    },
    hoverTextPerks: {
        '&:hover': {
            color: theme.base.blue,
        }
    },
    hoverTextPricing: {
        '&:hover': {
            color: theme.base.yellow,
        }
    }
});

// This is the background colour when the user clicks on menu
interface Props {
    pgColour: string
}

// Menu component to reuse on all pages. Expands in a circle to reveal a drawer.
export default function MainMenu(Props) {
    const classes = useStyles();
    const [state, setState] = React.useState({open: false});
    const textColour = (Props.pgColour == "white" && !state.open) ? "black" : "white";

    // toggle opening and closing of menu
    const toggleMenu = () => (
        event: React.KeyboardEvent | React.MouseEvent,
      ) => {
        setState({open: !state.open});
    }

    // function to build the title.
    const title = () => (
        <Box 
            fontSize="1.8rem"
            fontWeight={500}
        >
            EXP|CON
        </Box>
    )

    // helper function of menu items
    const menuList = () => (
        <Box
            onClick={toggleMenu()}
        >
            <List>
                {/* Next.js link tells next.js where to route to */}
                <NextLink href={"/what"}>
                    <ListItem button>
                        <Box color="white" fontSize="2rem" fontWeight="600" className={classes.hoverTextWhat}>WHAT IT IS</Box>
                    </ListItem>
                </NextLink>

                <NextLink href={"/perks"}>
                    <ListItem button>
                        <Box color="white" fontSize="2rem" fontWeight="600" className={classes.hoverTextPerks}>PERKS</Box>
                    </ListItem>
                </NextLink>

                <NextLink href={"/pricing"}>
                    <ListItem button>
                        <Box color="white" fontSize="2rem" fontWeight="600" className={classes.hoverTextPricing}>PRICING</Box>
                    </ListItem>
                </NextLink>
            </List>
        </Box>
    )

    return (
            <React.Fragment>
                {/* Big box that expands to entire page when pressed */}
                <Box 
                    className={(state.open) ? classes.fullPage : null}
                    bgcolor={(state.open) ? Props.pgColour : 'transparent'}
                    position="absolute"
                    style={{zIndex: 999}}
                >

                {/* Smaller radius box used as the circle. Contains title and menu. */}
                <Box
                    className={classes.menuContent}
                    bgcolor={(state.open) ? 'black' : 'transparent'}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height={state.open ? '60vh' : '25vh'}
                    marginTop={state.open ? 0 : '10vh'}
                >
                    <Box position="absolute">
                        {/* This is the title part */}
                        <Box
                            display="flex"
                            alignContent="center"
                            color={textColour}
                        >
                            {/* Toggle burger button */}
                            <Button
                                onClick={toggleMenu()}
                                variant="text"
                            >
                                {/* Hamburger Icon */}
                                <Menu htmlColor={textColour}/>
                            </Button>
                            {title()}
                        </Box>

                        {/* Menu that uses "Grow" to expand */}
                        <Grow in={state.open} style={{ transformOrigin: '0 0 0' }}>
                            {menuList()}
                        </Grow>
                    </Box>
                </Box>
                </Box>
            </React.Fragment>
    );
}