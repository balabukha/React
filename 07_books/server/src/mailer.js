import nodemailer from 'nodemailer';

function setup() {
    return nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },

    })
};

export function sendResetPasswordEmail(user) {
    const transport = setup();
    const email = {
        from,
        to: user.email,
        subject: "Reset Email",
        text: `
        To reset password follow this link:
        
        ${user.generateResetPassportLink}
        `
    };
    transport.sendMail(email)
}

