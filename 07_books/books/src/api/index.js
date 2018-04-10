import axios from "axios";

export default {
    user: {
        login: credentials =>
            axios.post("/api/auth", { credentials })
                .then(res => res)

        // .catch(res => console.log('res in API', res))
                // .catch(err => console.log('error in API', err))
    }
};
