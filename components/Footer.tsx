import { Box, Button, makeStyles } from "@material-ui/core";
import { Mail } from "@material-ui/icons"

// Footer component for each page. Contains simple contact info.
export default function Footer() {
    return (
        <Box padding="7%" paddingBottom="2%" width="100%" bgcolor="#5433a1">
            {/* Mail prompt */}
            <Box display="flex">
                <Mail htmlColor="white"/>
                <Box color="white" fontSize="1.5rem" fontWeight="400" marginTop="-5px">support@experienceconcerts.co</Box>
            </Box>

            {/* Anchored bottom text */}
            <Box display="flex" alignItems="center" justifyContent="end" flexDirection="column">
                <Box color="white" fontSize="3rem" fontWeight="500">EXP|CON</Box>
                <Box color="white" fontSize="1rem" fontWeight="500">2019 © All Rights Reserved | Speer Technologies Incorporated :)</Box>
            </Box>
        
        </Box>
    );
}