import angular from 'angular';
import talDropdownComponent from './tal-dropdown.component';

const TalDropdownModule = angular.module('talDropdown', [])
    .component('talDropdown', talDropdownComponent);

export default TalDropdownModule;
