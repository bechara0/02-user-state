import logo from "./logo.svg";
import "./App.css";
import { MiPrimerEstado } from "./components/MiPrimerEstado";
import { GifSelector } from "./components/GifSelector";
import { EjercicioComponent } from "./components/EjercicioComponent";

function App() {
	const fecha = new Date();
	const year = fecha.getFullYear();
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />

				<h1>Hook useState</h1>
				<GifSelector />

				<MiPrimerEstado />
				<EjercicioComponent year={year} />
			</header>
		</div>
	);
}

export default App;
