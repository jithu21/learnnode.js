function say(value)
{
	console.log("The valu is "+value);
}
function execute(somefun, value)
{
	somefun(value);
}
function gupi(value1, value2)
{
	console.log(value1+" is the brother of "+value2);

}
function sendingfunction( fun, value1, value2)
{
	fun(value1,value2);
}
sendingfunction(gupi, "rammu", "shamu");
execute(say, "ramu");
say("gupta");
function neew(some, valu3)
{
	some(valu3);
}
neew(function  (word) {
	console.log(word);
}, "gupta");
