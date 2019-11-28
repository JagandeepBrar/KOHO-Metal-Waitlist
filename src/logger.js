/*
 * errorLog(): Logs an error message with a colored prefix
 */
const errorLog = (msg) => {
    console.error('\x1b[1m\x1b[31m[ERROR]  \x1b[0m %s', msg);
};

/*
 * generalLog(): Logs a message with a colored prefix
 */
const generalLog = (msg) => {
    console.log('\x1b[1m[GENERAL]\x1b[0m %s', msg);
};

/*
 * debugLog(): Logs a debug message with a colored prefix, only visible in a development environment
 */
const debugLog = (msg) => {
    if (process.env.NODE_ENV == 'development') {
        console.log('\x1b[1m\x1b[35m[DEBUG]  \x1b[0m %s', msg);
    }
};

export { errorLog, generalLog, debugLog };
