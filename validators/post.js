
exports.createPostValidator = (req, res, next) => {
    // check for title
    req.check("title", "title is required").notEmpty();
    req.check("title", "title must be between 4 and 200 characters").isLength({
        min: 4, max: 200
    })

    // check for body
    req.check("body", "body is required").notEmpty();
    req.check("body", "body must be between 4 and 2000 characters").isLength({
        min: 4, max: 2000
    })

    // check for errors
    const errors = req.validationErrors();

    // show the first error
    if (errors) {
        const firstError = errors.map(err => err.msg)[0];
        return res.status(400).json({
            error: firstError
        })
    }

    // proceed to the next phase
    next();
}