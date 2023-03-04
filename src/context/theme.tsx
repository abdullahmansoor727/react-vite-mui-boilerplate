import { createContext, useState } from "react";
import { createTheme, colors, ThemeProvider } from "@mui/material";

export enum ThemeMode {
	LIGHT = "light",
	DARK = "dark",
}

const lightTheme = createTheme({
	palette: {
		mode: ThemeMode.LIGHT,
		primary: {
			main: "#1D8BBD",
		},
		secondary: {
			main: colors.teal[300],
		},
	},
});

const darkTheme = createTheme({
	palette: {
		mode: ThemeMode.DARK,
		primary: {
			main: "#1D8BBD",
		},
		secondary: {
			main: colors.teal[400],
		},
	},
});

export const Themes = {
	[ThemeMode.LIGHT]: lightTheme,
	[ThemeMode.DARK]: darkTheme,
};
export const ThemeContext = createContext<any>({
	currentTheme: ThemeMode.LIGHT,
	setCurrentTheme: () => {},
});

const MyThemeProvider = (props: { children: React.ReactNode }) => {
	const [currentTheme, setCurrentTheme] = useState(ThemeMode.LIGHT);
	return (
		<ThemeProvider theme={Themes[currentTheme]}>
			<ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
				{props.children}
			</ThemeContext.Provider>
		</ThemeProvider>
	);
};

export default MyThemeProvider;
