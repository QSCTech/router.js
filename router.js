// Generated by CoffeeScript 1.6.1
/*
Router.js -- 类似 Backbone 的路由实现

Copyright (C) 2013 Hexcles Ma, Zeno Zeng
Lincensed under the MIT License

主要基于 Backbone 的路由代码实现
*/

var Router;

Router = (function() {

  function Router() {
    var _this = this;
    this.routes = [];
    this.optionalParam = new RegExp('\\((.*?)\\)', 'g');
    this.namedParam = new RegExp('(\\(\\?)?:\\w+', 'g');
    this.escapeRegExp = new RegExp('[\\-{}\\[\\]+?.,\\\\\\^$|#\\s]', 'g');
    if (window.addEventListener != null) {
      window.addEventListener("hashchange", function() {
        return _this.dispatch();
      });
    } else {
      window.attachEvent("hashchange", function() {
        return _this.dispatch();
      });
    }
  }

  /*
  增加一条路由绑定
  */


  Router.prototype.add = function(arg) {
    var callback, context, elem, key, regexp, route, value, _i, _len;
    if (Object.prototype.toString.call(arg) === "[object Array]") {
      for (_i = 0, _len = arg.length; _i < _len; _i++) {
        elem = arg[_i];
        this.add(elem);
      }
      return;
    }
    if (!((arg.route != null) && (arg.callback != null))) {
      for (key in arg) {
        value = arg[key];
        this.add({
          route: key,
          callback: value
        });
      }
      return;
    }
    route = arg.route, callback = arg.callback, context = arg.context;
    if (context == null) {
      context = window;
    }
    route = route.replace(this.escapeRegExp, '\\$&');
    route = route.replace(this.optionalParam, '(?:$1)?');
    route = route.replace(this.namedParam, '([^\/]+)');
    route = route.replace(new RegExp('/', 'g'), '\\/');
    route = "^" + route + "$";
    regexp = new RegExp(route);
    return this.routes.push({
      regexp: regexp,
      callback: callback,
      context: context
    });
  };

  /*
  分发路由
  */


  Router.prototype.dispatch = function() {
    var args, path, route, _i, _len, _ref;
    path = window.location.hash.toString();
    _ref = this.routes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      route = _ref[_i];
      if (route.regexp.test(path)) {
        args = route.regexp.exec(path).slice(1);
        route.callback.apply(route.context, args);
        return;
      }
    }
  };

  return Router;

})();
