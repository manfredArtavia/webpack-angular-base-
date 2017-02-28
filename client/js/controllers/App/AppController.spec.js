import App from '../../app';
import AppService from '../../services/App/AppService';

describe('AppController', () => {

  describe('AppCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(App);

      angular.mock.inject(($controller) => {
        ctrl = $controller('AppController', {});
      });
    });

    it('Should contain the welcome message', () => {
      expect(ctrl.welcome).toEqual('Hello from Angular!');
    });
    it('Should contain an array with 4 elements', () => {
      expect(ctrl.names.length).toEqual(4);
    });
  });
});
