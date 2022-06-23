const express = require('express');

module.exports = function(app) {
    app.use((req, res, next) => {
        console.log(`[request] method = ${req.method}, url = ${req.originalUrl}`);
        next();
    });
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
};

/* app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// parse Cookie header and populate req.cookies with an object keyed by the cookie names.
app.use(cookieParser());
// returns the compression middleware
app.use(compression());
// helps you secure your Express apps by setting various HTTP headers
app.use(helmet());
// providing a Connect/Express middleware that can be used to enable CORS with various options
app.use(cors()); */