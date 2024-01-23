const jwt = require('jsonwebtoken');

 exports.ensureAuth  = (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(403).send({message:`without "Authorization"`})
    } else {
        try{
            let token = req.headers.authorization.replace(/Bearer\s+/i,'')
            var payload = jwt.decode(token,`${process.env.SECRET_KEY}`)
            if(Math.floor(Date.now() / 1000) >= payload.exp){
                return res.status(401).send({message: 'Expired token'})
            }
        }catch(error){
            console.error(error);
            return res.status(401).send({message: "Invalid token!"})
        }
        req.user = payload;
        next()
    }
}

