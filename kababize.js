/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps

Notes:

    the returned string should only contain lowercase letters


*/
function kebabize(str) {
  return str.split('').map((x,i)=>{
    return x == Number(x) ? x = '' : x==x.toUpperCase() && i==0 ? x=x.toLowerCase() : x==x.toUpperCase() ? `-${x.toLowerCase()}` : x
  }).join('')
}