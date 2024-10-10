
import {
    toggleIsOnChatDetailsPageAction,
} from './reducer';

/**
 * Changes the layout type
 * @param {*} param0
 */
export const toggleIsOnChatDetailsPage = () => async (dispatch: any) => {
    try {
        dispatch(toggleIsOnChatDetailsPageAction())
    } catch (error) { }
};
