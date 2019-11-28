import { errorLog } from './logger';

/*
 * createEmail(): Creates a new disposable email, and returns the email address
 */
const createEmail = async () => {
    let MailBox = require('disposable-mail');
    let mailbox = new MailBox();
    return mailbox
        .getEmailAddress()
        .then((email) => {
            return email;
        })
        .catch((error) => {
            errorLog(error.message);
        });
};

export { createEmail };
