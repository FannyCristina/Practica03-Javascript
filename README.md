# Practica03-Javascript

CARRERA: INGENIERIA DE SISTEMAS	ASIGNATURA: Hipermedial NRO. PRÁCTICA:	3	TÍTULO PRÁCTICA: Resolución de problemas sobre JavaScript OBJETIVO ALCANZADO: •	Entender y organizar de una mejor manera los sitios de web en internet •	Diseñar adecuadamente elementos gráficos en sitios web en internet. •	Crear sitios web aplicando estándares actuales. ACTIVIDADES DESARROLLADAS Calculadora

Se pide construir una calculadora en el lenguaje de programación de JavaScript con base a un formulario HTML usando botones y una caja de texto. Además, para que permita realizar operaciones aritméticas de complejidad básica, como: suma, resta, multiplicación, división, raíz cuadrada, entre otros. A continuación, se muestra un ejemplo de las operaciones que debe realizar la calculadora

Validaciones en javascript Primero la funcion de escribir los dígitos para realizar las operaciones de la calculadora. Ademas recordando que son dos cajas de texto (inpusts los cuales recibirán los datos ingresados por el usuario).

Para realizar las cuatro operaciones básicas que son suma, resta, multiplicación y división lo hago en un solo metodo, obtengo los valores de los input y realizo su respectiva operación.

Para la raiz cuadra realizo el mismo proceso de las operaciones básicas que son obtener los datos introducidos por el usuario y llamando a la clase math y al operador sqrt realizo dicha operación.

La funcion calcular me sirve para saber que al momento de hacer clic el botón = se ejecuten las operaciones requeridas.

La funcion mas menos me ayuda para el cambio de un numero ya se a negativo y positivo

La funcion eliminar dígitos me sirve para las C y CE donde formatean mi cajas de texto a 0 para cuando el usuario quiera borrar los dígitos que aparecen de una operación ya realizada.

Mi pagina html me ayuda a darle forma a la calculadora, es decir su interfaz gráfica y aquí es donde llamo a mis funciones de estilo y a mis funciones de javascript para invocarlas mediante los métodos ya realizados. Todas las funciones de javascript serán llamadas mediante el evento onclick que es el que ejecuta cada operación.

Estilos css para darle forma a mi calculadora.

Formulario con Restricciones

Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos, dirección, teléfono, fecha de nacimiento y correo electrónico. Luego, usando funciones de JavaScript se debe validar que todos los campos han sido ingresados, además; que los valores ingresados en cada campo del formulario sean correctos teniendo en cuenta las siguientes condiciones:

Se debe validar qué, en el campo de la cedula, se ingrese sólo número y que la misma sea correcta, en base, al último dígito verificador.

Se debe validar qué, en el campo de los nombres, ingrese únicamente dos nombres y que permita ingresar sólo letras.

Se debe validar qué, en el campo del apellidos, ingrese únicamente dos apellidos y que permita ingresar sólo letras.

Se debe validar qué, en el campo del teléfono, permita ingresar sólo números.

Se debe validar que la fecha de nacimiento ingrese en el formato dd/mm/yyyy.

Se debe validar qué, en el campo correo electrónico, permita ingresar un correo válido. Se considera un correo válido, cuando comienza por tres o más valores alfanuméricos, luego un @, seguido por la extensión “ups.edu.ec” o “est.ups.edu.ec”.

Para realizar las validaciones de solo letras, o sólo números. Se las debe realizar en tiempo real, es decir, a medida que el usuario escribe en el campo.

Todos los campos de entrada dentro del formulario deben de ser de tipo “text”. Las demás validaciones se realizarán al momento de “enviar” (submit) la información del formulario hacia una página php. Si no cumple las validaciones, se mostrará un mensaje debajo de cada campo con el error y se pintará el campo con un borde rojo que representará que el campo tiene un error. Si se cumple las validaciones, se enviará a una página php, en donde se mostrará únicamente un mensaje que diga “Bienvenido, ¡pasaste las validaciones!”.

Estilos css

Galería

Diseñar una interfaz en html que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen. Luego, desde javascript se debe controlar para al hacer clic sobre uno de los botones realice una acción relacionada a una galería de imágenes.

Se debe tener, un arreglo con los nombres de diez imágenes, previamente descargadas y almacenadas en una carpeta llamada “images”.

La galería de imágenes debe visualizar exclusivamente 5 imágenes.

Cada vez que se haga clic en el botón iniciar se deben escoger de manera aleatoria cinco imágenes de las diez que se mostrarán en la galería de imágenes.

Al hacer clic en el botón siguiente y haber llegado a la última imagen disponible, el botón siguiente deberá ser deshabilitado (sólo cuando se ha llegado a la última imagen el botón siguiente deberá estar deshabilitado)

Al hacer clic en el botón anterior y haber llegado a la primera imagen disponible, el botón anterior deberá ser deshabilitado (sólo cuando se ha llegado a la última imagen y cuando se inicie la galería de imágenes el botón anterior deberá estar deshabil
CONCLUSIONES: Al final de la practica puedo concluir que html5 es la herramienta primordial para el desarrollo de una página web junto con CSS3 ya que es el lenguaje de formatos y diseños de las páginas web y mediante esto podemos hacer muchos diferentes usos del texto ya sea haciendo títulos, tablas, listas, aplicando el uso de formato negrita, cursiva, código, colores, etc y ademas nos la capacidad de introducir imágenes, videos y podemos manipular las secciones de pantalla con diferentes tipos de etiqueta. Y javascript nos ayuda a la realización de métodos haciendo posible llamarlos mediante distintos eventos de la computadora. RECOMENDACIONES: La recomendación que puedo hacer es que, al momento de usar las etiquetas, siempre verificar si se cerraron ya que a veces no se cierran las etiquetas y el texto no agarra el formato correcto si no otro fuera de contexto. Ademas verificar si se esta usando los eventos correctos para llamar a los métodos de javascript.

Nombre de estudiante: Fanny Gutama
