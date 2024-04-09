import { extendTheme } from "@chakra-ui/react";
import '@fontsource/poppins'
import { buttonTheme, dividerTheme } from "./Components";

const theme = extendTheme({
    fonts: {
        heading: `'CocogooseBold', Helvetica`,
        body: `'Poppins', sans-serif`,
    },
    colors: {
        bg: {
            1000: "#BDBDBD",
            900: "#717171",
            800: "#717171",
            700: "#555555",
            600: "#444444",
            500: "#363636",
            400: "#262626",
            350: "#202020",
            300: "#1D1D1D",
            200: "#101010",
            100: "#000000",
        },
        textcol: {
            normal:"#FFFFFF",
            link:"#E90000",
        },
        highlight: {
            500: "#C20000",
            400: "#6A0000",
            300: "#5b0000",
            200: "#3B0000",
            100: "#290000",
        }
    },
    breakpoints: {
        xxl: "100em",
        xxxl: "160em",
        xxxxl: "180em"
    },
    components: {
        Button: buttonTheme,
        Divider: dividerTheme,
    }
})

export default theme