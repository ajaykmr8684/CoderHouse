import crypto from "crypto"
import {HASH_SECRET} from "../config"

/**
 * This Class deals with Hashing information
 */
class HashService
{
    /**
     * This method handles hashing of the random generted OTP
     * 
     * @method
     * @param {Number} data - OTP
     * @returns Hashed OTP
     */
    hashOtp(data)
    {
        return crypto
        .createHmac('sha256', HASH_SECRET)
        .update(data)
        .digest('hex')
    }

}

export default new HashService();