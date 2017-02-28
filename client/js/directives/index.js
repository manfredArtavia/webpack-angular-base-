import AppDirective from './App/AppDirective.js';
const directivesModule = angular.module('app.directives', [])
.directive('appDirective', AppDirective)
.name;

export default directivesModule;
