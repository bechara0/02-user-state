import React, { useState } from "react";

export const MiPrimerEstado = () => {
	/* 	let nombre = "Juancito";
	const cambiarNombre = (e) => {
		nombre = "Bechara0";
	}; */

	const [nombre, setNombre] = useState("Juan Bechara");
	const cambiarNombre = (e, nombreFijo) => {
		setNombre(nombreFijo);
	};

	return (
		<div>
			<h3>Componente: Mi primer estado</h3>
			<strong className="label">{nombre}</strong>
			<br />
			<button onClick={(e) => cambiarNombre(e, "bechara0")}>
				Cambiar por Bechara0
			</button>
			<br />
			<input
				type="text"
				onKeyUp={(e) => cambiarNombre(e, e.target.value)}
				placeholder="Cambia el nombre"
			></input>
		</div>
	);
};
