import { User } from "../models"

/**
 * This method handles User to DB services
 */
class UserService
{
    /**
     * This method find the User in Database based on a certain filter/criteria
     * 
     * @method
     * @param {Object} Filter - Filter to find user
     * @returns User
     */
    async findUser(filter)
    {
        const user = await User.findOne(filter);
        return user;
    }

    /**
     * This method creates a new User in Database
     * 
     * @method
     * @param {Object} data - User
     * @returns User
     */
    async createUser(data)
    {
        const user = await User.create(data);
        return user;
    }



}

export default new UserService();