
export const FETCH_TAB_LANGUAGE = 'FETCH_TAB_LANGUAGE';
export const tabLanguange = (language) => (dispatch) => {
    dispatch({
        type:FETCH_TAB_LANGUAGE,
        data: language
    })
};
  