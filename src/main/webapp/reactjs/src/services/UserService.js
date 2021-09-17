import axios from 'axios'

const USERS_REST_API_URL='http://localhost:8080/hello';

class AnimeService{
    getGreeting(){
        return axios.get(USERS_REST_API_URL);
    }
}

export default new AnimeService();

