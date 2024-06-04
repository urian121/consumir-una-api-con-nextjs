# Consumir una API con Next.js usando el método getStaticProps

##### Aprende a consumir una Api en NextJs con el método getStaticProps.

##### En Next.js, los métodos de obtención de datos juegan un papel crucial en la habilitación de la representación del lado del servidor (SSR), la generación estática de sitios (SSG) y la obtención de datos del lado del cliente para sus componentes de React. Estos métodos le permiten obtener datos de varias fuentes (por ejemplo, API, bases de datos, servicios externos) y utilizar esos datos para pre-render páginas o hidratarlos en el lado del cliente.

##### getServerSidePropsel ciclo de vida se utiliza para obtener datos en el lado del servidor y pre-render la página con los datos de obtención antes de enviarlos al cliente. A diferencia de getStaticProps, getServerSidePropsse ejecuta en cada solicitud, haciéndolo adecuado para páginas que requieren datos dinámicos o datos que cambian con frecuencia.
