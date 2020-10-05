//You can add in these ways:
var hash={};
hash.January='1';
hash['Feb']='2';

//For length:
console.log(Object.keys(hash).length)

//To fetch by key:
console.log(hash['Feb']) // '2'
console.log(hash)
//To fetch all:
for(var key in hash){
    console.log('key is :' + key + ' and value is : '+ hash[key])
}

for (let [keys, value] of Object.entries(hash)) {
  console.log(keys, value)
}