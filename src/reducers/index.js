import {combineReducers} from "redux";
// import user from "./user.js";
import main from "./main.js";
import org from "./org.js";
import enter from "./enter.js";
import review from "./review.js";
import orgfrom from "./orgfrom.js"
// import user from "./main.js";
export default combineReducers({
    main,org,enter,review,orgfrom
})