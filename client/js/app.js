import angular from 'angular';
import controllers from './controllers/index.js';
import services from './services/index.js';
import directives from './directives/index.js';
import '../assets/app.scss';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [controllers, services, directives]);
angular.bootstrap(document, [MODULE_NAME]);
export default MODULE_NAME;
