# Angular & TypeScript - Angular Api Giphy App

---

# Temas puntuales de la sección

### ¿Qué veremos en esta sección?

En esta sección veremos:

- Modularización de la aplicación
- Estructura de la aplicación de media a gran escala
- Componentes
- ViewChild
- Servicios
- Historial de búsquedas
- Uso de Api Keys
- LocalStorage
- Peticiones HTTP

Realizaremos un loading mientras la imagen se carga, y también indirectamente haremos:

- @Inputs
- @Outputs
- Custom Components
- Validaciones
- Importación de módulos personalizados
- Animaciones mediante css (paquete de terceros)

### \* NOTAS:

1. Modularización de la aplicación: El patrón de diseño en el proyecto se conoce como "Organización por carpetas" o "Estructura de carpetas modular". Este patrón se refiere a la forma en que los diferentes archivos y componentes del proyecto están organizados en carpetas específicas para facilitar el desarrollo y mantenimiento de la aplicación. En esta estructura, los diferentes tipos de archivos, componentes y funcionalidades se agrupan en carpetas con nombres significativos, lo que hace que el proyecto sea más legible, mantenible y escalable. Esta estructura de carpetas es una práctica común y recomendada para organizar proyectos en Angular. Al seguir esta estructura, se obtiene un código más limpio y organizado, lo que ayuda a mantener la escalabilidad y la legibilidad del proyecto a medida que crece.

### \* RECURSOS A USAR:

- GIPHY: https://developers.giphy.com/
- Bootstrap (CDN): https://getbootstrap.com/
  ```html
  <!-- Bootstrap CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
  ```
- Animate.css (CDN): https://animate.style/
  ```html
  <!-- Animate.css CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  ```

---

# AngularApiGiphyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
