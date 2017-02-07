const AppDirective = () => {
  return {
    template: require('./AppTemplate.html'),
    controller: 'AppController',
    controllerAs: 'app'
  }
};

export default AppDirective;
