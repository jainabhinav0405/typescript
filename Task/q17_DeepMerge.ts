

function deepMerge(obj1:Object, obj2:Object){
    for (let key in obj2) {
        if(obj1.hasOwnProperty(key)){
            if(typeof obj1[key] === 'object' && typeof obj2[key] === 'object'){
                deepMerge(obj1[key], obj2[key]);
            } else{
                obj1[key] = obj2[key];
            }
        }
        else{
            obj1[key] = obj2[key];
        }
    }
    return obj1;

}

const obj3 = { a: 1, b: { c: 2 } };
const obj4 = { b: { d: 3 }, e: 4 };
const merged = deepMerge(obj3, obj4);
console.log(merged);

const obj5 = { a: 1, b: { c: 2 } };
const obj6 = { b: { c: 'string' }, d: 4 };
const merged2 = deepMerge(obj5, obj6); 
console.log(merged2);
