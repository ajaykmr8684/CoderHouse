import crypto from "crypto"
import { SMS_SID, SMS_AUTH_TOKEN, SMS_FROM_NUMBER } from "../config";
import hashService from "./hash-service";
const twilio = require("twilio")(SMS_SID, SMS_AUTH_TOKEN, {
    lazyLoading: true
});

/**
 * This class deals with OTP Service used during registration or
 * Login. This class handles generating, sending OTP through SMS service,
 * handling email OTP and Verifying the OTP recieved from client.
 */
class OtpService
{
    /**
     * This method is responsible for generating a random 4 digit number
     * which will be handled as an OTP.
     * 
     * @method
     * @returns {number} Random 4 digit OTP 
     */
    async generateOtp()
    {
        const OTP = crypto.randomInt(1000, 9999);
        return OTP;
    }

    /**
     * Method deals in sending SMS to recipient. This method uses
     * Twilio Service to send SMS.
     * 
     * @method
     * @param {number} phone - Phone number
     * @param {number} otp - OTP
     * @returns {void} Sends SMS
     */
    async sendBySMS(phone, otp)
    {
        return await twilio.messages.create(
        {
            to: phone,
            from: SMS_FROM_NUMBER,
            body: `Hey! Your CodersHouse OTP is ${otp}. OTP is valid for 2 minutes. Kindly don't share it with anyone`
        }
        )
    }

    /**
     * Method verifies the received OTP by regenerating Hash and
     * then matching the received hash from client.
     * 
     * @method
     * @param {String} hashedOtp - Received hashed OTP 
     * @param {String} data - Received data to be hashed
     * @returns 
     */
    async verifyOtp(hashedOtp, data)
    {
       let computedHash = hashService.hashOtp(data);
       return computedHash === hashedOtp;
    }

}

export default new OtpService();