import axios from 'axios';
import { REFERRAL_CODE } from './values';

/*
 * submitReferral(): Submits the passed in email address for referral
 */
const submitReferral = async (email) => {
    return axios
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
                return [true, undefined];
            }
        })
        .catch((error) => {
            return [false, error.message];
        });
};

export { submitReferral };
