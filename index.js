const toArray = (collection)=>{
    if(typeof(collection) === `object`) return Object.values(collection)
    return collection
}
const myEach = (collection, callback)=>{
    const array = toArray(collection)    
    for(let i=0; i<array.length; i++){
        callback(array[i])
    }
    return collection
}
const myMap = (collection, callback)=>{
    const arr = toArray(collection)
    const newArr = [] 
    for(let i = 0; i < arr.length; i++){
       newArr.push(callback(arr[i])) 
    }
    return newArr
}
const myReduce = (collection, callback, acc)=>{
    let arr = toArray(collection)
    if (!acc) {
        acc = arr[0];
        arr = arr.slice(1);
    }
    for(let i = 0; i < arr.length; i++){
        acc = callback(acc, arr[i], collection)
    }
    return acc
}
const myFind = (collection, predicate)=>{
    const arr = toArray(collection)
    for(let i=0; i < arr.length; i++){
        if(predicate(arr[i])) return arr[i]
    }
}
const myFilter = (collection, predicate)=>{
    const arr = toArray(collection)
    let resultArr = []
    for(let i = 0; i < arr.length; i++){
        if(predicate(arr[i])) resultArr.push(arr[i])
    }
    return resultArr
}
const mySize = (collection)=>{
    const arr = toArray(collection)
    return arr.length
}
const myFirst = (collection, stop=false)=>{
    return (stop) ? collection.slice(0, stop) : collection[0];
}
const myLast = (collection, start=false)=>{
    return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1];
}
const myKeys = (objs)=>{
    return Object.keys(objs)
}
const myValues = (objs)=>{
    return Object.values(objs)
}