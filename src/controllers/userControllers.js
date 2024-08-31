// Importing services
import * as UserService from "../services/users.services"
import { sendEmailAdminApproveArts, sendEmailApproveArts, sendWelcomeEmailToAdmin } from "../utils/emailTemplate";
import generateToken from "../utils/generateToken";
import { validateCreateUser, validateUpdateUser, validateForgotPassword, validateResetPassword, ValidateChangePassword } from "../validations/users.validation";
import User from "../modules/users.module"

// create a new user
export const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password
        })



        return res.status(201).json({
            status: 'success',
            message: "New User Created successfully",
            data: newUser
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: "500",
            message: "Failed to Create New User",
            error: error.message
        })
    }
} 