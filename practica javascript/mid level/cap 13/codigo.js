const serializado = '{"variable1": "pedro" , "variable2" : "juan"}';

const deserializado = JSON.parse(serializado)
console.log(deserializado.variable1)