import express from 'express';
import User from '../models/User';

const router = express.Router();

router.post("/", (req, res) => {
    const { credentials } = req.body;
    User.findOne({ email: credentials.email }).then(user => {
        if (user ) { // && user.isValidPassword(credentials.password) dont check correct!!
            res.json({user: user.toAuthJSON()})
        } else {
            res.status(400).json({ errors: { global: "Invalid credentials!!" } });
        }
    });
});


// router.post("/", async (req, res) => {
//     const { credentials } = req.body;
//     const user = await User.find();
//         console.log('!!', user);
//         if (user) {
//             console.log('--', user);
//             res.json({user: { email: user.email }})
//         } else {
//             res.status(400).json({ errors: { global: "Invalid credentials!!" } });
//         }
// });

export default router;