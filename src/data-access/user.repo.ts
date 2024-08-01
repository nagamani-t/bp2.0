import {
  CREATED_DATA,
  DUPLICATE_ERROR,
  NO_DATA_FOUND,
} from "./config/responseMessage";
import {
  DUPLICATE_VALUE,
  ERROR,
  FAILURE,
  SUCCESS,
} from "./config/stringConsent";
import UserModel from "./models/user.model";

export const createProfileRepo = async (profileData) => {
  try {
    let profile = await UserModel.create(profileData);
    if (profile)
      return {
        data: profile,
        status: SUCCESS,
        msg: CREATED_DATA,
      };
    else return { status: FAILURE, msg: NO_DATA_FOUND };
  } catch (error) {
    console.error(DUPLICATE_ERROR, error);
    if (error.code === 11000) error = DUPLICATE_VALUE;
    return { data: "", status: ERROR, msg: error.toString() };
  }
};
