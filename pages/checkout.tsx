import { Box, makeStyles, Button, ThemeProvider, FormControl, RadioGroup, FormControlLabel, Radio, TextField, InputLabel, Select, MenuItem } from "@material-ui/core";
import Footer from "../components/Footer";
import MainMenu from "../components/MainMenu";
import MyButton from "../components/MyButton";
import { theme } from "../utils/theme";

// custome styles for Checkout page
const useStyles = makeStyles({
    mainPage: {
        minHeight: '100vh',
		width: '100vw',
        padding: "7%",
        paddingTop: "2%",
        backgroundColor: "transparent",
    },
    content: {
        padding: "7%",
    },
    radioRed: {
        color: theme.base.red,
        fontWeight: 400,
    },
    radioBlue: {
        color: theme.base.blue,
        fontWeight: 400,
    },
    radioYellow: {
        color: theme.base.yellow,
        fontWeight: 400,
    },
    formPadding: {
        padding: "10px",
    }
});

// Checkout page that acts as payment form $$$$$$$$
export default function What() {
    const classes = useStyles();

    return (
        <Box>
            <ThemeProvider theme={theme}>
                {/* Main menu (hamburger) */}
                <MainMenu pgColour={"white"} />

                <Box className={classes.mainPage}>
                    {/* Payment Title */}
                    <Box className={classes.content}>
                        <Box color="black" fontSize="4rem" fontWeight="700">PAYMENT</Box>
                        <Box color="black" fontSize="2.5rem" fontWeight="300" marginTop="40px">1. Select your plan.</Box>

                        {/* 1. Plan selection */}
                        <FormControl component="fieldset">
                            {/* Radio buttons for our plan selection */}
                            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                <FormControlLabel
                                    className={classes.radioRed}
                                    value="basic"
                                    control={
                                        <Radio className={classes.radioRed} />
                                    }
                                    label="BASIC" 
                                />
                                <FormControlLabel className={classes.radioYellow} value="advanced" control={<Radio className={classes.radioYellow} />} label="ADVANCED" />
                                <FormControlLabel className={classes.radioBlue} value="pro" control={<Radio className={classes.radioBlue} />} label="PRO" />
                            </RadioGroup>
                        </FormControl>

                        <Box display="flex" paddingTop="40px" width="100%">

                            {/* 2. Billing info */}
                            <Box display="flex" flexDirection="column" justifyContent="space-between">
                                <FormControl className={classes.formPadding} variant="outlined">
                                    {/* Text saying the form is for billing */}
                                    <Box color="black" fontSize="2.5rem" fontWeight="300" marginTop="40px">2. Billing Information.</Box>

                                    {/* Input fields */}
                                    <TextField id="outlined-basic" label="FULL NAME" variant="outlined" />
                                    <TextField id="outlined-basic" label="BILLING ADDRESS" variant="outlined" />

                                    {/* Side by side input textfield using flex */}
                                    <Box display="flex">
                                        <TextField id="outlined-basic" label="CITY" variant="outlined" />
                                        <TextField id="outlined-basic" label="POSTAL CODE" variant="outlined" />
                                    </Box>

                                    {/* New form control for the select box (for countries) */}
                                    <FormControl variant="outlined">
                                        <InputLabel id="country-label">Country</InputLabel>
                                        <Select
                                            labelId="country-label"
                                            id="country"
                                            label="Country"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={"Canada"}>Canada</MenuItem>
                                            <MenuItem value={"US"}>"United States</MenuItem>
                                            <MenuItem value={"Mexico"}>Mexico</MenuItem>
                                        </Select>   
                                    </FormControl> 
                                </FormControl>      
                            </Box>

                            {/* Credit card info (would usually use a stripe API or something here) */}
                            <Box display="flex" flexDirection="column" justifyContent="space-between">
                                <FormControl className={classes.formPadding} variant="outlined">

                                    {/* Text that specifies this is for credit card info */}
                                    <Box color="black" fontSize="2.5rem" fontWeight="300" marginTop="40px">3. Credit Card Information.</Box>

                                    {/* TextFields for CC info */}
                                    <TextField id="outlined-basic" label="Card Holder's Name" variant="outlined" />
                                    <TextField id="outlined-basic" label="Card Number" variant="outlined" />
                                    <Box display="flex">
                                        <TextField id="outlined-basic" label="EXPIRY DAY" variant="outlined" />
                                        <TextField id="outlined-basic" label="EXPIRY YEAR" variant="outlined" />
                                    </Box>
                                    <TextField id="outlined-basic" label="CVV" variant="outlined" />
                                </FormControl>
                            </Box>
                        </Box>

                        {/* Terms & conditions statement */}
                        <Box color="black" fontSize="1.5rem" fontWeight="300" marginTop="40px">By continuing, I acknowldege that I've read and agreed to the Terms of Service & Privacy Policy.</Box>
                        
                        {/* Fancy button that WOULD process payment, does nothing right now */}
                        <MyButton src="#" variant="rainbow" text="CONFIRM" />
                    </Box>
                </Box>
                {/* Footer component */}
                <Footer />
            </ThemeProvider>
        </Box>
        
    );
}