import React, { useEffect, useState } from "react";
import { Box, Button, makeStyles } from "@material-ui/core";
import MyButton from "./MyButton";
import Jello from 'react-reveal/Jello';

// Custome styles for the slideshow component
const useStyles = makeStyles({
    slideShow: {
        height: '100vh',
		width: '100vw',
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
        transition: "2000ms ease",
    },
    slideButton: {
        backgroundColor: 'white',
        borderRadius: '50%',
        minHeight: '20px',
        minWidth: '20px',
        padding: '0',
        borderColor: 'white',
        border: 'solid white 2px',
        margin: '1rem',
    },
    currentButton: {
        backgroundColor: 'transparent',
        borderRadius: '50%',
        minHeight: '20px',
        minWidth: '20px',
        padding: '0',
        borderColor: 'white',
        border: 'solid white 2px',
        margin: '1rem',
    }
})

// Slideshow component used by Main (index)
export default function SlideShow() {
    const classes = useStyles();
    const [slide, setSlide] = useState({current: 0});
    const numConcerts = 3;

    // toggle slide to go to next
    const toggleSlide = (nextSlide: number) => (
        event: React.KeyboardEvent | React.MouseEvent,
      ) => {
        setSlide({current: nextSlide});
    }

    // slide show timer
    useEffect(() => {
        // every 10s
        const interval = setInterval(() => {
            // increment by 1 or loop around (could have just used mod(%) here too)
            var nextSlide = (slide.current == numConcerts-1) ? 0 : slide.current + 1;
            setSlide({current: nextSlide});
        }, 10000);
        return () => clearInterval(interval);
    }, [slide]);

    return (
        // My attempt at recreating the crazy animation. I tried combining a transition and CSS "Jello" jump together for a similar-ish effect.
        <Jello duration={1000} spy={slide}>

        {/* Center content */}
        <Box className={classes.slideShow} style={{backgroundImage: "url(/concert_"+(slide.current+1)+".jpg)"}} display="flex" justifyContent="center" alignItems="center">
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">  
                <Box fontSize="4rem" fontWeight="700" color="white">INTERACTIVE CONCERT EXPERIENCE</Box>
                <Box fontSize="2rem" fontWeight="500" color="white" textAlign="center">Experience your favourite artists like never</Box>
                <Box fontSize="2rem" fontWeight="500" color="white" textAlign="center">before and from the comfort of your own home.</Box>
                <MyButton text="Try it Now" variant="rainbow" src="/pricing"/>
            </Box>
            
            {/* Bottom buttons */}
            <Box position="absolute" display="flex" alignSelf="flex-end" marginBottom="20px">
                {[0, 1, 2].map((i) => (
                    <Button
                        key={"slide-button-"+i}
                        className={(slide.current == i) ? classes.currentButton : classes.slideButton}
                        onClick={toggleSlide(i)}
                    >
                    </Button>
                ))}
            </Box>
		</Box>
        </Jello>
    )
}