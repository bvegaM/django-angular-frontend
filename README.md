## Django + Angular [Proceso para Frontend (Angular)]

<img alt="Angular" src="https://i.ytimg.com/vi/mog8EKQX5HI/maxresdefault.jpg" width="150">

Angular es un framework para la creación de páginas web SPA mantenido por Google. SPA es el acrónimo de ‘Single Page Application’ o lo que es lo mismo, cuando un usuario entra en una web SPA, se carga todo a la vez en una misma página y Angular lo que hace por debajo es cambiar la vista al navegar por la página para que de la apariencia de una web normal

<img alt="Covalent" src="https://miro.medium.com/max/1200/1*ZPOa0Nn_fk0XtNTmeESQzA.png" width="150">

Covalent es una plataforma de interfaz de usuario que se ajusta a los proyectos de material angular y angular. Reduce el código redundante y repetitivo, lo que le permite concentrarse, en lugar de configurar.La interfaz de usuario Covalent integra potentes herramientas y marcos de desarrollo al agregar sus propios componentes personalizados.

**Nota: En este repositorio se muesrtra los pasos a seguir para descargar e instalar este proyecto angular. La parte de backend se puede encontrar en: https://github.com/ieeeupscuenca/django-angular-bakcend-**

## Requisitos

* Tener instalado node.js
* Tener instalado git
* Instala IDE visual Studio Code:https://code.visualstudio.com/download **[Indispensable este IDE, sera de mucha ayuda]**
---

## Instalación Angular

* **Descargar el proyecto de git**
Para poder realizar este proceso mediante el terminal se va a utilizar la siguiente linea para clonar el repositorio del github.
```bash
git clone https://github.com/ieeeupscuenca/django-angular-frontend.git
```
* **Instalación de angular **

Primero procedemos a descargar las ultimas dependencias para mantener actualizado angular y después borramos el cache de npm. Usamos la siguiente linea de código.
```bash
npm install -g npm@latest
npm cache clean --force
```
Desactivamos las auditorias de npm para evitarnos problemas. El comando para ello es el siguiente.
```bash
npm set audit false
```
En casp de qie se tenga un paquete viejo de angular se lo elimina para poder instalar un nuevo cliente. los comandos para ello es el siguiente:
```bash
npm uninstall -g angular-cli
npm uninstall -g @angular/cli
npm cache clean --force
```
Ahora procedemos a instalar el cliente de angular mediante el siguiente comando.
```bash
npm install -g @angular/cli
```
* **Hacer build de la Aplicación**

Para este proceso el cual es muy importante para que la aplicación corra correctamente, primer procedemos a abrir el visual studio Code. La ventaja de este IDE es que tiene soporte para Angular y ademas de ello cuenta con una terminal para poder ejecutar comandos angular. Sin embargo Vistual studio Code trabajo con windows powershell por lo que hay que desactivar una restricción de ejecución de comandos. Para ello primero abrimos Windows PowerShell como adrministrador y ejecutamos el siguiente comando.
```bash
Set-ExecutionPolicy Unrestricted
```
Después de ello podremos ejecutar comandos en la terminal y ahora procedemos a instalar un paquete que nos permite reconstruir la aplicación de angular. Para ello ejecutamos el siguiente comando en la terminal de Visual Studio Code.
```bash
npm install --save-dev @angular-devkit/build-angular
```
Una vez realizado eso, procedemos a instalar Covalent.

* **Instalación de Covalent**

Primero instalamos los módulos de covalent
```bash
npm install --save @covalent/core
npm install --save @covalent/http @covalent/highlight @covalent/markdown @covalent/dynamic-forms @covalent/echarts
```
Para probar **(¡ solo para probar! )** Los últimos cambios desde el desarrollo, instale la compilación nocturna:
```bash
npm install --save https://github.com/Teradata/covalent-nightly.git
npm install --save https://github.com/Teradata/covalent-echarts-nightly.git
```
Sin embargo vamos a tener problemas por falta de dependencias. Para ello tenemos que instalar las dependencias con los siguientes comandos
```bash
npm i --save  @angular/material
npm i --save @angular/cdk
```
En caso de que de mas errores de dependencia ir viendo el error e instalando las dependencias necesarias.

* **Correr el framework Angular**

Por ultimo una vez que tengamos todo el proceso realizado, referente a los pasos de instalación procedemos a correr el servicio con el siguiente comando.
```bash
npm start
## o se puede utilizar (recomiendo npm start)
ng serve
```
Una vez ejecutado los comandos, procedemos a acceder a este link http://localhost:4200/ y si todo salio bien saldra el sitio web con Angular y con esto acabamos el proceso de instalación de angular.

**NOTA: Esto tenemos que correr simultaneamente con el Backend Django**

A continuación esta información de angular referente a comandos necesarios

---
# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
