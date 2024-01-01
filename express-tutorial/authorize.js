const authorize = (req, res, next) =>{
    // const user = req.query.user
    const { user } = req.query
    console.log(req.query)
    if( user === "murtaza"){
        req.user = { name: "murtaza", id: 1}
        next()
    }else{
        res.status(401).send("you're not authorized 😡😡😡")
    }
}
module.exports = authorize
