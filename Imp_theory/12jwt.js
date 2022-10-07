// https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback

//jwt: json web token

// so what happend behind the scene?

// when the user puts an https req to server from browser than server res along with jwt token

// jwt token = {header:algo,Payload:unique_id,signature:unique_id+algo+secretkey(we provide this key to server no one else can access it)}


// then jwt_signature will store in browser now when next time browser req for login then req will go with jwt_signature now backend will generate a jwt_signature on the spot and compare if both were equal then will return true else will say invalid Credential


// (secret key is like: Maggie masla special ingridient that company never discloses )

// for implementing jwt we use jsonwebtoken(external npm pakage)