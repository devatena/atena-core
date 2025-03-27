import defaultTheme from "../config/DefautTheme";

interface Theme {
    primary: {
        textColor: string;
        backgroundColor: string;
        border: string;
    };
    secondary: {
        textColor: string;
        backgroundColor: string;
        border: string;
    };
}

let theme: Theme = {
    primary: {
        textColor: "#FFFFFF",
        backgroundColor: "white",
        border: "transparent",
    },
    secondary: {
        textColor: "#A50087",
        backgroundColor: "#F0C3F4",
        border: "transparent",
    },
};

const setTheme = (themeConfig: Theme) => {
    theme = themeConfig
    console.log(defaultTheme)
}

const getTheme = () => {
    return theme
}

export default { setTheme, getTheme }
