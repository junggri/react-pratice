import axios from "axios";

const GET_USERS_PEDING = "users/GET_USERS_PEDING";
const GET_USERS_SUCCESS = "users/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "users/GET_USERS_FAILURE";

const getUsesrPending = () => ({ type: GET_USERS_PEDING });
