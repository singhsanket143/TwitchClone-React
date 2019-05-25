import streams from "../API/Streams";

export const signIn = userid => {
  return {
    type: "SIGN_IN",
    payload: userid
  };
};

export const signOut = userid => {
  return {
    type: "SIGN_OUT",
    payload: userid
  };
};

export const createStream = formValues => {
  return async dispath => {
    streams.post("/streams", formValues);
  };
};
