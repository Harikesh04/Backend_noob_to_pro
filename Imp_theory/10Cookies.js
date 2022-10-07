// cookies are use to store data in users browser

// so whathappen behind the scene is when user put req from browser to server for login then a cookie will generate in server which will come along with response .

// Now again if user will after some time then he will be logged in because of that cookie , when user browse the website and put req to server then req will go with the cookie which tolds the server that user is logged in give user acces to details what he is asking .

//we use cookie-parser pacakage to use this

//Usage

function setcookie(req,res){
    // res.cookie('cookie-name',value,{cookie-age,httsOnly:true(for security now we cannot access cookie from frontend by document.cookie)})
    res.cookie('isLoggedIn',true,{maxAge:1000*60*60*24,httsOnly:true});
    res.send("cookie has been send");
}