import AppService from './App/AppService.js'
const servicesModule = angular.module('app.services', [])
.service('AppService', AppService)
.name;
export default servicesModule;
