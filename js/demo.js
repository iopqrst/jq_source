var arr = ["a","b","c","d","d"];
var args = [1,2,3];

/*
$.each(arr,function(i,val){
    console.info(i + ", " + val);
},args);
*/

var callback = function(i,val){
    return i + ", " + val;
};

for(var i = 0; i < arr.length; i++) {
    console.info('-----' + callback.call(arr[i], i, arr[i]));
};