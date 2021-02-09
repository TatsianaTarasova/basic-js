const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)){
   let str = [];
   for (let member of members){
   if (typeof member === 'string') {
   let arrMem = member.toUpperCase().trim();
   str.push(arrMem[0]);   
   }
  }return str.sort().join('');
}else{
  return false;
}
};
