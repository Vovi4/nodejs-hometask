const responseMiddleware = (req, res, next) => {
   // TODO: Implement middleware that returns result of the query

   if (res.data) {
    return res.status(200).json(res.data)
   }
   if (res.err) {
     return res.status(404).json({
        error: true,
        message: 'Can not find user'
     })
   }
    next();
}

exports.responseMiddleware = responseMiddleware;