//Middleware: when we put a https req from browser to the server than a req comes from the server between req and res some task is performed these works are done by middleware

// all  functions that we see in our backend is middleware functions

// Types of middleware

// 1.Global
// 1)app.use(api/v1/auth)-> this is global middleware that is always in use

// 2.specific 
// 1)app.get("/",(req,res){ // this is specific middlware that works only for specific task 

// })

//Benifits

// 1)error handling
// 2)logger functions
// 3)app.use(express.json())// this is an important middleware that is used to  convert all the taken data from frontend from json to js objects format.

//****HOW DO WE USE MIDDLEWARE FUNCTION */

function middleware( req,res,next){
    /*
    here we write code that he have to perform task from our current middleware

    */
   next();//after that  we call next ITs use is to call the next middleware
   //****IMP thing -> when we write this next then our cur req,res will carry forward to the next middleware function */
}