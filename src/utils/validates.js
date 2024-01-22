const bcrypt = require('bcrypt');

const checkPassowrd = async (password, hash)=> {
    try{
        return await bcrypt.compare(password, hash)
    }catch(error){
        console.error(error)
        return error
    }
}

module.exports = checkPassowrd