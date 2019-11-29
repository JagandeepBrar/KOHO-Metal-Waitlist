import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { debugLog, generalLog } from './src/logger';
import { SUBMIT_RATE, REFERRAL_CODE, VARIATION } from './src/values';
import { createAndSubmit } from './src/looper';

debugLog(`Referral Code: ${REFERRAL_CODE}`);
debugLog(`Submit Rate: ${SUBMIT_RATE}s (${VARIATION}s variation)`);
generalLog(`Starting...`);
createAndSubmit();
