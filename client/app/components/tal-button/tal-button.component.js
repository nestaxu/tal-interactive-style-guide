import template from './tal-button.html';
import controller from './tal-button.controller';
import './tal-button.scss';

const talButtonComponent = {
  template,
  transclude: true,
  bindings: {
    additionalClasses: '@class',
    onClick: '&'
  },
  controller,
  controllerAs: 'talButtonCtrl'
};

export default talButtonComponent;
