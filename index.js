import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { debugLog, generalLog } from './src/logger';
import { SUBMIT_RATE, REFERRAL_CODE } from './src/values';
import { loop } from './src/looper';

const process = () => {
    debugLog(`Referral Code: ${REFERRAL_CODE}`);
    debugLog(`Submit Rate: ${SUBMIT_RATE} seconds`);
    generalLog(`Starting...`);
    loop();
};

process();
