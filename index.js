(function () {
  var vm = {};

  function Script(code) {
    this.code = code;
  }

  Script.prototype.runInContext = function (context) {
  };

  Script.prototype.runInNewContext = function (sandbox) {
  };

  Script.prototype.runInThisContext = function () {
  };

  vm.Script = Script;

  vm.createContext = function (sandbox) {
  };

  vm.isContext = function (sandbox) {
  };

  vm.runInContext = function (code, sandbox) {
  };

  vm.runInDebugContext = function (code) {
  };

  vm.runInNewContext = function (code, sandbox) {
  };

  vm.runInThisContext = function (code) {
  };

  window.vm = vm;
}());
