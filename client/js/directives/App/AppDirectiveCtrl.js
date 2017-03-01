import logo from '../../../img/logo.png';

/**
AppDirectiveCtrl
*/
class AppDirectiveCtrl {
  /**
  AppDirectiveCtrl
  @param {Object} AppService Service
  */
  constructor(AppService) {
    const vm = this;
    vm.welcome = 'Hello from Angular!';
    vm.logo = logo;
    vm.names = AppService.getNames();
  }
}

AppDirectiveCtrl.$inject = ['AppService'];
export default AppDirectiveCtrl;
