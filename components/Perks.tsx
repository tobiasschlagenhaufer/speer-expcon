import { Box } from "@material-ui/core";
import { theme } from "../utils/theme";

// Perks component which shows benefits!!
export default function Perks() {
    // Perk titles
    const perkTitles = [
        "Subscription Payment Model", 
        "No Fee Cancellation Policy", 
        "Subscription Payment Model"
    ];

    // Perk descriptions
    const perkDesc = [
        "No commitment, cancel anytime. Never worry about forgetting a payment again!",
        "No commitment, cancel anytime. Never worry about forgetting a payment again!",
        "No commitment, cancel anytime. Never worry about forgetting a payment again!",
    ];

    return (
        <Box padding="7%" width="100%" bgcolor={theme.base.red}>
            {/* Perks Hero */}
            <Box color="white" fontSize="4rem" fontWeight="700">PERKS</Box>

             {/* Perks breakdown */}
             <Box display="flex" justifyContent="space-between" paddingTop="40px">
                
                {/* Perks listed, use function to save on code :) */}
                {perkTitles.map((title, i) => (
                    <Box padding="5%" paddingLeft="0" key={"perk-"+i}>
                        <hr color={"white"}/>
                        <Box color="white" fontSize="2.5rem" fontWeight="400">{title}</Box>
                        <Box color="black" fontSize="1.5rem" fontWeight="400">{perkDesc[i]}</Box>
                    </Box>
                ))}
                
            </Box>
        </Box>
    );
}