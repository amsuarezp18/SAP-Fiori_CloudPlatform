sap.ui.define([
	"./utilities"
], function() {
	"use strict";

	// class providing static utility methods to retrieve entity default values.

	return {
		getDefaultValuesForPage5: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"Nombre": "",
				"Apellido": "",
				"Edad": "",
				"Genero": "",
				"Direccion": "",
				"FechaNacimiento": null,
				"Usuario": "",
				"Contrasenia": "",
				"NombreAcudiente": "",
				"ApellidoAcudiente": "",
				"CelularAcudiente": "",
				"CorreoAcudiente": ""
			};
		}
	};
});
