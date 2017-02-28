import logo from '../../../img/logo.png';

class AppDirectiveCtrl {
  constructor(AppService) {
    console.log('HI from app directive');
    const vm = this;
    vm.welcome = 'Hello from Angular!';
    vm.logo = logo;
    vm.names = AppService.getNames();
  }
}

AppDirectiveCtrl.$inject = ['AppService'];
export default AppDirectiveCtrl;
