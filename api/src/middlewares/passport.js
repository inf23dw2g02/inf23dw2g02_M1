const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;

const GITHUB_CLIENT_ID = "Ov23lixXE8wGAvKRDiOt";
const GITHUB_CLIENT_SECRET = "539b820a6e060dc05c88636e89967c1d85f48976";
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
  
passport.use(new GitHubStrategy(passportOptions, function (accessToken, refreshToken, profile, done) {
    /* FLOW #3 : accessToken and refreshToken are self explanatory;
    profile is the json result from GitHub which contains helpful information like id, username, mail, etc...
    We can decide to use profile.id as an internal UserID;
    Here we can call the database and check if the user already exists and create a new record if not.
    */
    profile.token = accessToken;
    return done(null, profile);
}));

module.exports = passport;