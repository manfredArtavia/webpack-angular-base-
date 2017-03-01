import logo from '../../../img/logo.png';
/**
* Adds two numbers together.
*/
class AppController {
  /**
 * Adds two numbers together.
 * @param {Object} AppService The first number
 */
  constructor(AppService) {
    this.welcome = 'Hello from Angular!';
    this.logo = logo;
    this.names = AppService.getNames();
  }
}

AppController.$inject = ['AppService'];
export default AppController;
