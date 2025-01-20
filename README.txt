
Proyecto-Base

Este es un proyecto web del Hospital Clinico Dr Victor Ramirez que utiliza ReactJS para crear un sitio con un sistema de navegaci�n. El proyecto incluye p�ginas como "Home", "Medical-Team" y "Contact".

Tabla de Contenidos

Tecnolog�as Usadas
Estructura del Proyecto
Instalaci�n
Uso
Scripts
Contribuciones
Licencia

Tecnolog�as Usadas

ReactJS: Para la estructuraciond e la pagina y cada uno de los componentes de la misma. Ademas de la renderizacion de los datos, flujo de informacion y creacion de los formularios para el manejo de la interaccion del usuario.
CSS: Para la escritura de estilos en CSS con caracter�sticas adicionales como variables y anidamiento.


Estructura del Proyecto

index.html: Es el archivo HTML principal que funciona como punto de entrada de la aplicación.
index.css: Archvio con los estilos css de la pagina index
main.jsx: Es el segundo archivo que se llama desde el index.html definiendo la extructura mas general de la pagina en ReactJS.
App.jsx: Es el tercer archivo que se llamada desde el main.jsx y define lo que el avegador presenta en el DOM.
App.css: Archivo con los estilos css de la pagina App.

views: Contiene todos los archivos con las distitnas vistas generales de la pagina del hospital.
components: Contiene todos los distintos componentes que utiliza la pagina del hospital.
HOC: Contiene todos los Componente de Orden Superior (HOC) que utiliza la pagina del hospital.

Dentro de la carpeta "views" tenemos las siguientes vistas:
home: Pagina con el Componente ReactJs, que lista los servicios médicos disponibles en el hospital.
medical-team: Pagina con el Componente ReactJs, que muestra la información de un doctor (nombre, especialidad, años de experiencia).
contact: Pagina con el Componente ReactJs, que muestra uUn formulario para que los usuarios agenden una cita con un doctor del hospital por la pagina.


Instalaci�n

Clona este repositorio:

git clone https://github.com/VictorRamirezGarcia/Modulo-4---Discusion-y-Analisis-de-Casos.git
cd tu-repo


Instruciones para visualizacion:

Primero debes tener instalado Node.js, para ello en tu consola debes ejecutar el siguiente comando

nvm install node

Luego en tu carpeta donde tengas tu proyecto debes ejecutar los siguientes comandos

cd tu-repo
npm run dev

Luego ingresar en el link indicado por la consola para ingresar a la pagina de inicio de tu aplicacion web con ReactJs.

Ejemplo de como se visualizaria en tu consola:

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help



Actualizaciones README - Aprendizaje Basado en Proyectos: Consumo de API en el Sistema del Hospital

Contexto:

En este proyecto, los estudiantes deberán implementar el consumo de una API para obtener y
mostrar datos del sistema del hospital, como la información de doctores o servicios médicos.
Utilizando useEffect y useState, se espera que realicen peticiones asíncronas, gestionen el
estado y manejen los errores de manera eficiente. Podrán utilizar Fetch API o Axios según su
preferencia.



Requisitos:

1. Implementación de Peticiones con useEffect y useState (2 puntos)
- Usa los Hooks useEffect y useState para realizar peticiones a una API externa (puedes
simular una API REST) que devuelva datos relacionados con los servicios médicos o el
equipo de doctores del hospital.
- Asegúrate de que los datos se carguen cuando el componente se monte en el
DOM.
- Los datos deben mostrarse correctamente en una lista o tabla en la vista
correspondiente.

Respuesta:
Se utilizan los Hooks useEffect y useState en el componente "ServiceList" ya que se cargan los datos de un archivo json llamado "servicios.json" cuando se monta el componente para mostrar los doctores del hospital. Aunque no se cargue de forma automatica ya que le he colocado un boton que al precionarlo carga el listado de los servicios para resolver el punto 3.



2. Uso de Fetch API o Axios para el Consumo de la API (1.5 puntos)
- Implementa las peticiones a la API utilizando Fetch API o Axios para obtener los datos
de manera asíncrona.
- Explica en el README por qué has elegido una u otra opción.
- Asegúrate de manejar correctamente los errores de la petición (por ejemplo,
mostrar un mensaje de error si la API no responde o devuelve un error).

Respuesta:
En la carga de los datos de los Doctores del componente "DoctorCard" se esta utilizando el llamado a un archivo json que estaria emulando una llamada a una API externa esto en la pagina de la View "medical-team". Esta llamada utiliza Fetch API dado que en nativo de JavaScript y no require dependecias externas como el caso de Axios.Tambien  se le coloco un manejo de los errores para el caso de que la llamada a la API no devuelva datos le envia el siguiente mensaje "Error al cargar los doctores"



3. Peticiones Basadas en Eventos del Usuario (1 punto)
- Permite que el usuario realice una petición a la API mediante una interacción, como un
botón para recargar la lista de doctores o servicios médicos.
- Asegúrate de que el botón realice la petición y actualice los datos en la interfaz.

Respuesta:
En la vista llamada "home.jsx" se cargan los servicios por medio de un boton llamado "Recargar Servicios" el cual carga en la misma pantalla el lustado de los servicios del componente llamado "ServiceList" mostrandolo por pantalla.



4. Manejo de Errores en Peticiones Asíncronas (1 punto)
- Implementa una estrategia de manejo de errores cuando la API falle o no responda.
- Muestra un mensaje en la interfaz indicando que ocurrió un error, y permite al
usuario intentar realizar la petición nuevamente.

Respuesta:
En la vista llamada "home.jsx" se cargan los servicios por medio de un boton llamado "Recargar Servicios" el cual carga en la misma pantalla el lustado de los servicios del componente llamado "ServiceList" mostrandolo por pantalla. Tambien  se le coloco un manejo de los errores para el caso de que la llamada a la API no devuelva datos le envia el siguiente mensaje "Error al cargar los doctores"



5. Optimización del Rendimiento al Omitir Efectos en useEffect (0.5
puntos)
- Implementa una optimización en useEffect para evitar que las peticiones se realicen
múltiples veces innecesariamente. Asegúrate de que la petición se realice solo cuando
el componente se monte o cuando haya un cambio relevante (por ejemplo, al hacer clic
en el botón para recargar los datos).

Respuesta:
Para ello la carga del componente solo se realiza una vez cuando se carga la vista por medio de los corchetes cuadrados al final de la declaracion de metodo que asegura que solo se ejecute una vez el componente.



Creditos:
Imagenes sacada de buscador Google.