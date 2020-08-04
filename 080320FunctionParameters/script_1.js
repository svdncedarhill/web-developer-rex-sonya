//function definition with default values to parameters
function addNum(x=0, y=0, z=0)
{
  let s = x+y+z;
  console.log(`${x}, ${y}, ${z} || Sum=${s}`); 
}

//function calling
addNum(10,20,30);

//function calling with more number of aruments
addNum(1,2,3,4);

//function calling with less number of arguments
addNum(5,3);
addNum();