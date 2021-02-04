const express = require("express");
const router = express.Router();
const routes = require("../routes");
const controller = require("../controllers/pageController");

router.use((req,res,next)=>{
    res.locals.user = null;
    res.locals.followerCount = 0;
    res.locals.followingCount = 0;
    res.locals.followerIdList = [];
    next();
})

router.get(routes.profile,controller.profile);
router.get(routes.join,controller.join);
router.get(routes.home,controller.home)

module.exports = router;