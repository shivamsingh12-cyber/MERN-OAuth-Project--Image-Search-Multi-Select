const router = require('express').Router();
const passport= require('passport');
const authController = require('../controller/authController')

router.get('/google', 
    passport.authenticate('google', {scope:['profile', 'email']})
)

router.get('/google/callback',
    passport.authenticate('google', {session:false}),
    authController.googleCallback
)




router.get('/user',
    passport.authenticate('jwt',{session:false}),
    authController.getUser
)

router.get('/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/github/callback', 
  passport.authenticate('github', {session:false}),
    authController.githubCallback
);

router.post('/logout', (req,res) => {
    res.clearCookie('token', {httpOnly:true, sameSite:'lax'})
    res.status(200).json({message:'logged out successfully'})
})

module.exports = router;