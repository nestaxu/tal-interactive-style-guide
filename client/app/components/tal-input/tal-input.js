import angular from 'angular';
import talInputComponent from './tal-input.component';

const TalInputModule = angular.module('talInput', [])
    .component('talInput', talInputComponent);

export default TalInputModule;
