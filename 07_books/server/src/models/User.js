import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';


const Schema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            lowercase: true,
            index: true,
            unique: true
        },
        passwordHash: {
            type: String,
            required: true
        },
        confirmed: { 
            type: Boolean, 
            default: false
        }
    },
    {
        timestamps: true
    }
);

Schema.methods.isValidPassword = function isValidPassword(password) {
    return bcrypt.compareSync(password, this.passwordHash);
};

Schema.methods.generateJWT = function generateJWT() {
    return jwt.sign({
    email: this.email
    }, process.env.JWT_SECRET)
};

Schema.methods.generateResetPasswordToken = function generateResetPasswordToken() {
    return jwt.sign({
        _id: this.id
    }, process.env.JWT_SECRET,
        {expiresIn: "1h"}
    );
};

Schema.methods.generateResetPasswordLink = function generateResetPasswordLink() {
    return `${process.env.HOST}/reset_password/${this.generateResetPasswordToken()}`
};

Schema.methods.setPassword = function setPassword(password) {
    this.passwordHash = bcrypt.hashSync(password, 10);
};

Schema.methods.toAuthJSON = function toAuthJSON() {
    return {
        email: this.email,
        confirmed: this.confirm,
        token: this.generateJWT()
    }
};

Schema.plugin(uniqueValidator, {message: 'this email is already taken'})

export default mongoose.model( "User", Schema );

// TODO: add uniqueness and email validation
