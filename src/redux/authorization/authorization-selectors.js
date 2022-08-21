export const getUserName = state => state.user.user.name;
export const getLoggedIn = state => state.user.isLoggedIn;
export const getUserError = state => state.user.error;

export const getIsFetchCurrentUser = state => state.user.isFetchCurrentUser;
