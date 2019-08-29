var myInclude;
myInclude = function (targetSource, source) {
    var result = targetSource.indexOf(source);
    return result !== -1;
};
var source = "Monday";
var targetSource = ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday"];
console.log(myInclude(targetSource, source));
