import axios from "axios";

export default {
    user: {
        login: credentials =>
            axios.post("/api/auth", { credentials })
                .then(res => res.data.user),
        signup: credentials =>
            axios.post("/api/users", { credentials })
                .then(res => res.data.user),
        resetPasswordRequest: email => 
            axios.post("/api/auth/reset_password_request", {email}),
        validateToken: token => axios.post("/api/auth/validate_token", {token})
                
    }
};
