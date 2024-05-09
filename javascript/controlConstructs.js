///condition control statements
// if control statements

// if(condition)
// {
//     //block of code
// }

// var a = 10 
//  var b = 20
//  if(a > b)
//  {
//     console.log("The condistion is true")
//  }
 
// if-else control stmt

// if(condition)
// {
//     //block of the code
// }
// else
// {
 //   //blocl of the code
  // }

// var a = 10
// var b = 20
// if(a < b)
// {
//     console.log("the condiation is true")
// }
// else
// {
//     console.log("the condiation is false")
// }

////if-else-if-else control stmt

//  if(condiation1)
//  {
//      //block of the code
//  }
//  else if(condiation2)
//  {
//         //block of the code
// }
// else if(condiation3)
// {
//     //block of the code
// }
// else
// {
//     //block of the code
// }

// var a = 1
// var b = 2
//  var c = 3
//  if(a > b )
//  {
//     console.log("a is greater than b")
//  }
//  else if (b < c)
//  {
//     console.log("b is less than c")

//  }
//  else if(a < c)
//  {
//     console.log("a i less than c")
//  }
//  else
//  {
//     console.log("all the condiation are false")
//  }

 ////Switch control stmt

//  switch(expression)
//  {
//     //case 1:
//       //statement 1
//     //case 2:
//       //statement 2
//     //case 3:
//       //statement 3
//     //default:
//       //default statement
//  }

// var a = "black" 

// switch(a)
// {
//     case "Red":
//        console.log("the red colour is choose")
//        break
//     case "black":
//         console.log("the black colour is choose")
//         break
//     case "yellow":
//          console.log("the yellow colour is choose")
//          break
//     default :
//          console.log("the default colour is pink")
// }


//looping control constructs
//while loop

// while(condiation)
// {
//     //block of the code
// }

// //do- while
// do
// {
//     //block of code
// }
// while(condiation)

// var count = 1
// while (count<=10)
// {
//     console.log(count)
//     count++
// }

// var count = 1
// do
// {
//     console.log(count)
//     count++
// }
// while (count<=10)

//for loop
// for(declaration;condiation;incrementation)
// {
//   //block of the code
// }

// for(var i =1; i<=10; i++)
// {
//   console.log(i)
// }

//for of.........Array(Iterable)
//for in.........objects(non-iterable)
var ar=[1,2,3,4,5,]
for (  let res of ar  )
{
  console.log(res)
}

//for-in
var obj = {
  fname:"saif",
  lname:"saifu"
}
for(let res1 in obj)
{
  console.log(obj[res1])
}
