const User = require('../../model/User');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports= (passport) => {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:8000/auth/google/callback"
    }, async(accessToken, refreshToken,profile,done) =>{
         if (!profile || !profile.id) {
            return done(new Error("Invalid Google profile data"));
          }
               const email =
            profile.emails && profile.emails[0] ? profile.emails[0].value : null;
          const picture =
            profile.photos && profile.photos[0] ? profile.photos[0].value : null;
      
        try {
            const user = await User.findOneAndUpdate({
                googleId:profile?.id
            },

            {
                name: profile.displayName || "Google User",
                email:profile.emails[0].value,
                picture:profile.photos[0].value
            },

            {upsert:true,new:true, setDefaultsOnInsert: true}
        );
        done(null,user)
        } catch (error) {
            done(error,null)
        }
    }
))
}

