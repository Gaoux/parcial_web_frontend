# Parcial final Web - Frontend


## Descripción
Utilizando el modelo entidad/relación proporcionado, realice las siguientes tareas:

 

Tabla: Contrato

Campos:

Id: PK BIGINT(20)

Identificador: VARCHAR(255)

Valor: DOUBLE

nombre_contratante: VARCHAR(255)

documento_contratante: VARCHAR(255)

nombre_contratantista: VARCHAR(255)

documento_contratantista: VARCHAR(255)

fecha_inicial: DATE

fecha_final: DATE

 

Parte 1: Backend

Cree una aplicación backend utilizando Spring Boot que implemente los cinco endpoints básicos: 

Crear (insertar un nuevo registro). 
Actualizar (editar un registro existente). 
Eliminar (borrar un registro por su identificador). 
Consultar todos los registros. 
Consultar un registro por su identificador.
 

El backend deberá incluir las siguientes capas y componentes: 

Entidad: para representar la tabla de la base de datos. 
Repositorio: para la interacción con la base de datos. 
Servicio: para manejar la lógica de negocio. 
Controlador: para exponer las APIs REST. 
DTO (Data Transfer Object): para la transferencia de datos entre las capas. 
ModelMapper: para mapear automáticamente entre entidades y DTOs.
 

Parte 2: Frontend

Cree una aplicación frontend utilizando Angular que permita realizar las siguientes acciones: 

Insertar valores en la base de datos. 
Mostrar todos los registros almacenados.
 

Cada acción debe implementarse en un componente diferente. El proyecto deberá incluir los siguientes elementos: 

Modelos: para representar la estructura de los datos. 
Servicios: para interactuar con el backend. 
Componentes: para gestionar las vistas y la interacción del usuario.



This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
