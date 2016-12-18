import angular from 'angular';
import TalButtonModule from './tal-button/tal-button';
import TalInputModule from './tal-input/tal-input';
import TalDropdownModule from './tal-dropdown/tal-dropdown';

const TalStyleGuideComponentsModule = angular.module('talStyleGuideComponents', [
  TalButtonModule.name,
  TalInputModule.name,
  TalDropdownModule.name
]);

export default TalStyleGuideComponentsModule;
