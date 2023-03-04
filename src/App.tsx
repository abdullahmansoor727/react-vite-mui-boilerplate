import { Button, Paper } from "@mui/material";
import MyThemeProvider, { ThemeContext, ThemeMode } from "./context/theme";

function App() {
	return (
		<MyThemeProvider>
			<ThemeContext.Consumer>
				{({ currentTheme, setCurrentTheme }) => (
					<Paper
						sx={{
							borderRadius: 0,
							border: "none",
							width: "100vw",
							height: "100vh",
						}}
					>
						<Button
							variant="contained"
							color="primary"
							onClick={() => setCurrentTheme(ThemeMode.LIGHT)}
						>
							Light Mode
						</Button>
						<Button
							variant="outlined"
							color="secondary"
							onClick={() => setCurrentTheme(ThemeMode.DARK)}
						>
							Dark Mode
						</Button>
					</Paper>
				)}
			</ThemeContext.Consumer>
		</MyThemeProvider>
	);
}

export default App;
