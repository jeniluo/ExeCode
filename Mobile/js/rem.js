var user = {
    count: 1,
    getCount: () => {
        return this.count;
    }
}
var func = user.getCount;
console.log(func());

var f = function g() {
    return 23;
}
console.log(typeof g());