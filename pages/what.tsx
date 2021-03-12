import { Box, makeStyles, Button } from "@material-ui/core";
import Footer from "../components/Footer";
import MainMenu from "../components/MainMenu";
import MyButton from "../components/MyButton";
import { theme } from "../utils/theme";
import useSound from "use-sound";

// Custom styles for the "What it is" page
const useStyles = makeStyles({
    mainPage: {
        minHeight: '100vh',
		width: '100vw',
        padding: "7%",
        paddingTop: "2%",
        backgroundColor: theme.base.red,
    },
    speaker :{
        margin: "30px",
        marginTop: "40%",
    },
    flipperSpeaker: {
        margin: "30px",
        marginTop: "60%",
        transform: "scale(-1, -1)",
    },
    clickMe: {
        position: "absolute",
        height: "150px",
        width: "150px",
        borderRadius:"100%",
        border: "solid white 2px",
        color: "white",
        bottom: "80px",
        marginLeft: "250px",
    },
    redText: {
        color: theme.base.red
    }
});

// What is it component with music!
export default function What() {
    const classes = useStyles();
    const [play, {stop, isPlaying}] = useSound("/wake-me-up.mp3");

    // toggle our music to start or stop depending on the playing state
    const toggleSound = () => {
        if (isPlaying) {
            stop();
        } else {
            play()
        }
    }

    return (
        <Box>
            {/* Menu */}
            <MainMenu pgColour={theme.base.red}/>

            <Box className={classes.mainPage}>
                {/* Call to action button */}
                <Box position="absolute" marginTop="3%"  marginLeft="70%">
                    <MyButton text="TRY IT NOW" variant={theme.base.blue} src="/pricing"/>
                </Box>

                {/* WhatItIs Main */}
                <Box display="flex" justifyContent="space-between">
                    {/* Text */}
                    <Box display="flex" flexDirection="column" maxWidth="40%" marginTop="20%">
                        <Box color="white" fontSize="4rem" fontWeight="700">SUPERIOR SOUND</Box>
                        <Box color="black" fontSize="2rem" fontWeight="500" paddingTop="40px">Experience live versions of your favourite songs.</Box>
                        <MyButton className={classes.redText} variant="white" src="#" text="SEE DEMO"/>
                    </Box>

                    {/* Speaker & sounds */}
                    <Box display="flex">
                        {/* Wrap images in a button so they can be pressed. Ts-ignore as use-sound does not support TS */}
                        {/* @ts-ignore */}
                        <Button className={classes.speaker} onClick={toggleSound}>
                            <img src="/speaker.png" height="400px" width="auto"/>
                        </Button>
                        <Button className={classes.flipperSpeaker} onClick={toggleSound}>
                            <img src="/speaker.png" height="400px" width="auto"/>
                        </Button>
                        
                        {/* Click me button that prompts users to click on stereos */}
                        <Button className={classes.clickMe} href="#" >Click Me!</Button>
                    </Box>
                </Box>
            </Box>

            {/* Footer Component */}
            <Footer />
        </Box>
        
    );
}