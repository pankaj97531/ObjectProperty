//Array , String , Map , Set, NodeList - built in iterator
function* testGenerator(){
    yield 'a';
    yield test();
    yield "c";

}
function test(){
    console.log("test functiom");
    return "test data";
}
var generator1 = testGenerator();
console.log(generator1);
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());

const arr1 = ["one","two","three","four","five"];

function* generateArr(){
    let i=0;
    yield arr1[i]
    i++;
    yield arr1[i]
    i++;
    yield arr1[i]
    i++;
    yield arr1[i]
    i++;
    yield arr1[i]
    i++;
    yield arr1[i]
}

let printArr = generateArr();
console.log(printArr.next());
console.log(printArr.next());
console.log(printArr.next());
console.log(printArr.next());
console.log(printArr.next());
console.log(printArr.next());
console.log(printArr.next());

/************custom iterator*************** */
// https://www.youtube.com/watch?v=NoUPIQobeLw
let starwar8 = {
    title : "test title",
    director : "test director",
    year : 2017,
    boxoffice : "100bn"
};
let count=-1;
let SW8={
    [Symbol.iterator]:function(){
        return {
            next : ()=>{
                count++;
                switch(count){
                    case 0 :
                        return {value :starwar8.title , done : false}
                        case 1 :
                            return {value :starwar8.director , done : false}
                            case 2 :
                        return {value :starwar8.year , done : false}
                        case 3 :
                        return {value :starwar8.boxoffice , done : false}    
                        case 4 :
                        return {value :undefined , done : false}
                        default : 
                        return {value : undefined,done : true}
                }
            }
        }
    }
}
let data = SW8[Symbol.iterator]();
console.log(data);
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());