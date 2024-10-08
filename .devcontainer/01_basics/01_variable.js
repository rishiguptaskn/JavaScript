const accountId=1234//can not change
let accountEmail="rishi2404@gmail.com"//scope
var accountPassword="2233"//scope not allowed "never use var in future . it is use in early time".
/*
prefer not to use var 
because of issuse in block scope or functional scope
*/
accountCity="jaipur"//possible but not good. we can declare variable with out predefined keyword.
let accountState;//bydefault initised value is undefined if we no initialise at the time of decalration.

//accountId=2 //not allowed
accountEmail="hc@gimal.com"
accountPassword="21212122"
accountCity="noida"
console.log(accountId);
//give all data in tabular structure
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
