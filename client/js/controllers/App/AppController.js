import logo from '../../../img/logo.png';

class AppController {
  constructor(AppService) {
    this.welcome = 'Hello from Angular!';
    this.logo = logo;
    this.names = AppService.getNames();
  }
}

AppController.$inject = ['AppService'];
export default AppController;
