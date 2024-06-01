const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;

const GITHUB_CLIENT_ID = "Ov23lixXE8wGAvKRDiOt";
const GITHUB_CLIENT_SECRET = "68f1bcfe275f39bdb7a66c9de4a3f6cf2bc00720";
const GITHUB_CALLBACK_URL = "http://localhost:3000/auth/github/callback";

const passportOptions = {
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: GITHUB_CALLBACK_URL,
};

// Serialization and Deserialization functions (required for persistent sessions)
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});
  
passport.use(new GitHubStrategy(passportOptions, function (accessToken, profile, done) {
    // Here you can access the accessToken and refreshToken
    // Use them to make requests to GitHub API or store them for future use
    profile.token = accessToken;
    return done(null, profile);
}));

module.exports = passport;