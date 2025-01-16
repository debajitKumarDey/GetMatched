
const adminAuth = (req,res,next)=>{
    const token ='xyz'
    const authorization = token === 'xyz'
    if(!authorization){
        res.status(404).send('You are not a Admin')
    }else{
        next()
    }
}
const userAuth= (req,res,next)=>{
    const token ='abcd'
    const authorization = token ==='abc'
    if(!authorization){
        res.status(404).send('You are not a valid user')
    }
    else{
        next()
    }
}
module.exports={adminAuth,userAuth}