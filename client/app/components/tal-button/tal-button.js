import angular from 'angular';
import talButtonComponent from './tal-button.component';

const TalButtonModule = angular.module('talButton', [])
    .component('talButton', talButtonComponent);

export default TalButtonModule;
