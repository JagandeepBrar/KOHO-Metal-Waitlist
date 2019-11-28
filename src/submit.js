import axios from 'axios';
import { REFERRAL_CODE } from './values';
import { generalLog, errorLog } from './logger';

/*
 * submitReferral(): Submits the passed in email address for referral
 */
const submitReferral = async (email) => {
    axios
        .post(
            'https://us-central1-metal-cards-waitlist.cloudfunctions.net/Referral_Waitlist',
            {
                email: email,
                already_a_koho_member: false,
                ref_code: REFERRAL_CODE,
            },
        )
        .then((response) => {
            if (response.status == 200) {
                generalLog(`Referred ${email}`);
            }
        })
        .catch((error) => {
            errorLog(error.message);
        });
};

export { submitReferral, REFERRAL_CODE };
