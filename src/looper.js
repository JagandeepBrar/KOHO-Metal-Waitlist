import { SUBMIT_RATE, VARIATION } from './values';
import { errorLog, generalLog } from './logger';
import { createEmail } from './email';
import { submitReferral } from './submit';

/*
 * getVariation(): Returns a number between -VARIATION to VARIATION
 */
const getVariation = () => {
    let random = Math.random();
    let direction = Math.random() < 0.5 ? -1 : 1;
    return Math.ceil(random * direction * VARIATION);
};

/*
 * createAndSubmit(): Creates an email and submits for referral
 */
const createAndSubmit = async () => {
    let variation = parseInt(SUBMIT_RATE) + getVariation();
    let email = await createEmail();
    if (email[0] !== undefined) {
        let submit = await submitReferral(email[0]);
        if (submit[0]) {
            generalLog(
                `Referred ${email[0]} | Waiting ${variation} seconds...`,
            );
        } else {
            errorLog(
                `Referral failed (${submit[1]}) | Waiting ${variation} seconds`,
            );
        }
    } else {
        errorLog(
            `Referral failed (${email[1]}) | Waiting ${variation} seconds`,
        );
    }
    setTimeout(createAndSubmit, variation * 1000);
};

export { createAndSubmit };
