const passport = require('passport');


require('./strategies/google-login')(passport)

require('./strategies/github-login')(passport)


// require('./strategies/facebook-login')(passport)

require('./strategies/jwt')(passport)