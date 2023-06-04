import logo from "./logo.svg";
import "./App.css";
import { MiPrimerEstado } from "./components/MiPrimerEstado";
import { GifSelector } from "./components/GifSelector";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />

				<h1>Hook useState</h1>
				<GifSelector />

				<MiPrimerEstado />
			</header>
		</div>
	);
}

export default App;
