/**
 * angular-bootstrap-switch
 * @version v0.4.0-alpha.1 - 2014-11-21
 * @author Francesco Pontillo (francescopontillo@gmail.com)
 * @link https://github.com/frapontillo/angular-bootstrap-switch
 * @license Apache License 2.0(http://www.apache.org/licenses/LICENSE-2.0.html)
 **/

"use strict";angular.module("frapontillo.bootstrap-switch",[]),angular.module("frapontillo.bootstrap-switch").directive("bsSwitch",["$parse","$timeout",function(a,b){return{restrict:"A",require:"ngModel",link:function(c,d,e,f){var g=!1,h=function(){var b=a(e.ngTrueValue)(c);return angular.isString(b)||(b=!0),b},i=function(a){return a===!0||"true"===a||!a},j=function(a){return a?a:void 0},k=function(a){var b={switchRadioOff:function(a){return a===!0||"true"===a},switchActive:function(a){return!i(a)},switchAnimate:function(a){return c.$eval(a||"true")},switchLabel:function(a){return a?a:"&nbsp;"},switchIcon:function(a){return a?"<span class='"+a+"'></span>":void 0},switchWrapper:function(a){return a||"wrapper"}},d=b[a]||j;return d(e[a])},l=function(a,b,c){if(g){var d=k(c);a.bootstrapSwitch(b,d)}},m=function(){l(d,"disabled","switchActive")},n=function(){if(!g){var a=f.$modelValue===h();g=!g,d.bootstrapSwitch({radioAllOff:k("switchRadioOff"),disabled:k("switchActive"),state:a,onText:k("switchOnText"),offText:k("switchOffText"),onColor:k("switchOnColor"),offColor:k("switchOffColor"),animate:k("switchAnimate"),size:k("switchSize"),labelText:k(e.switchLabel?"switchLabel":"switchIcon"),wrapperClass:k("switchWrapper"),handleWidth:k("switchHandleWidth"),labelWidth:k("switchLabelWidth")}),f.$setViewValue(a)}},o=function(){e.$observe("switchActive",function(a){var c=i(a);c?m(c):b(function(){m(c)})}),c.$watch(e.ngModel,function(a){n(),void 0!==a&&d.bootstrapSwitch("state",a===h(),!0)},!0);var a={switchRadioOff:"radioAllOff",switchOnText:"onText",switchOffText:"offText",switchOnColor:"onColor",switchOffColor:"offColor",switchAnimate:"animate",switchSize:"size",switchLabel:"labelText",switchIcon:"labelText",switchWrapper:"wrapperClass",switchHandleWidth:"handleWidth",switchLabelWidth:"labelWidth"},f=function(a,b){return function(){e.$observe(a,function(){l(d,b[a],a)})}};for(var g in a)e.$observe(g,f(g,a))},p=function(){d.on("switchChange.bootstrapSwitch",function(a,b){f.$setViewValue(b)})};p(),o(),c.$on("$destroy",function(){d.bootstrapSwitch("destroy")})}}}]).directive("bsSwitch",function(){return{restrict:"E",require:"ngModel",template:"<input bs-switch>",replace:!0}});