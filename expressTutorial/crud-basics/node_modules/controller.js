export const usernameController = (req,res)=>{
    const username = req.params.username
    res.send(`welcome ${username}`)
}

export const searchController = (req,res)=>{
    const keyword = req.query.keyword
    res.send(`searching keyword ${keyword}`)
} 

export const userLogin = (req,res)=>{
    res.send("This is the login page!")
    
}
export const userSignup = (req,res)=>{
    res.send("This is the signup page!")

}