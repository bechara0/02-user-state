import React, { useState } from "react";
import PropTypes from "prop-types";

export const EjercicioComponent = ({ year }) => {
	const [yearNow, setYearNow] = useState(year);

	const siguiente = (e) => {
		setYearNow(yearNow + 1);
	};

	const anterior = (e) => {
		setYearNow(yearNow - 1);
	};

	const cambiarYear = (e) => {
		let dato = parseInt(e.target.value);
		if (Number.isInteger(dato)) {
			setYearNow(dato);
		} else {
			setYearNow(year);
		}
	};

	return (
		<div>
			<h2>Ejercicio con Eventos y UseState</h2>
			<strong className="label label-green">Año: {yearNow}</strong>
			<p>
				<button onClick={siguiente}>Año Siguiente</button>
				&nbsp;
				<button onClick={anterior}>Año Anterior</button>
			</p>
			<p>
				Cambiar Año:
				<input onChange={cambiarYear} type="text" placeholder="cambia el año" />
			</p>
		</div>
	);
};

EjercicioComponent.propTypes = {
	year: PropTypes.number.isRequired,
};
