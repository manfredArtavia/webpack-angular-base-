import logo from '../../../img/logo.png';

export default class AppCtrl {
  constructor(AppService) {
    this.welcome = 'Hello from Angular!';
    this.logo = logo;
    this.names = AppService.getNames();
  }
}
