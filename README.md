### **Proyecto del Módulo 3: Movie-Match API**

Este proyecto es una API REST construida con **Node.js** y **Express**, siguiendo el patrón de diseño **MVC (Modelo-Vista-Controlador)**. La API permite a los usuarios buscar y filtrar información sobre películas a partir de un archivo CSV.

---

### **Funcionalidades Principales**

La API implementa las siguientes funcionalidades requeridas por el proyecto:

* **Búsqueda y Filtrado**:
    * `GET /movies`: Obtiene una lista completa de películas.
    * Filtrado por **género**, **nombre** y **año** usando `query params`.
    * `GET /movies/:id`: Obtiene los detalles de una película específica por su ID.
* **Estructura Modular**: El código está organizado en carpetas `routes`, `controllers`, `services`, y `data`, garantizando una clara separación de responsabilidades.
* **Manejo de Errores y Logging**: Se utiliza **middleware** para registrar cada solicitud y para manejar errores de forma estructurada, devolviendo respuestas JSON claras.
* **Documentación**: La API cuenta con documentación interactiva con **Swagger UI** en la ruta `/docs`, detallando todos los endpoints, parámetros y respuestas.
* **Despliegue Remoto**: La aplicación está desplegada públicamente en una plataforma remota.

---

### **Retos Adicionales Implementados**

Para la extensión del proyecto, se implementaron las siguientes tres funcionalidades adicionales:

1.  **Paginación de Resultados**:
    * **Historia de Usuario**: "Como usuario, quiero ver los resultados en páginas para no tener que cargar todos los datos de una sola vez."
    * **Implementación Técnica**: La lógica de paginación se implementó en el servicio de películas (`movies.services.js`), utilizando los parámetros `page` y `limit` para seleccionar un subconjunto del _array_ de datos. La respuesta incluye metadatos como el número total de películas y páginas.
2.  **Búsqueda por Rango de Año**:
    * **Historia de Usuario**: "Como usuario, quiero buscar películas dentro de un rango de años, para encontrar películas de una década o período específico."
    * **Implementación Técnica**: La lógica de filtrado en el servicio se amplió para verificar si el año de la película se encuentra entre `fromYear` y `toYear`, si estos `query params` están presentes.
3.  **Endpoint para Géneros Únicos**:
    * **Historia de Usuario**: "Como usuario, quiero una lista de todos los géneros de películas disponibles, para usarlos como opciones de filtro en la interfaz de usuario."
    * **Implementación Técnica**: Se creó un nuevo controlador y servicio que recorre todos los datos de las películas y utiliza un `Set` para recopilar y devolver una lista de géneros sin duplicados.

---

### **Decisiones Técnicas Clave**

* **Patrón MVC**: La arquitectura MVC fue elegida para separar la lógica de negocio, la capa de datos, la lógica de enrutamiento y la manipulación de solicitudes. Esto hace que el código sea más organizado y fácil de mantener.
* **Gestión de Datos en Memoria**: Para optimizar el rendimiento y evitar múltiples lecturas del archivo en cada solicitud, el _dataset_ completo se carga una sola vez en la memoria al iniciar el servidor. Esto permite respuestas más rápidas a las peticiones de la API.
* **Middleware Personalizado**: Se crearon middlewares dedicados para el registro de solicitudes (_logging_) y el manejo centralizado de errores. Esta práctica mantiene las rutas y controladores limpios y facilita la depuración y el monitoreo.

---

### **Enlace al Sitio**

[**Enlace a la API desplegada**](AQUI_VA_LA_URL_DE_TU_SITIO_DESPLEGADO)
