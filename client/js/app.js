import angular from 'angular';

import AppController from './controllers/App/AppController.js';
import AppDirective from './directives/App/AppDirective.js';
import AppService from './services/App/AppService.js'

import '../assets/app.scss';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', AppDirective)
  .controller('AppController', AppController)
  .service('AppService', AppService);

export default MODULE_NAME;
