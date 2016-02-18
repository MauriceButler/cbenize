
function cpsenize(fn, errorable){
    return function(){
        var args = Array.prototype.slice.call(arguments),
            callback = args.pop(),
            context = this,
            result,
            error;

        if(!errorable){
            return callback(null, fn.apply(context, args));
        }

        try {
            result = fn.apply(context, args);
        }
        catch(exception){
            error = exception;
        }

        callback(error, result);
    };
}

module.exports = cpsenize;