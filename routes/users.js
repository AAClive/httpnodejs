const express=require('express');
const router = express.Router()
router.get('/',(req,res) =>{
    res.send("User");
});

router.post('/',(req,res)=>{
    console.log(req.body.firstName);
    for(let i; i<users.length; i++){
        if(users[i] == req.params.id){
            var temperrorname=users[i]
            var isVaild=False
        }
        else{
                var isVaild=true
            };
        };
    if (isVaild) {
        users.push({firstName: req.body.firstName});
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error")
        res.send(`[SYSTEM] User already made! ${temperrorname}`)
    }
    res.render("users/created", {firstName: req.body.firstName});
})
// you can get POST requests, GET, requests, DELETE requests and PUT requests with put() post() etc
router.get('/new',(req,res) =>{
    res.render("users/new", {firstName: "Clive"});
});
router
    .route("/:id")
    .get((req,res)=>{
        console.log(req.params.id);
        console.log(req.user)
        res.send(`Get User with ID ${req.params.id}`);
    })
    .put((req,res)=>{
        res.send(`PUT User with ID ${req.params.id}`);
    })
    .delete((req,res)=>{
        res.send(`Delete User with ID ${req.params.id}`);
    })

// insted of doing this...
/*
router.get('/:id',(req,res)=>{
    req.params.id;

    res.send(`Get User with ID ${req.params.id}`);
});
router.delete('/:id',(req,res)=>{
    res.send(`Delete User with ID ${req.params.id}`);
});
router.put('/:id',(req,res)=>{
    res.send(`PUT User with ID ${req.params.id}`);
});
*/

module.exports = router
//this is middleware, middleware is code that is being run between the request being sent to the server and the respones
const users=[{name: "Kyle"},{name:"Sally"}]

router.param("id",(req,res,next,id)=>{
    req.user=users[id];
    //stops it from hanging
    next();
})
function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}
