//**parameters:

//  facebook.com/:id -> since we have millions of users therefore we will not make different routes for different users . therefore these things are variables in routes i.e parameter

// we use parameters as it is to search data from database.

// we access it by writing eg req.params.id

//**Queries:

// this is used for data filtering
//  eg. amazon.in/?iphone=13&ram=256&color=red  (* queries always comes in routes after question mark)

// we access it by req.query