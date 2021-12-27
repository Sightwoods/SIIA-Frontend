# Sistema Información Integral módulo Alumnos

Resideño de la página SIIA UAS.

## Scripts Disponibles

En la raíz del proyecto puedes ejectuar los siguientes comandos:

### `npm start`

Inicia la apo en el modo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para visualizarlo en el navegador.

La página se refrescará cuando guardes nuevos cambios.\
Tambien veras un lint de errores en la consola.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Notas ##

Vayan actualizando la información en este README para un mejor seguimiento.

## Para encender el JSON Server ##

Pudes encontrar la documentación aquí: [https://www.npmjs.com/package/json-server]

Ejecuta el siguiente comando en una terminal 

### Instalar dependencia
```console
~$ npm i -g json-server
```

### Iniciar servidor
```console
~$ json-server --watch db.json --port 3001
```

Puedes crear las peticiones de acuerdo a tus necesidades en el archivo db.json