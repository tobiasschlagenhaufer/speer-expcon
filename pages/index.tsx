import React from "react";
import { Box, ThemeProvider } from "@material-ui/core";
import { theme } from "../utils/theme"
import SlideShow from "../components/SlideShow";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

// Main landing page
export default function Home() {
    return (
      	<Box>
			  {/* Themeprovider gives me access to my custom colour palette */}
			<ThemeProvider theme={theme}>
				{/* Burger menu */}
				<MainMenu pgColour={theme.base.red} />

				{/* Slideshow component of landing page */}
				<SlideShow />

				{/* Footer component */}
				<Footer />
			</ThemeProvider>
      	</Box>
  );
}