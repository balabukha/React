import axios from "axios";

export default {
    user: {
        login: credentials =>
            axios.post("/api/auth", { credentials })
                .then(res => res.data.user),
        signup: credentials =>
            axios.post("/api/users", { credentials })
                .then(res => res.data.user)
                // .then(res => console.log('res in API', res))
                // .catch(err => console.log('error in API', err))
    }
};
