(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0Yyr":function(e,t,n){e.exports=n.p+"static/uoh_centre-a51b43fe8135bcbcead0e64782eb0286.svg"},"1nrn":function(e,t,n){},"33yf":function(e,t,n){(function(e){function r(e,t){for(var n=0,r=e.length-1;r>=0;r--){var a=e[r];"."===a?e.splice(r,1):".."===a?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function a(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}n("OeI1"),n("HQhv"),t.resolve=function(){for(var t="",n=!1,o=arguments.length-1;o>=-1&&!n;o--){var i=o>=0?arguments[o]:e.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,n="/"===i.charAt(0))}return(n?"/":"")+(t=r(a(t.split("/"),(function(e){return!!e})),!n).join("/"))||"."},t.normalize=function(e){var n=t.isAbsolute(e),i="/"===o(e,-1);return(e=r(a(e.split("/"),(function(e){return!!e})),!n).join("/"))||n||(e="."),e&&i&&(e+="/"),(n?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(a(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var a=r(e.split("/")),o=r(n.split("/")),i=Math.min(a.length,o.length),c=i,u=0;u<i;u++)if(a[u]!==o[u]){c=u;break}var s=[];for(u=c;u<a.length;u++)s.push("..");return(s=s.concat(o.slice(c))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,a=!0,o=e.length-1;o>=1;--o)if(47===(t=e.charCodeAt(o))){if(!a){r=o;break}}else a=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=function(e){"string"!=typeof e&&(e+="");var t,n=0,r=-1,a=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!a){n=t+1;break}}else-1===r&&(a=!1,r=t+1);return-1===r?"":e.slice(n,r)}(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,n=0,r=-1,a=!0,o=0,i=e.length-1;i>=0;--i){var c=e.charCodeAt(i);if(47!==c)-1===r&&(a=!1,r=i+1),46===c?-1===t?t=i:1!==o&&(o=1):-1!==t&&(o=-1);else if(!a){n=i+1;break}}return-1===t||-1===r||0===o||1===o&&t===r-1&&t===n+1?"":e.slice(t,r)};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("8oxB"))},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var a=n("q1tI"),o=r(a),i=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,M=[];function l(){s=e(M.map((function(e){return e.props}))),T.canUseDOM?t(s):n&&(s=n(s))}var T=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,M=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){M.push(this),l()},c.componentDidUpdate=function(){l()},c.componentWillUnmount=function(){var e=M.indexOf(this);M.splice(e,1),l()},c.render=function(){return o.createElement(r,this.props)},a}(a.Component);return c(T,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(T,"canUseDOM",u),T}}},"8oxB":function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,s=[],M=!1,l=-1;function T(){M&&u&&(M=!1,u.length?s=u.concat(s):l=-1,s.length&&N())}function N(){if(!M){var e=c(T);M=!0;for(var t=s.length;t;){for(u=s,s=[];++l<t;)u&&u[l].run();l=-1,t=s.length}u=null,M=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function g(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new f(e,t)),1!==s.length||M||c(N)},f.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=g,a.addListener=g,a.once=g,a.off=g,a.removeListener=g,a.removeAllListeners=g,a.emit=g,a.prependListener=g,a.prependOnceListener=g,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},"8ypT":function(e,t,n){},"98iT":function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI0N3B4IiBoZWlnaHQ9IjgycHgiIHZpZXdCb3g9IjAgMCAyNDcgODIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1My4yICg3MjY0MykgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+DQogICAgPHRpdGxlPmxvZ28vaG91c3RvbjwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+DQogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMCAwLjAyNjcxOTI2NzMgMTM4LjIwODE2NyAwLjAyNjcxOTI2NzMgMTM4LjIwODE2NyAzNi40NjU0MzgxIDAgMzYuNDY1NDM4MSI+PC9wb2x5Z29uPg0KICAgIDwvZGVmcz4NCiAgICA8ZyBpZD0ibG9nby9ob3VzdG9uIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9ImhvdXN0b25fc2ltcGxlLmVwcy1jb3B5LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU0LjU4MTg5MywgMjMuMjYzMDQwKSI+DQogICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+DQogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4NCiAgICAgICAgICAgIDwvbWFzaz4NCiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik04Mi44MDUxMjk4LDEzLjUwNjY2MDMgTDgyLjgwNTEyOTgsMjUuNTM2NTUwOSBMODUuOTkzNjI5LDI1LjUzNjU1MDkgTDg1Ljk5MzYyOSwxMy41MDY2NjAzIEw5MC40MDY1NDkzLDEzLjUwNjY2MDMgTDkwLjQwNjU0OTMsMTAuNDQ1Njc4NCBMNzguMzc1MTAzNiwxMC40NDU2Nzg0IEw3OC4zNzUxMDM2LDEzLjUwNjY2MDMgTDgyLjgwNTEyOTgsMTMuNTA2NjYwMyBaIE05Ni40OTEwNDk1LDE3Ljk2MzY4ODUgQzk2LjQ5MTA0OTUsMjAuNTU5NTU3MiA5OC4zMTc4NTU3LDIyLjcwNzk4NDIgMTAwLjg4NjE1NywyMi43MDc5ODQyIEMxMDMuNDU0ODgyLDIyLjcwNzk4NDIgMTA1LjI0NzE5NCwyMC41OTU0NjU3IDEwNS4yNDcxOTQsMTguMDE3OTc1MyBMMTA1LjI0NzE5NCwxOC4wMDAwMjExIEMxMDUuMjQ3MTk0LDE1LjQwNDI5MzcgMTAzLjQyMDUyOSwxMy4yNTU4NjY3IDEwMC44NTIyMjgsMTMuMjU1ODY2NyBDOTguMjgzNTAyMywxMy4yNTU4NjY3IDk2LjQ5MTA0OTUsMTUuMzY4Mzg1MyA5Ni40OTEwNDk1LDE3Ljk0NTczNDMgTDk2LjQ5MTA0OTUsMTcuOTYzNjg4NSBaIE05My4xNDcwNDEzLDE4LjAxNzk3NTMgTDkzLjE0NzA0MTMsMTcuOTgyMDY2OSBDOTMuMTQ3MDQxMywxMy42ODU0OTU2IDk2LjQwNDgxMjcsMTAuMTc2OTMwNiAxMDAuODg2MTU3LDEwLjE3NjkzMDYgQzEwNS4zNjc5MjUsMTAuMTc2OTMwNiAxMDguNTkxMzQzLDEzLjY0OTcyODUgMTA4LjU5MTM0MywxNy45NDU3MzQzIEwxMDguNTkxMzQzLDE3Ljk2MzY4ODUgQzEwOC41OTEzNDMsMjIuMjYwMjU5OCAxMDUuMzMzNTcyLDI1Ljc2ODgyNDcgMTAwLjg1MjIyOCwyNS43Njg4MjQ3IEM5Ni4zNzAzMTgsMjUuNzY4ODI0NyA5My4xNDcwNDEzLDIyLjMxNDEyMjQgOTMuMTQ3MDQxMywxOC4wMTc5NzUzIEw5My4xNDcwNDEzLDE4LjAxNzk3NTMgWiBNNzAuNDExOTEzNywyMi43OTcwNDg1IEM2OC43NTY4NzQyLDIyLjc5NzA0ODUgNjcuMzc4MjE2NiwyMi4wODEyODMxIDY2LjA2ODQwNywyMC45NzE3OTc0IEw2NC4xNzIxODcyLDIzLjMxNjQ0ODQgQzY1LjkxMzE4MDgsMjQuOTI3OTQ1NCA2OC4xMzY2NzYyLDI1LjczMzM0MDQgNzAuMzQzMDY1NiwyNS43MzMzNDA0IEM3My40ODAxMDU1LDI1LjczMzM0MDQgNzUuNjY5MjQ3NiwyNC4wNTAxNjggNzUuNjY5MjQ3NiwyMS4wNjEwMDMgTDc1LjY2OTI0NzYsMjEuMDI1MDk0NSBDNzUuNzIxMTMxLDE4LjM5MzQ1ODggNzQuMDQ4NTYxNSwxNy4zMDE3ODU4IDcxLjEwMTEwMTEsMTYuNDk1ODI1MyBDNjguNTg0NjgzNCwxNS44MzM5MjI2IDY3Ljk2MzkxOTksMTUuNTExMzEyMiA2Ny45NjM5MTk5LDE0LjUwODk4NjIgTDY3Ljk2MzkxOTksMTQuNDczMDc3OCBDNjcuOTYzOTE5OSwxMy43Mzg5MzQxIDY4LjYwMjIxMzUsMTMuMTY2NjYxMSA2OS44MjU2NDQ5LDEzLjE2NjY2MTEgQzcxLjA0OTY0MTgsMTMuMTY2NjYxMSA3Mi4zMDc5OTIxLDEzLjcyMDk3OTkgNzMuNjAwODM3LDE0LjY1MjA1NDUgTDc1LjI1NTU5MzgsMTIuMTQ1OTU2OSBDNzMuNzg5OTkyNSwxMC45MTA2NTAyIDcxLjk4MDcxNjQsMTAuMjMwMzY5MiA2OS44NjA1NjM3LDEwLjIzMDM2OTIgQzY2Ljg5NTcxNDcsMTAuMjMwMzY5MiA2NC43NzU1NjIsMTIuMDM4NjU1NyA2NC43NzU1NjIsMTQuNzc3NTkyNiBMNjQuNzc1NTYyLDE0LjgxMzA3NjkgQzY0Ljc3NTU2MiwxNy44MDI2NjYxIDY2LjY3MTA3NDksMTguNjQ0NTM1IDY5LjU4NDE4MTksMTkuNDMyMTE3MyBDNzIuMDE0NjQ1NiwyMC4wNzY2MzEyIDcyLjUxNDY3NzYsMjAuNTA2MjYwMSA3Mi41MTQ2Nzc2LDIxLjM0NzcwNDkgTDcyLjUxNDY3NzYsMjEuMzgzMDQ3OSBDNzIuNTE0Njc3NiwyMi4yNjAyNTk4IDcxLjcyMjI4ODgsMjIuNzk3MDQ4NSA3MC40MTE5MTM3LDIyLjc5NzA0ODUgTDcwLjQxMTkxMzcsMjIuNzk3MDQ4NSBaIE0zMS4zMzY0Njk3LDE3Ljk2MzY4ODUgQzMxLjMzNjQ2OTcsMjAuNTU5NTU3MiAzMy4xNjM3LDIyLjcwNzk4NDIgMzUuNzMxODU5OSwyMi43MDc5ODQyIEMzOC4zMDAxNjExLDIyLjcwNzk4NDIgNDAuMDkyNDcyNiwyMC41OTU0NjU3IDQwLjA5MjQ3MjYsMTguMDE3OTc1MyBMNDAuMDkyNDcyNiwxOC4wMDAwMjExIEM0MC4wOTI0NzI2LDE1LjQwNDI5MzcgMzguMjY1MjQyMywxMy4yNTU4NjY3IDM1LjY5Njk0MSwxMy4yNTU4NjY3IEMzMy4xMjkyMDUzLDEzLjI1NTg2NjcgMzEuMzM2NDY5NywxNS4zNjgzODUzIDMxLjMzNjQ2OTcsMTcuOTQ1NzM0MyBMMzEuMzM2NDY5NywxNy45NjM2ODg1IFogTTI4LjAwOTcwODksMTguMDE3OTc1MyBMMjguMDA5NzA4OSwxNy45ODIwNjY5IEMyOC4wMDk3MDg5LDEzLjY4NTQ5NTYgMzEuMjY3NDgwMywxMC4xNzY5MzA2IDM1Ljc0ODgyNDUsMTAuMTc2OTMwNiBDNDAuMjMwNzM0MiwxMC4xNzY5MzA2IDQzLjQzNjE5OCwxMy42NDk3Mjg1IDQzLjQ1NDAxMDksMTcuOTQ1NzM0MyBMNDMuNDU0MDEwOSwxNy45NjM2ODg1IEM0My40NTQwMTA5LDIyLjI2MDI1OTggNDAuMTk2MjM5NSwyNS43Njg4MjQ3IDM1LjcxNDg5NTMsMjUuNzY4ODI0NyBDMzEuMjMyNTYxNSwyNS43Njg4MjQ3IDI4LjAwOTcwODksMjIuMzE0MTIyNCAyOC4wMDk3MDg5LDE4LjAxNzk3NTMgTDI4LjAwOTcwODksMTguMDE3OTc1MyBaIE01My44MzA0MTcxLDI1LjczMzM0MDQgQzU3Ljc0Mjg4MTIsMjUuNzMzMzQwNCA2MC4yMDc4Mzk3LDIzLjQ5NTg0OTIgNjAuMjA3ODM5NywxOC45MzA2NzE1IEw2MC4yMDc4Mzk3LDEwLjQyNzE1ODcgTDU3LjAwMTgxMDMsMTAuNDI3MTU4NyBMNTcuMDAxODEwMywxOS4wNzM3Mzk4IEM1Ny4wMDE4MTAzLDIxLjQ3MjY3NzYgNTUuODEyMzA4MSwyMi42OTAwMyA1My44NjQ3NzA0LDIyLjY5MDAzIEM1MS45MTczNzQxLDIyLjY5MDAzIDUwLjcyNzczMDUsMjEuNDE4OTU2MyA1MC43Mjc3MzA1LDE4Ljk2NjU4IEw1MC43Mjc3MzA1LDEwLjQyNzE1ODcgTDQ3LjUzODY2NTgsMTAuNDI3MTU4NyBMNDcuNTM4NjY1OCwxOS4wMzc4MzEzIEM0Ny41Mzg2NjU4LDIzLjQ3Nzg5NSA0OS45MTc5NTMsMjUuNzMzMzQwNCA1My44MzA0MTcxLDI1LjczMzM0MDQgTDUzLjgzMDQxNzEsMjUuNzMzMzQwNCBaIE0zLjE1NDU3LDMzLjE5ODE5NDggTDEzNS4wMzY2MzIsMzMuMTk4MTk0OCBMMTM1LjAzNjYzMiwzLjMwMjQ0NDg4IEwzLjE1NDU3LDMuMzAyNDQ0ODggTDMuMTU0NTcsMzMuMTk4MTk0OCBaIE0wLDM2LjQ3MzkyMDQgTDEzOC4yMDgxNjcsMzYuNDczOTIwNCBMMTM4LjIwODE2NywwLjAyNjcxOTI2NzMgTDAsMC4wMjY3MTkyNjczIEwwLDM2LjQ3MzkyMDQgWiBNMTQuODIzMTE0MywxOS40ODU0MTQ0IEwyMC43MTg2MDA1LDE5LjQ4NTQxNDQgTDIwLjcxODYwMDUsMjUuNTM2NTUwOSBMMjMuOTA3NjY1MiwyNS41MzY1NTA5IEwyMy45MDc2NjUyLDEwLjQ0NTY3ODQgTDIwLjcxODYwMDUsMTAuNDQ1Njc4NCBMMjAuNzE4NjAwNSwxNi40MDYwNTQyIEwxNC44MjMxMTQzLDE2LjQwNjA1NDIgTDE0LjgyMzExNDMsMTAuNDQ1Njc4NCBMMTEuNjM0NzU2NSwxMC40NDU2Nzg0IEwxMS42MzQ3NTY1LDI1LjUzNjU1MDkgTDE0LjgyMzExNDMsMjUuNTM2NTUwOSBMMTQuODIzMTE0MywxOS40ODU0MTQ0IFogTTExNS44NjQ5MjIsMTUuOTQxNTA2NSBMMTIyLjg5NzYwMiwyNS41MzY1NTA5IEwxMjUuNjIwOTg4LDI1LjUzNjU1MDkgTDEyNS42MjA5ODgsMTAuNDQ1Njc4NCBMMTIyLjQ2NjQxOCwxMC40NDU2Nzg0IEwxMjIuNDY2NDE4LDE5LjczNjIwOCBMMTE1LjY1ODM3NywxMC40NDU2Nzg0IEwxMTIuNzEwOTE3LDEwLjQ0NTY3ODQgTDExMi43MTA5MTcsMjUuNTM2NTUwOSBMMTE1Ljg2NDkyMiwyNS41MzY1NTA5IEwxMTUuODY0OTIyLDE1Ljk0MTUwNjUgTDExNS44NjQ5MjIsMTUuOTQxNTA2NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjMDAwMTA1IiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="},AxK6:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("C8Qj"),n("oBw6");var r=n("q1tI"),a=n.n(r);var o=function(e){var t=e.src,n=e.alt,r=(e.hover,e.className),o=e.overlay,i=e.contain,c=e.circle,u=e.extraSmall,s=e.small,M=e.medium,l=e.large,T=e.fullWidth,N=e.actualSize,f=e.squareBig,g=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["src","alt","hover","className","overlay","contain","circle","extraSmall","small","medium","large","fullWidth","actualSize","squareBig"]),p=[];return i&&p.push("image--contain"),T&&p.push("image--full-width"),c&&p.push("image--circle"),u&&p.push("image--extra-small"),s&&p.push("image--small"),M&&p.push("image--medium"),l&&p.push("image--large"),f&&p.push("image--square-big"),N&&p.push("image--acctual-size"),a.a.createElement("div",Object.assign({className:"image "+r+" "+p.join(" ")},g),a.a.createElement("div",{className:"image__container"},a.a.createElement("img",{style:{backgroundColor:o,backgroundOpacity:"0.5"},className:"image__content",src:t,alt:n})))};o.defaultProps={src:"",alt:"",overlay:"",className:""}},Bl7J:function(e,t,n){"use strict";n("8ypT"),n("1nrn");var r=n("q1tI"),a=n.n(r),o=(n("pr76"),n("Wbzz")),i=n("TiAl"),c=n("iAdT");var u=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).header=a.a.createRef(),n.handleScroll=function(){var e=window.scrollY;n.setState({top:e,headerClass:n.state.top>10&&e>n.state.top?"header--small":""})},n.state={top:0,headerClass:""},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var u=r.prototype;return u.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},u.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},u.render=function(){var e=this.state.headerClass;return a.a.createElement("div",{ref:this.header,className:"header "+e,style:{backgroundColor:""!==e?"transparent":"white"}},a.a.createElement("div",{className:"container",style:{alignItems:"center",justifyContent:"flex-start"}},a.a.createElement(o.Link,{to:"en"===this.props.lang?"/en":"zh"===this.props.lang?"/zh":"/",className:"header__logo"},""===e?a.a.createElement(c.a,{className:"nav-item-hover",childrenClassName:"triple-border__logo"},"{() => fs}"):a.a.createElement(c.a,{hover:!0,className:"nav-item-hover",childrenClassName:"triple-border__logo"},"fs")),"header--small"!==this.state.headerClass&&a.a.createElement(i.a,{lang:this.props.lang})))},r}(r.Component);var s=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={siteLanguage:"fi"},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.componentDidMount=function(){var e=window.location.pathname.indexOf("/en")>-1?"en":window.location.pathname.indexOf("/zh")>-1?"zh":"fi";this.setState({siteLanguage:e})},o.render=function(){var e=this.state.siteLanguage;return a.a.createElement("div",{className:"main-wrapper"},a.a.createElement(u,{lang:e}),this.props.children)},r}(r.Component);t.a=s},C8Qj:function(e,t,n){"use strict";n("t+fG")("small",(function(e){return function(){return e(this,"small","","")}}))},CYCl:function(e,t,n){},Gytx:function(e,t,n){n("n7j8"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var s=o[u];if(!c(s))return!1;var M=e[s],l=t[s];if(!1===(a=n?n.call(r,M,l,s):void 0)||void 0===a&&M!==l)return!1}return!0}},QSbs:function(e,t,n){},R48M:function(e,t,n){var r=n("P8UN");r(r.S+r.F*!n("QPJK"),"Object",{defineProperty:n("rjfK").f})},TJpk:function(e,t,n){n("MIFh"),n("wZFJ"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("JHok"),n("LagC"),n("pS08"),n("sc67"),n("R48M"),n("E5k/"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n("q1tI")),i=l(n("17x9")),c=l(n("8+s/")),u=l(n("bmMU")),s=n("v1p5"),M=n("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}function T(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var g,p,E,A=(0,c.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),y=(g=A,E=p=function(e){function t(){return N(this,t),f(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case M.TAG_NAMES.SCRIPT:case M.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case M.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(a.type){case M.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=c,t.titleAttributes=r({},i),t));case M.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case M.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=T(a,["children"]),c=(0,s.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case M.TAG_NAMES.LINK:case M.TAG_NAMES.META:case M.TAG_NAMES.NOSCRIPT:case M.TAG_NAMES.SCRIPT:case M.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=T(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(g,a)},a(t,null,[{key:"canUseDOM",set:function(e){g.canUseDOM=e}}]),t}(o.default.Component),p.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},p.defaultProps={defer:!0,encodeSpecialCharacters:!0},p.peek=g.peek,p.rewind=function(){var e=g.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},TiAl:function(e,t,n){"use strict";n.d(t,"b",(function(){return M}));n("E5k/"),n("Xifz");var r=n("q1tI"),a=n.n(r),o=(n("CYCl"),n("Wbzz")),i=function(e){var t=e.language;return t===e.active?a.a.createElement("span",{className:"language-switcher__active-language"},t):a.a.createElement("div",{className:"language-switcher__language"},a.a.createElement(o.Link,{to:"en"===t?"/en":"zh"===t?"/zh":"/"},t))},c=function(e){var t=e.lang;return a.a.createElement("div",{className:"language-switcher"},a.a.createElement(i,{language:"fi",active:t}))};c.defaultProps={lang:"fi"};var u=c;n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi");var s=function(e){var t=e.text,n=e.path,r=e.className,i=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["text","path","className"]);return a.a.createElement("li",Object.assign({},i,{className:"navigation__item "+r}),a.a.createElement(o.Link,{className:"nav-item-hover",to:n},t))};s.defaultProps={className:""};var M={en:[{text:"About course",path:"/en/about"},{text:"Course contents",path:"/en#course-contents"},{text:"FAQ",path:"/en/faq"},{text:"Partners",path:"/en/companies"},{text:"Challenge",path:"/en/challenge"}],fi:[{text:"Kurssista",path:"/about"},{text:"Kurssimateriaali",path:"#course-contents"}],zh:[{text:"关于课程",path:"/zh/about"},{text:"课程内容",path:"/zh#course-contents"},{text:"常见问题",path:"/zh/faq"},{text:"合作伙伴",path:"/zh/companies"},{text:"挑战",path:"/zh/challenge"}]},l=function(){return document.body.classList.remove("is-open--navigation")},T=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={navigationOpen:!1},n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this,t=this.props.className;return a.a.createElement("div",{className:"navigation__wrapper "+t},a.a.createElement("button",{"aria-label":"Navigation menu","aria-expanded":this.state.navigationOpen,onClick:function(){e.setState({navigationOpen:!e.state.navigationOpen}),document.body.classList.toggle("is-open--navigation")},className:"navigation__toggle"},a.a.createElement("div",{className:"navigation__toggle-icon"})),a.a.createElement("nav",null,a.a.createElement("ul",{className:"navigation"},M[this.props.lang].map((function(e){return a.a.createElement(s,Object.assign({key:e.path},e,{onClick:l}))})),a.a.createElement(u,{lang:this.props.lang}))))},r}(r.Component);T.defaultProps={className:""};t.a=T},WNIo:function(e,t,n){e.exports=n.p+"static/seo_image-939e8e249cf62a835ed560f6da4200ad.jpg"},Xifz:function(e,t,n){},aHCT:function(e,t,n){"use strict";n("t+fG")("bold",(function(e){return function(){return e(this,"b","","")}}))},bIFT:function(e,t,n){},bmMU:function(e,t,n){"use strict";n("pJf4"),n("Ll4R"),n("q8oJ"),n("C9fy"),n("klQ5"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("MIFh");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,u,s,M=r(t),l=r(n);if(M&&l){if((u=t.length)!=n.length)return!1;for(c=u;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(M!=l)return!1;var T=t instanceof Date,N=n instanceof Date;if(T!=N)return!1;if(T&&N)return t.getTime()==n.getTime();var f=t instanceof RegExp,g=n instanceof RegExp;if(f!=g)return!1;if(f&&g)return t.toString()==n.toString();var p=a(t);if((u=p.length)!==a(n).length)return!1;for(c=u;0!=c--;)if(!o.call(n,p[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=u;0!=c--;)if(!("_owner"===(s=p[c])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},iAdT:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("E5k/"),n("bIFT");var r=n("q1tI"),a=n.n(r),o=function(e){var t=e.children,n=e.largeMargin,r=e.className,o=e.childrenClassName,i=e.backgroundColor,c=e.props,u=e.hover;return a.a.createElement("div",Object.assign({className:"triple-border "+r+" "+(n?"triple-border--large-margin":""),style:u?{backgroundColor:"black",color:"white",padding:n?"":"0.2em"}:{padding:n?"":"0.2em"}},c),a.a.createElement("div",{className:"triple-border__container "+o,style:{backgroundColor:i,zIndex:10}},t))};o.defaultProps={className:"",childrenClassName:"",largeMargin:!1,hover:!1,backgroundColor:"transparent"}},"jsr+":function(e,t,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("QSbs");var r=n("q1tI"),a=n.n(r);var o=function(e){var t=e.Tag,n=e.children,r=e.className,o=e.flex,i=e.dirColumn,c=e.spaceAround,u=e.spaceBetween,s=e.centered,M=e.autoMargin,l=e.autoBottomMargin,T=e.horizontalHalf,N=e.flexStart,f=e.noWrap,g=e.centeredInDesktop,p=e.relative,E=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["Tag","children","className","flex","dirColumn","spaceAround","spaceBetween","centered","autoMargin","autoBottomMargin","horizontalHalf","flexStart","noWrap","centeredInDesktop","relative"]),A=[];return o&&A.push("element--flex"),M&&A.push("element--auto-margin"),l&&A.push("element--auto-bottom-margin"),i&&A.push("element--column"),c&&A.push("element--space-around"),u&&A.push("element--space-between"),s&&A.push("element--centered"),T&&A.push("element--horizontal-half"),N&&A.push("element--flex-start"),f&&A.push("element--no-wrap"),g&&A.push("element--centered-in-desktop"),p&&A.push("element--relative"),a.a.createElement(t,Object.assign({className:r+" "+A.join(" ")},E),n)};o.defaultProps={className:"",Tag:"div"},t.a=o},klQ5:function(e,t,n){var r=n("emib"),a=n("TUPI"),o=n("rjfK").f,i=n("chL8").f,c=n("mhTz"),u=n("lb9j"),s=r.RegExp,M=s,l=s.prototype,T=/a/g,N=/a/g,f=new s(T)!==T;if(n("QPJK")&&(!f||n("96qb")((function(){return N[n("sOol")("match")]=!1,s(T)!=T||s(N)==N||"/a/i"!=s(T,"i")})))){s=function(e,t){var n=this instanceof s,r=c(e),o=void 0===t;return!n&&r&&e.constructor===s&&o?e:a(f?new M(r&&!o?e.source:e,t):M((r=e instanceof s)?e.source:e,r&&o?u.call(e):t),n?this:l,s)};for(var g=function(e){e in s||o(s,e,{configurable:!0,get:function(){return M[e]},set:function(t){M[e]=t}})},p=i(M),E=0;p.length>E;)g(p[E++]);l.constructor=s,s.prototype=l,n("IYdN")(r,"RegExp",s)}n("to/b")("RegExp")},oBw6:function(e,t,n){},pnXN:function(e,t,n){e.exports=n.p+"static/EYE_green_wide-0a72f74a959f54d0f3e4bb8c67f6f158.jpg"},pr76:function(e,t,n){},"t+fG":function(e,t,n){var r=n("P8UN"),a=n("96qb"),o=n("ap2Z"),i=/"/g,c=function(e,t,n,r){var a=String(o(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},ug1A:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Full Stack open 2020","description":"","author":"Houston Inc. Consulting oy"}}}}')},v1p5:function(e,t,n){(function(e){n("wZFJ"),n("HQhv"),n("1dPr"),n("JHok"),n("MIFh"),n("sc67"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("OeI1"),n("AqHK"),n("U6Bt"),n("sC2a"),n("E5k/"),n("m210"),n("4DPX"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n("q1tI")),i=u(n("MgzW")),c=n("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var s,M=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},l=function(e){var t=p(e,c.TAG_NAMES.TITLE),n=p(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=p(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},T=function(e){return p(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},N=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},f=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},g=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&D("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var u=o[i],s=u.toLowerCase();-1===t.indexOf(s)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var M=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][M]&&(r[n][M]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),u=0;u<o.length;u++){var s=o[u],M=(0,i.default)({},a[s],r[s]);a[s]=M}return e}),[]).reverse()},p=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},E=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){E(e)}),0)}),A=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||E:e.requestAnimationFrame||E,d="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,D=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},j=null,h=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,s=e.onChangeClientState,M=e.scriptTags,l=e.styleTags,T=e.title,N=e.titleAttributes;w(c.TAG_NAMES.BODY,r),w(c.TAG_NAMES.HTML,a),I(T,N);var f={baseTag:z(c.TAG_NAMES.BASE,n),linkTags:z(c.TAG_NAMES.LINK,o),metaTags:z(c.TAG_NAMES.META,i),noscriptTags:z(c.TAG_NAMES.NOSCRIPT,u),scriptTags:z(c.TAG_NAMES.SCRIPT,M),styleTags:z(c.TAG_NAMES.STYLE,l)},g={},p={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(g[e]=n),r.length&&(p[e]=f[e].oldTags)})),t&&t(),s(e,g,p)},m=function(e){return Array.isArray(e)?e.join(""):e},I=function(e,t){void 0!==e&&document.title!==e&&(document.title=m(e)),w(c.TAG_NAMES.TITLE,t)},w=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),u=0;u<i.length;u++){var s=i[u],M=t[s]||"";n.getAttribute(s)!==M&&n.setAttribute(s,M),-1===a.indexOf(s)&&a.push(s);var l=o.indexOf(s);-1!==l&&o.splice(l,1)}for(var T=o.length-1;T>=0;T--)n.removeAttribute(o[T]);a.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},z=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},O=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},v=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=L(n,r),[o.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=O(n),o=m(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+M(o,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+M(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return L(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+M(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){j&&d(j),e.defer?j=y((function(){h(e,(function(){j=null}))})):(h(e),j=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,s=e.scriptTags,M=e.styleTags,l=e.title,T=void 0===l?"":l,N=e.titleAttributes;return{base:v(c.TAG_NAMES.BASE,t,r),bodyAttributes:v(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:v(c.ATTRIBUTE_NAMES.HTML,a,r),link:v(c.TAG_NAMES.LINK,o,r),meta:v(c.TAG_NAMES.META,i,r),noscript:v(c.TAG_NAMES.NOSCRIPT,u,r),script:v(c.TAG_NAMES.SCRIPT,s,r),style:v(c.TAG_NAMES.STYLE,M,r),title:v(c.TAG_NAMES.TITLE,{title:T,titleAttributes:N},r)}},t.reducePropsToState=function(e){return{baseTag:f([c.TAG_PROPERTIES.HREF],e),bodyAttributes:N(c.ATTRIBUTE_NAMES.BODY,e),defer:p(e,c.HELMET_PROPS.DEFER),encode:p(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:N(c.ATTRIBUTE_NAMES.HTML,e),linkTags:g(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:g(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:g(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:g(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:g(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:l(e),titleAttributes:N(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=D}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("ug1A"),a=n("Wbzz"),o=n("TJpk"),i=n.n(o),c=n("q1tI"),u=n.n(c),s=n("WNIo"),M=n.n(s),l=n("pnXN"),T=n.n(l),N=n("33yf"),f=n.n(N);function g(e){var t=e.description,n=e.lang,o=e.meta,c=e.image,s=e.keywords,l=e.title,N=c||"en"===n||"zh"===n?T.a:M.a;return u.a.createElement(a.StaticQuery,{query:p,render:function(e){var r=t||e.site.siteMetadata.description;return u.a.createElement(i.a,{htmlAttributes:{lang:n},title:l,meta:[{name:"description",content:r},{property:"og:title",content:l},{property:"og:description",content:r},{name:"og:image",content:f.a.resolve(N)},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:r},{name:"twitter:image",content:f.a.resolve(N)},{name:"google-site-verification",content:"ds9pQKiK3kjhRSHHbf5ccoG-oJggn7Lq4A8uHxM3Mkw"}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(o)})},data:r})}g.defaultProps={lang:"fi",image:null,meta:[],keywords:[]},t.a=g;var p="3128451518"},wZFJ:function(e,t,n){"use strict";var r=n("P8UN"),a=n("Wadk")(3);r(r.P+r.F*!n("h/qr")([].some,!0),"Array",{some:function(e){return a(this,e,arguments[1])}})}}]);
//# sourceMappingURL=commons-95740c2d7acb4f10e8e9.js.map