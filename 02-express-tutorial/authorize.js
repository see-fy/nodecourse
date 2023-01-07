const authorize = (req,res,next)=>{
    const {user} = req.query;
    if(user === 'john') {
        req.user = {name: 'John', age:30, id: '123'};
        next();
    }else{
        res.status(401).send('Unauthorized user');
    }
  
}

module.exports = authorize;