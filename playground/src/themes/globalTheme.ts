import themeService from "../../../src/services/setTheme"

const globalTheme = {
    primary: {
        textColor: "#FFFFFF",
        backgroundColor: "green",
        border: "transparent",
    },
    secondary: {
        textColor: "#A50087",
        backgroundColor: "#F0C3F4",
        border: "transparent",
    },
}

themeService.setTheme(globalTheme)

themeService.getTheme()
console.log("tema", themeService.getTheme())

export default globalTheme