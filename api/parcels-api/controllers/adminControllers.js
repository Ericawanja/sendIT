const createParcel = (req,res)=>{
    console.log(req.info);
    res.status(200).json({message:"succss"})

}

const updateParcel = (req,res)=>{

}

module.exports = {
    createParcel,
    updateParcel
}