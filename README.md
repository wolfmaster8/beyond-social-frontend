# Beyond Social Frontend
* [Proyecto Kanban](https://github.com/users/wolfmaster8/projects/1/views/1)
* [Beyond Social API GitHub](https://github.com/wolfmaster8/beyond-social-api)

## Sobre las tecnologías utilizadas
* **ReactJS:** es una biblioteca para la construcción de interfaces.
* **TypeScript**: es un lenguaje de tipado dinámico que extiende la sintaxis de JavaScript añadiendo tipos estáticos y objetos basados en clases. Evita errores a la hora de compilar el código, evitando que los errores lleguen hasta el usuario final. [TypeScript](https://www.typescriptlang.org/)
* **Styled Components**: librería que permite crear componentes con estilo utilizando CSS puro. [Styled Components](https://styled-components.com/docs)
* **Cypress**: es la suite de test utilizada para realizar tests E2E. [Cypress](https://docs.cypress.io/guides/overview/why-cypress)

## Decisiones del proyecto
### Estilos
* Decidí utilizar Styled Components junto con clases CSS. Esto evita estar creando componentes con Styled Components para estilizar, por ejemplo, textos.

### Tests
* Por tiempo, decidí solo realizar algunos tests automatizados.

## Estructura y workflow del proyecto.
* **src**: la lógica de la aplicación, reglas de negocio y funcionalidades están dentro.
    * **assets**: aquí se colocarán todos los assets (archivos multimedia) necesarios. En la carpeta assets estarán de manera organizada la mayoría. [Documentación](https://nextjs.org/docs/basic-features/static-file-serving)
        * **branding**: assets de la marca del producto, logos en diferentes versiones, tamaños, etc.
        * **images**: imágenes de la plataforma.
    * **features**: dentro está cada funcionalidad de la aplicación separada por entidad.
        * **<Ejemplo>/index.tsx**: en este archivo está el JSX de la página a la cual pertenece esta funcionalidad. En este archivo únicamente estará la lógica de renderización de la página.
        * **<Ejemplo>/useEjemploController**: en este archivo estarán los estados y lógica de llamadas a los managers de la página. La idea detrás de crear un custom hook es para conseguir reutilizar este hook en otras páginas/funcionalidades de ser necesario. Esta capa también es responsable por tener las reglas de negocio de la aplicación.
        * **<Ejemplo>/EjemploContext**: en caso de que la funcionalidad requiera compartir estado o funcionalidades manteniendo un estado común, no se usa un controller sino que se crea un context utilizando la ContextAPI.
        * **<Ejemplo>/styles.tsx**: en este archivo están todos los componentes estilizados necesarios para la página. En caso de ver que el componente puede ser utilizado en otras páginas, lo mejor es crearlo dentro de la carpeta `shared/components`.
    * **managers**: dentro están los managers para cada aplicación. Esta capa es responsable por llamar a los services y formatar los datos en caso de ser necesario.
    * **models**: dentro están el modelamiento de nuestros objetos, categorizados en carpetas de acuerdo a la entidad a la que pertenecen.
      * **DTO**: aquí están el modelamiento de objetos que derivan de las entidades u objetos formatados necesarios para la correcta lectura o envío de algún dato.
      * **entity**: aquí están mapeadas las entidades de nuestra base de datos.
    * **services**: esta capa es responsable por llamar a cualquier API externa.
    * **shared**: aquí está todo el código que es compartido en la aplicación. Ninguna de estas funciones debe ejecutar lógica para llamar API's externas.
        * **components**: adentro están todos los componentes genéricos de la aplicación. Estos componentes solo reciben datos para ser renderizados. No pueden hacer ningún tipo de llamadas a API's externas.
        * **contexts**: aquí están los contexts genéricos de la aplicación.
        * **hooks**: aquí están los hooks genéricos.
        * **utils**: adentro están todas las funciones utilitarias o helpers de la aplicación. Están categorizados por entidades/categorías. Estas funciones solo reciben datos. No pueden hacer ningún tipo de llamadas a API's externas.
* **styles**: dentro se encuentra el archivo `theme.ts`. En este archivo están los estilos básicos de nuestra aplicación. Estos estilos se pueden acceder a través de cualquier componente creado con styled-components. [Documentación](https://styled-components.com/docs/advanced#function-themes). También aquí se encuentran los tokens de diseño. Estos tokens sirven para crear un lenguaje uniformado de clases utilitarias.
* **cypress**: aquí están todos los tests de nuestra aplicación.

## Configurando el Proyecto
### Requisitos
* **NodeJS**: versión 12 o mayor
* **yarn:** para instalar ejecuta `npm i -g yarn`

### Configuración
1. Copia el archivo `.env.example` y cambia el nombre para `.env`.
2. Instala las dependencias.
```bash
$ yarn
```
### Ejecución
1. Inicia el servidor de desarrollo.
```bash
$ yarn start
```
2. La aplicación por defecto se ejecutará en la puerta `3000`. Por defecto la dirección es [http://localhost:3000](http://localhost:3000)

### Ejecución de tests
* Ejecutar el comando `yarn cypress:open` y ejecutar los tests a través de la interfaz. 🚨 Es importante NO estar ejecutando la API al realizar los tests, ya que cypress intentará hacer las peticiones a la API local, lo que resultará en tests fallando.

## Scripts Disponibles
### `yarn start`
Inicia el servidor de desarrollo. Este servidor se actualiza con cada cambio.

### `yarn cypress:open`
Abre cypress para ejecutar los tests.

### `yarn build`
Realiza el build de la aplicación.
