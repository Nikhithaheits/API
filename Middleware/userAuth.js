const express = require("express");
const db = require("../Model");

 const testUser= db.users;


 const saveUser = async (req, res,next) => {
 
 try {
   const username = await testUser.findOne({
     where: {
       userName: req.body.userName,
     },
   });
   
   if (username) {
    res.status(409).send("Username already taken");
    console.log("the response is:"+res);

    
   }

   
   const emailcheck = await testUser.findOne({
     where: {
       email: req.body.email,
     },
   });

   
   if (emailcheck) {
    res.status(409).send("email already taken");

//     return res.json.send(409,"Authentication failed");
   }
   

   next();
 } catch (error) {
   console.log(error);
 }
};

//exporting module
 module.exports = {
 saveUser,
};