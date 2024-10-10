import { useEffect } from 'react';

//constants
import { LAYOUT_MODE_TYPES } from "../../Components/constants/layout";
import { useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { changeLayoutMode } from 'slices/thunks';
import { Input, Label } from 'reactstrap';

const LightDark = () => {
    const dispatch: any = useDispatch();

    const selectLayoutState = (state: any) => state.Layout;
    const selectLayoutProperties = createSelector(
        selectLayoutState,
        (layout) => ({
            layoutModeType: layout.layoutModeType,
        })
    );
    // Inside your component
    const {
        layoutModeType,
    } = useSelector(selectLayoutProperties);

    /*
    layout settings
    */
    useEffect(() => {
        if (
            layoutModeType
        ) {
            window.dispatchEvent(new Event('resize'));
            dispatch(changeLayoutMode(layoutModeType));
        }
    }, [
        layoutModeType,
        dispatch]);
    /*
    call dark/light mode
    */
    const onChangeLayoutMode = (value: any) => {
        if (changeLayoutMode) {
            dispatch(changeLayoutMode(value));
        }
    };


    const mode = layoutModeType === LAYOUT_MODE_TYPES['DARKMODE'] ? LAYOUT_MODE_TYPES['LIGHTMODE'] : LAYOUT_MODE_TYPES['DARKMODE'];

    return (
        <div className="form-check form-switch form-switch-md ">
            <Input onChange={() => {
                onChangeLayoutMode(mode)
            }} className='form-check-input' type='checkbox' role='colorThemeSwitch' />
            <Label className='form-check-label' for={"colorThemeSwitch"}>
                {mode?.toLocaleUpperCase()}
            </Label>
        </div>
    );
};

export default LightDark;