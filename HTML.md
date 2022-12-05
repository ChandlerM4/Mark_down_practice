# **Etiquetas**

> ## **Generales**
* Title: muestra el titulo de la pagina en la barra superior.
* Head: este es el encabezado del HTML, dentro se encuentran las extensiones de CSS y JS externas. También las extensiones de Bootstrap y dentro se encuentra el "Title".
* Body: es el cuerpo del HTML, dentro se encuentra todo lo que se verá en la página.

> ## **Párrafos y títulos**
* H1... H6: para marcar los titulos.
* P: para marcar los párrafos.
* span: resalta parte del texto.
* Br: salto de línea.
* em: vuelve italic el texto.
* strong: resalta fuerte el texto.
* hr: línea para separar párrafos.

> ## **Vínculos**
* a href: hipervínculos de páginas, documentos, etc.
* img src: insertar imagenes en línea o descargadas.

> ## **Forms**
* Los **"form"** vienen con las siguientes propiedades:
    * action: para enviar datos solicitados.
    * enctype: especifica como deben codificarse los datos del formulario al enviarlos al servidos.
    * method: este muestra las siguentes características:
        * dialog: 
        * get: enviara los valores que introducimos en los campos por medio de la url.
        * post: se crea un formulario en los headers en el navegador.
* Los **"input"** introduce datos, cuenta con estas propiedades:
    * value: valor por defecto de los forms.
    * name: guarda los forms en una variable.
    * placeholder: indicamos en el forms lo que se solicita.
    * type: se agregan valores, por ejemplo submit (se hará un botón), text (para agregar texto), email, password, radio, checkbox, file, date, range, color.
* label: para nombrar un input. Ejemplo:
```html
<label for = "imputName">
//Nombra el input
```
* Los **"button"** pueden modificar su texto y tienen una funcionalidar al ejecutarlo. Ejemplo:
    * Propiedad type:
        * button: acciona su funcionalidad.
        * reset: deja todos los valores por defecto.
        * submit: envia formularios.
* textarea: caja de texto donde se ingresarán comentarios. Propiedades:
    * textarea: dentro de las etiquetas se pone un valor por defecto.
    * row: espacio en filas.
    * cols: espacio en columnas.

> ## **Listas ordenadas y dsordenadas.**
* ul: listas desordenadas.
* li: agregar los items de las listas.
* ol: lista ordenadas:
    * Propiedades de ol: value = "".
    Agregando un numero inicia con ese valor la lista.
    * Propiedades de li: style = "list-style-type:lower-alpha".
    Agregando una tecla y no un numero en la lista ordenada.

> ## **Tablas.**
* table: crear la tabla.
* tr: crear las filas de la tabla.
* th: encabezado en la fila de la tabla.
* td: crear contenido de las filas de las tablas.
* thead: agrupamos elementos que tenemos en la cabecera de la tabla (th).
* tbody: agrupa todas las filas del cuerpo de nuestra tabla.
* tfoot: agrupa todas las filas del pie de la tabla.
* Secciones:
    * header: encabezado de la pagina.
    * footer: pie de pagina (para ingfo de contacto, copyright, info del sitio web, etc.)
    * section: secciones dentro de la aplicacion, entre el header y footer (similar a un div).
    * article: identificar de manera independiente algunas cosas.
    * div: similar a section.
> ## **Nav bar.**
* nav: representa la seccion de una pagina cuyo proposito es proporcionar enlaces de navegacion, dentro del documento actual o a otros documentos.
