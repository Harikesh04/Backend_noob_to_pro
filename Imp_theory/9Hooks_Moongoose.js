//How did hooks comes in picture?

// when ever we want to perform task before storing data or after storing data in database like hashing in  jwt authentication then hooks plays an important role 

//two types

//1)pre 2)post

UserSchema.pre('save',function(){
    console.log("before saving in db",this);//here we can access things using this
})

UserSchema.post('save',function(){
    console.log("after saving in db");

})

// these are also middlewares here order matters but post middlewares always work after the pre middleware