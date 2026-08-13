const User = require("../Models/userSchema");
const sendMail = require("../utils/nodemailer");

exports.User = async (req, res) => {
    try {
        const { name, email, subject, description } = req.body;

        if (!name || !email || !description) {
            return res.status(400).json({
                success: false,
                message: "Name, email, and description are required."
            });
        }

        const finalSubject = subject && subject.trim() !== "" ? subject : "Portfolio Inquiry";

        const user = await User.create({
            name,
            email,
            subject: finalSubject,
            description
        });

        await sendMail({
            name: user.name,
            email: user.email,
            subject: user.subject,
            description: user.description
        });

        return res.status(200).json({
            success: true,
            message: "User created successfully and mail sent successfully",
            User: user
        });
    } catch (err) {
        console.error("Error in User controller:", err);
        return res.status(500).json({
            success: false,
            message: err.message || "Failed to submit contact message"
        });
    }
};