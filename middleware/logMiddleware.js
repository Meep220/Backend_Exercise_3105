const logDetails = (req,res,next) =>{
    const curTime = new Date().toISOString();
    console.log(`[${curTime}] ${req.method} ${req.url}`)
    next()
}

module.exports = logDetails