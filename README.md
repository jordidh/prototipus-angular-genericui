# prototipus-angular-genericui

## Install the Angular CLI
$ npm install -g @angular/cli
$ ng --version

## Update local version of angular cli
$ npm install --save-dev @angular/cli@latest
$ ng --version

## Create new project
$ ng new my-app

## Run the app
$ cd my-app
$ ng serve --open

## Build
$ ng build --prod

## Deploy
// Descarregar el projecte i construir els executables
$ git clone https://github.com/jordidh/prototipus-angular-genericui.git
$ cd prototipus-angular-genericui
$ npm install
$ ng build --prod
// Els executables es troben a /dist/genericui
// Moure els executables a la part pública d'un servidor web
// Obrir un navegador i fer referència al index.html per carregar el projecte
// Ex: https://localhost:4200/index.html


[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/prototipus-angular-genericui)