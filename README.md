# Sistema Información Integral módulo Alumnos

Resideño de la página SIIA UAS.

## IMPORTANTE ##
Proximamente actualizare `react-scripts` y removeré la dependencia `node-sass` debido a que actualmente se encuentra obsoleta, será sustituida por otra dependencia sugerida por
npm.

## Scripts Disponibles

En la raíz del proyecto puedes ejectuar los siguientes comandos:

### `npm start`

Inicia la apo en el modo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para visualizarlo en el navegador.

La página se refrescará cuando guardes nuevos cambios.\
Tambien veras un lint de errores en la consola.

### `npm run test`

Para correr las pruebas unitarias.

### `npm run build`

Para crear la versión de producción.

## En caso de contar con el `Backend` en local ##

Dirigete a https://github.com/Sightwoods/SIIA-UAS-Alumnos y sigue las instrucciones para iniciar el servidor de pruebas.\
Dependiendo la configuración, modifica las variables de entorno.

- **.env** Para la versión de producción
- **.env.development** Para la versión de desarrollo
  
### Variables de entorno ###
- **REACT_APP_API_URL**=[URL]/api
  
## Para encender el JSON Server ##

Pudes encontrar la documentación aquí: [https://www.npmjs.com/package/json-server]

Ejecuta el siguiente comando en una terminal:

### Instalar dependencia
```console
~$ npm i -g json-server
```

### Iniciar servidor
```console
~$ json-server --watch db.json --port 3001
```

Puedes crear las peticiones de acuerdo a tus necesidades en el archivo db.json