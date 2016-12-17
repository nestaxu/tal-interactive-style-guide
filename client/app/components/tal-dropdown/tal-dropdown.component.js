import template from './tal-dropdown.html';
import controller from './tal-dropdown.controller';
import './tal-dropdown.scss';

const talDropdownComponent = {
  template,
  bindings: {
    label: '@',
    placeholder: '@',
    items: '<',
    itemSelected: '&'
  },
  controller,
  controllerAs: 'talDropdownCtrl'
};

export default talDropdownComponent;
