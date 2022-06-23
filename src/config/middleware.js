const express = require('express');

module.exports = function(app) {
    app.use((req, res, next) => {
        console.log(`[request] method = ${req.method}, url = ${req.originalUrl}`);
        next();
    });
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
};