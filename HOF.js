/**
HOF functions and thier base itertions
map
reduce
filter
find
findIndex
some
every
has

sort (high difficulty)

| HOF    | Stops Early | Returns      | Core Use    |
| ------ | ----------- | ------------ | ----------- |
| map    | ❌           | new array    | transform   |
| filter | ❌           | new array    | select      |
| reduce | ❌           | single value | aggregate   |
| sort   | ❌           | same array   | order       |
| some   | ✅           | boolean      | any         |
| every  | ✅           | boolean      | all         |
| find   | ✅           | value        | first match |

*/

function mapfn(arr,fn){
  let response=[];
  for(let i =0; i<arr.length;i++){
    response.push(fn(arr[i],i,arr))
  }
  return response;
}
let array=[1,4,5];

console.log(mapfn(array,x=>x*2))


