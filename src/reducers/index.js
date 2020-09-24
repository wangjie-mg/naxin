import {combineReducers} from "redux";
import main from "./main.js";
import org from "./org.js";
import enter from "./enter.js";
import review from "./review.js";
import orgfrom from "./orgfrom.js"
import peoplefrom from "./peoplefrom.js"
import admin from "./admin.js"
export default combineReducers({
    main,org,enter,review,orgfrom,peoplefrom,admin
})