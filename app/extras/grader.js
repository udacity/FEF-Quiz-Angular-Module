var legoBricks = angular.module('legoBricks');
var newModuleQuizApp = angular.module('newModuleQuizApp');

if (typeof legoBricks === 'object') {
  window.dispatchEvent(new CustomEvent('legoBricks-module-exists', {'detail': 'passed'}));
}

if (newModuleQuizApp.requires.indexOf('legoBricks') >= 0) {
  window.dispatchEvent(new CustomEvent('module-requires-legoBricks', {'detail': 'passed'}));
}
