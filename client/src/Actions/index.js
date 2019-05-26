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
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post("/streams", { ...formValues, userId });
    dispatch({
      type: "CREATE_STREAM",
      payload: response.data
    });
  };
};

export const fetchStream = id => {
  return async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({
      type: "FETCH_STREAM",
      payload: response.data
    });
  };
};

export const fetchStreams = () => {
  return async dispatch => {
    const response = await streams.get("/streams");
    dispatch({
      type: "FETCH_STREAMS",
      payload: response.data
    });
  };
};

export const editStream = (id, formValues) => {
  return async dispatch => {
    const response = await streams.put(`/streams${id}`, formValues);
    dispatch({
      type: "EDIT_STREAM",
      payload: response.data
    });
  };
};

export const deleteStream = (id, formValues) => {
  return async dispatch => {
    streams.delete("/streams", formValues);
    dispatch({
      type: "DELETE_STREAM",
      payload: id
    });
  };
};
