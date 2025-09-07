const local = "http://localhost:5000/";
const production = "https://ems-backend-workingg-app.onrender.com";

const baseURL = window.location.origin.includes("localhost") ? local : production;

const apis = () => {
    return {
        registerUser: `${baseURL}user/register`,
        loginUser: `${baseURL}user/login`,
        getUserDetails: `${baseURL}user/getUserDetails`,
        logout: `${baseURL}user/logout`,
        getTasks: `${baseURL}task/get`,
        acceptTask: `${baseURL}task/acceptTask`,
        markAsCompleted: `${baseURL}task/markCompleted`,
        markAsFailed: `${baseURL}task/markFailed`,
        createTask: `${baseURL}task/create`,
        all_employees: `${baseURL}emp/employees`
    };
};

export default apis;
