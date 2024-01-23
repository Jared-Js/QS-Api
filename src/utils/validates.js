const bcrypt = require('bcrypt');

 const encrypt = async(password)=> {
    try{
        return bcrypt.hashSync(password, 10)
    }catch(error){
        console.error(error)
        return error
    }
}

const checkPassowrd = async (password, hash)=> {
    try{
        return await bcrypt.compare(password, hash)
    }catch(error){
        console.error(error)
        return error
    }
}

module.exports = encrypt
module.exports = checkPassowrd