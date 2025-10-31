const User = require('../../model/User');


const FacebookStrategy = require('passport-facebook').Strategy;

module.exports= (passport) => {
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:8000/auth/facebook/callback"
  },
  async(accessToken, refreshToken, profile, cb)=>{
     try {
              const email = profile.emails?.[0]?.value;
              const picture = profile.photos?.[0]?.value;
    
              const user = await User.findOneAndUpdate(
                { facebookId: profile.id },
                {
                  name: profile.displayName,
                  email,
                  picture,
                },
                { upsert: true, new: true }
              );
    
                cb(null,user)
        } catch (error) {
                cb(error,null)
        }

    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // }
// );
  }
))
};