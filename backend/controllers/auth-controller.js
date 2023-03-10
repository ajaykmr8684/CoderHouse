import otpService from "../services/otp-service";
import hashService from "../services/hash-service";
import userService from "../services/user-service";
import tokenService from "../services/token-service";

/**
 * This class handles all Auth controller methods like SEND OTP
 */
class AuthController
{

    /**
     * Sends an OTP to the specified recipient.
     * 
     * @method
     * @param {Request} req - The incoming request object.
     * @param {Response} res - The outgoing response object.
     */
    async sendOtp(req, res)
    {
        const { phone } = req.body;
        if(!phone)
        {
            res.status(400).json({message: 'Phone field is required'});
        }
        //Generte OTP
        const OTP = await otpService.generateOtp();
        //Hash OTP
        const ttl = 1000 * 60 * 2;
        const expires = Date.now() + ttl;
        const data = `${phone}.${OTP}.${expires}`
        const hashedOtp = hashService.hashOtp(data);
        //Send OTP
        try
        {
            //await otpService.sendBySMS(phone, OTP);
            return res.json (
                {
                    hash:  `${hashedOtp}.${expires}`,
                    phone: phone,
                    otp: OTP
                }
            )
        }
        catch (error)
        {
            console.log(error);
            res.status(500).json({message: "Message couldn't be sent."})
        }
    }

    /**
     * Verifies the recieved OTP from the client.
     * 
     * @method
     * @param {Request} req - The incoming request object.
     * @param {Response} res - The outgoing response object.
     */
    async verifyOtp(req, res)
    {
        const {phone, otp, hash} = req.body;
        if(!otp || !phone || !hash)
        {
            res.status(400).json({message: "All fields are required!"})
        }
        const [hashedOtp, expires] = hash.split('.');
        if(Date.now() > +expires)
        {
            res.status(400).json({message: "OTP expired!"})
        }

        const data = `${phone}.${otp}.${expires}`;

        //Verifies the OTP
        const isValidOtp = await otpService.verifyOtp(hashedOtp, data);
        if(!isValidOtp)
        {
            res.status(400).json({message: "Invalid OTP"})
        }

        let user;
        try
        {
            user = await userService.findUser({phone: phone});
            if(!user)
            {
                user= await userService.createUser({phone: phone});
            }
        } catch (error)
        {
            console.log(error);
            res.status(500).json({message: "Something went wrong."})
        }

        //TOKEN
        const {accessToken, refreshToken} = await tokenService.generateTokens({_id: user._id, activated: false});
        
        //Creates Cookie
        res.cookie('refreshToken', refreshToken,  {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true
        });


        //send response back
        res.json({accessToken: accessToken});
    }
}

export default new AuthController();