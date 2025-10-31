const User = require('../../model/User');

const GithubStrategy = require('passport-github2').Strategy;


module.exports= (passport) => {
passport.use(new GithubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/github/callback"
  },
  async (accessToken, refreshToken, profile, done)=>{
    try {
          const email = profile.emails?.[0]?.value || `${profile.username}@github.com`;
          const picture = profile.photos?.[0]?.value || "";

          const user = await User.findOneAndUpdate(
            { githubId: profile.id },
            {
              name: profile.displayName || profile.username,
              email,
              picture,
            },
            { upsert: true, new: true }
          );

            done(null,user)
    } catch (error) {
            done(error,null)
    }

  }
))
};