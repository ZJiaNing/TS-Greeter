interface IncludesFun {
    (targetSource: string[], source: string) : boolean;
}

let myInclude: IncludesFun;

myInclude = function(targetSource: string[], source: string) {
    let result = targetSource.indexOf(source);

    return result !== -1;
}

let source = "Monday";
let targetSource = ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday"];
console.log(myInclude(targetSource, source));
