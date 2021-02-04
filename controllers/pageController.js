
const profile = (req,res)=>{
    res.render("profile",{title: "내정보 - NodeBird"})
}

const join = (req,res)=>{
    res.render("join",{title: "회원가입 - NodeBird"})
}

const home = (req,res)=>{
    const twits = [];
    res.render("main",{
        title:"NodeBird",
        twits
    })
}
const controller = { 
    home,
    profile,
    join,
}
module.exports = controller