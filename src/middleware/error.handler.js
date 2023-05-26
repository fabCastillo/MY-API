function errorLogs(error, req, res, next) {
    console.log(`errorlogs`);
    console.error(error);
    next(error);
}

function handlerError(error, req, res, next) {
    console.log(`handlerErrors`);
    res.status(501).json({
        message: error.message,
        stack: error.stack
    });
}

module.exports = {
    errorLogs,
    handlerError
}