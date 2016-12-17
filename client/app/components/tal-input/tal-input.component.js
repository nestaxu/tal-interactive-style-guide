import template from './tal-input.html';
import controller from './tal-input.controller';
import './tal-input.scss';

const talInputComponent = {
  template,
  bindings: {
    label: '@',
    placeholder: '@'
  },
  controller,
  controllerAs: 'talInputCtrl'
};

export default talInputComponent;
