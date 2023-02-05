import jwt from "jsonwebtoken";
import { JWT_ACCESS_TOKEN_SECRET, JWT_REFRESH_TOKEN_SECRET } from "../config";


/**
 * This class handles all JWT Token services like generating access
 * and refresh token, signing tokens..
 */
class TokenService
{
    /**
     * This method uses JWT service to generate Tokens
     * i.e., Access & Refresh Token
     */
    async generateTokens(payload )
    {
        //Access Token
        const accessToken = jwt.sign(payload, JWT_ACCESS_TOKEN_SECRET, {
            expiresIn: '1h'
        })

        //Refresh Token
        const refreshToken = jwt.sign(payload, JWT_REFRESH_TOKEN_SECRET, {
            expiresIn: '1y'
        })

        return {accessToken, refreshToken};
    }

}

export default new TokenService();