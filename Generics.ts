function Pair<a, b>(v1: a, v2: b): [a, b] {
  return [v1, v2];
}

function demo<x,y>(k1:x,k2:y):[x,y] {
return [k1,k2];
}

console.log(Pair<number, number>(30, 40));

console.log (Pair<string,string>
("generic","example"));

console.log(Pair<boolean,boolean>(true,true));
console.log (demo<number,number>(4,16));

console.log (demo<string, number>("sri",90));

