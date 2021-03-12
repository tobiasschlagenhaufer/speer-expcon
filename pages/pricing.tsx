import React from "react";
import { Box, ThemeProvider, makeStyles, List, ListItemIcon, ListItemText, ListItem } from "@material-ui/core";
import {MusicNoteRounded} from "@material-ui/icons"
import { theme } from "../utils/theme";
import MainMenu from "../components/MainMenu";
import MyButton from "../components/MyButton";
import Footer from "../components/Footer";
import Perks from "../components/Perks";

// Custom styles for the pricing page
const useStyles = makeStyles({
    mainPage: {
        minHeight: '100vh',
		width: '100vw',
        backgroundColor: theme.base.coal,
    },
    content: {
        padding: "7%",
    },
    whiteText: {
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 400,
    },
    myListItem: {
        padding: '3px',
    }
})

// Pricing page, shows 3 different price plans and the perks
export default function Pricing() {
    const classes = useStyles();
    var listN = 0;

    return (
      	<Box>
			<ThemeProvider theme={theme}>
                <Box className={classes.mainPage}>

                    {/* Main burger menu, same on all pages */}
                    <MainMenu pgColour={theme.base.coal} />

                    {/* Pricing start */}
                    <Box className={classes.content}>
                        <Box color="white" fontSize="4rem" fontWeight="700">PRICING</Box>
                        <Box color="white" fontSize="2rem" fontWeight="400">Test out our app today! Choose from thee subscription Based payment models.</Box>

                        {/* Pricing breakdown */}
                        <Box display="flex" justifyContent="space-between" paddingTop="40px">

                            {/* Basic plan */}
                            <Box >
                                <Box color={theme.base.red} fontSize="2rem" fontWeight="400">BASIC</Box>
                                <hr color={theme.base.red}/>
                                <Box color={theme.base.red} fontSize="2.5rem" fontWeight="400">MONTHLY</Box>
                                <Box color={theme.base.red} fontSize="4rem" fontWeight="400">$9</Box>
                                <List>
                                    {/* I am using a template here to reuse code for "comments" */}
                                    {["Very good", "Amazing", "Perfect job", "Love this", "It's so good", "Features"].map((comment) => (
                                        <ListItem className={classes.myListItem} key={"list-item-"+(listN++)}>
                                            <ListItemIcon>
                                                <MusicNoteRounded htmlColor="white"/>
                                            </ListItemIcon>
                                            <Box className={classes.whiteText}>{comment}</Box>
                                        </ListItem>
                                    ))}
                                </List>

                                {/* Fancy button that goes to the checkout */}
                                <MyButton text="SELECT" src="/checkout" variant={theme.base.red}/>
                            </Box>

                            {/* Advanced */}
                            <Box >
                                <Box color={theme.base.yellow} fontSize="2rem" fontWeight="400">ADVANCED</Box>
                                <hr color={theme.base.yellow}/>
                                <Box color={theme.base.yellow} fontSize="2.5rem" fontWeight="400">YEARLY</Box>
                                <Box color={theme.base.yellow} fontSize="4rem" fontWeight="400">$99</Box>
                                <List>
                                    {["Very very good", "Even Amazing", "Perfect job", "Love this more", "It's so so good", "More Features"].map((comment) => (
                                        <ListItem className={classes.myListItem} key={"list-item-"+(listN++)}>
                                            <ListItemIcon>
                                                <MusicNoteRounded htmlColor="white"/>
                                            </ListItemIcon>
                                            <Box className={classes.whiteText}>{comment}</Box>
                                        </ListItem>
                                    ))}
                                </List>
                                <MyButton text="SELECT" src="/checkout" variant={theme.base.yellow}/>
                            </Box>

                            {/* PRO */}
                            <Box >
                                <Box color={theme.base.blue} fontSize="2rem" fontWeight="400">PRO</Box>
                                <hr color={theme.base.blue}/>
                                <Box color={theme.base.blue} fontSize="2.5rem" fontWeight="400">YEARLY</Box>
                                <Box color={theme.base.blue} fontSize="4rem" fontWeight="400">$120</Box>
                                <List>
                                    {["Very very good", "Even Amazing", "Perfect job", "Love this more", "It's so so good", "More Features"].map((comment) => (
                                        <ListItem className={classes.myListItem} key={"list-item-"+(listN++)}>
                                            <ListItemIcon>
                                                <MusicNoteRounded htmlColor="white"/>
                                            </ListItemIcon>
                                            <Box className={classes.whiteText}>{comment}</Box>
                                        </ListItem>
                                    ))}
                                </List>
                                <MyButton text="SELECT" variant={theme.base.blue} src="/checkout"/>
                            </Box>
                        </Box>
                    </Box>
                    
                </Box>

                {/* Show perks */}
                <Perks />

                {/* Show footer */}
                <Footer />
			</ThemeProvider>
      	</Box>
  );
}