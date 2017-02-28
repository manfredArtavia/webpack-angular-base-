import AppController from './App/AppController.js';
const controllersModule = angular.module('app.controller', [])
.controller('AppController', AppController)
.name;

export default controllersModule;
