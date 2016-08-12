function Scope() {
    this.$$watchers = []
}
Scope.prototype.$watch = function (exp,fn) {
    
}
var scope = new Scope()
/*scope.watch('name',function () {
    
})*/
var result = (function aaa() {}).toString().match(/function\s+aaa\((\w)\)/);
console.log(result);