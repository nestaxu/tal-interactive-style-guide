import angular from 'angular';
import TalButtonModule from './tal-button/tal-button';
import TalInputModule from './tal-input/tal-input';
import TalDropdownModule from './tal-dropdown/tal-dropdown';

const ComponentsModule = angular.module('app.components', [
  TalButtonModule.name,
  TalInputModule.name,
  TalDropdownModule.name
]);

export default ComponentsModule;
