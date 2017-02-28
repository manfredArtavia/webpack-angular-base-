import logo from '../../../img/logo.png';
import template from './AppTemplate.html';
import controller from './AppDirectiveCtrl';

const AppDirective = () => {
  return {
    template,
    restrict: 'E',
    controller,
    controllerAs: 'app'
  }
};

export default AppDirective;
