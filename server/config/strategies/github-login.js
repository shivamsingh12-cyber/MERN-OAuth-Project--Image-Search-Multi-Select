const User = require("../../model/User");

const GithubStrategy = require("passport-github2").Strategy;

module.exports = (passport) => {
  passport.use(
    new GithubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "http://localhost:8000/auth/github/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          if (!profile || !profile.id) {
            console.error(" Missing GitHub ID from OAuth profile:", profile);
            return done(new Error("Invalid GitHub profile data"));
          }
          const email =
            profile.emails && profile.emails[0]
              ? profile.emails[0].value
              : null;
          const picture =
            profile.photos && profile.photos[0]
              ? profile.photos[0].value
              : null;

          const user = await User.findOneAndUpdate(
            { githubId: profile.id },
            {
              name: profile.displayName || profile.username || "GitHub User",
              email,
              picture,
            },
            { upsert: true, new: true, setDefaultsOnInsert: true  }
          );

          done(null, user);
        } catch (error) {
          done(error, null);
        }
      }
    )
  );
};
