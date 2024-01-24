const bcrypt = require('bcrypt');

exports.encrypt = async(password)=> {
    try{
        return bcrypt.hashSync(password, 10)
    }catch(error){
        console.error(error)
        return error
    }
}

exports.checkPassword = async (password, hash) => {
    try{
        return await bcrypt.compare(password, hash)
    }catch(error){
        console.error(error)
        return error;
    }
}

