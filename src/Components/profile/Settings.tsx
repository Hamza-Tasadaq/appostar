import { Col, Label, Row } from 'reactstrap';
import LanguagePicker from './LanguagePicker';
import timezone from 'common/data/timezone';
import { LAYOUT_THEME_COLOR } from 'Components/constants/layout';
import { useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { changeLayoutThemeColor } from 'slices/thunks';
import UserMetaInfo from './UserMetaInfo';
import LightDark from 'Components/Common/LightDark';

const Settings = () => {
    const dispatch: any = useDispatch();

    const selectLayoutState = (state: any) => state.Layout;
    const selectLayoutProperties = createSelector(
        selectLayoutState,
        (layout) => ({
            layoutThemeColorType: layout.layoutThemeColorType,
        })
    );

    // Inside your component
    const {
        layoutThemeColorType,
    } = useSelector(selectLayoutProperties);

    return (
        <div id="teamlist">
            <Row className="team-list grid-view-filter">
                <UserMetaInfo>
                    <Col className='px-4' >
                        <LanguagePicker />
                        <div className='mb-2'>
                            <Label htmlFor="timezone" className="form-label">Time Zone</Label>
                            <select className='form-select' id='timezone' aria-label='Default select time zone'>
                                <option>Select your Timezone</option>
                                {
                                    timezone?.map(({ zone, gmt, name }) => <option value={gmt} key={gmt}>{name} {gmt}</option>)
                                }
                            </select>
                        </div>
                        <div className='mb-2'>
                            <Label htmlFor="appColor" className="form-label">App Color</Label>
                            <div className="d-flex flex-wrap gap-2">
                                <div className="form-check sidebar-setting card-radio">
                                    <input className="form-check-input" type="radio" name="data-theme-colors" id="themeColor-01"
                                        value={LAYOUT_THEME_COLOR.DEFAULT}
                                        checked={layoutThemeColorType === LAYOUT_THEME_COLOR.DEFAULT}
                                        onChange={e => {
                                            if (e.target.checked) {
                                                dispatch(changeLayoutThemeColor(e.target.value));
                                            }
                                        }} />
                                    <label className="form-check-label avatar-xs p-0" htmlFor="themeColor-01"></label>
                                </div>
                                <div className="form-check sidebar-setting card-radio">
                                    <input className="form-check-input" type="radio" name="data-theme-colors" id="themeColor-02"
                                        value={LAYOUT_THEME_COLOR.GREEN}
                                        checked={layoutThemeColorType === LAYOUT_THEME_COLOR.GREEN}
                                        onChange={e => {
                                            if (e.target.checked) {
                                                dispatch(changeLayoutThemeColor(e.target.value));
                                            }
                                        }} />
                                    <label className="form-check-label avatar-xs p-0" htmlFor="themeColor-02"></label>
                                </div>
                                <div className="form-check sidebar-setting card-radio">
                                    <input className="form-check-input" type="radio" name="data-theme-colors" id="themeColor-03"
                                        value={LAYOUT_THEME_COLOR.PURPLE}
                                        checked={layoutThemeColorType === LAYOUT_THEME_COLOR.PURPLE}
                                        onChange={e => {
                                            if (e.target.checked) {
                                                dispatch(changeLayoutThemeColor(e.target.value));
                                            }
                                        }} />
                                    <label className="form-check-label avatar-xs p-0" htmlFor="themeColor-03"></label>
                                </div>
                                <div className="form-check sidebar-setting card-radio">
                                    <input className="form-check-input" type="radio" name="data-theme-colors" id="themeColor-04"
                                        value={LAYOUT_THEME_COLOR.BLUE}
                                        checked={layoutThemeColorType === LAYOUT_THEME_COLOR.BLUE}
                                        onChange={e => {
                                            if (e.target.checked) {
                                                dispatch(changeLayoutThemeColor(e.target.value));
                                            }
                                        }} />
                                    <label className="form-check-label avatar-xs p-0" htmlFor="themeColor-04"></label>
                                </div>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <Label htmlFor="colorTheme" className="form-label">Color Theme</Label>
                            <LightDark />
                        </div>
                    </Col>
                </UserMetaInfo>
            </Row>
        </div>

    )
}

export default Settings