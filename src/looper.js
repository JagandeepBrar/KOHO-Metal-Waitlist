import { SUBMIT_RATE } from './values';
import { errorLog } from './logger';
import { createEmail } from './email';
import { submitReferral } from './submit';

/*
 * loop(): Creates an interval to continously create an email and submit for referral
 */
const loop = () => {
    createAndSubmit();
    setInterval(async () => {
        createAndSubmit();
    }, SUBMIT_RATE * 1000);
};

/*
 * createAndSubmit(): Creates an email and submits for referral
 */
const createAndSubmit = async () => {
    var email = await createEmail();
    if (email !== undefined && email !== '') {
        submitReferral(email);
    } else {
        errorLog('Invalid email created');
    }
};

export { loop };
