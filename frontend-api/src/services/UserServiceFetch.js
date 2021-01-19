const USERS_REST_API_URL = 'http://localhost:8080/api/users';

class UserServiceFetch {
    getUsers(){
        return fetch(USERS_REST_API_URL).then((res => res.json()));
    }
}

export default new UserServiceFetch();