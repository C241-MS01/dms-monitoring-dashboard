import { ThunkAction } from "redux-thunk";
import { RootState } from "slices";
import { Action, Dispatch } from "redux";
import { postFakeRegister } from "helpers/fakebackend_helper";
import { registerFailed, registerSuccess, resetRegister } from "./reducer";

interface User {
    email: string;
    username: string;
    password: string;
}

