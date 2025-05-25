export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});
// This action creator is used to set the current user in the Redux store.
// It takes a user object as an argument and returns an action object with a type of 'SET_CURRENT_USER' and the user object as the payload.
// This action can be dispatched to update the current user in the Redux store.