import { createSlice } from "@reduxjs/toolkit";
//constants
import {
  LAYOUT_TYPES,
  LAYOUT_THEME,
  LAYOUT_THEME_COLOR,
  LAYOUT_MODE_TYPES,
  LAYOUT_SIDEBAR_TYPES,
  LAYOUT_WIDTH_TYPES,
  LAYOUT_POSITION_TYPES,
  LAYOUT_TOPBAR_THEME_TYPES,
  LEFT_SIDEBAR_SIZE_TYPES,
  LEFT_SIDEBAR_VIEW_TYPES,
  LEFT_SIDEBAR_IMAGE_TYPES,
  PERLOADER_TYPES,
  SIDEBAR_VISIBILITY_TYPES
} from "../../Components/constants/layout"


export interface LayoutState {
  layoutType: LAYOUT_TYPES.VERTICAL | LAYOUT_TYPES.TWOCOLUMN;
  layoutThemeType: LAYOUT_THEME.DEFAULT | LAYOUT_THEME.CORPORATE | LAYOUT_THEME.CREATIVE | LAYOUT_THEME.CLASSIC | LAYOUT_THEME.GALAXY | LAYOUT_THEME.INTERACTIVE | LAYOUT_THEME.MATERIAL | LAYOUT_THEME.MINIMAL | LAYOUT_THEME.MODERN | LAYOUT_THEME.SAAS | LAYOUT_THEME.VINTAGE;
  layoutThemeColorType: LAYOUT_THEME_COLOR.DEFAULT | LAYOUT_THEME_COLOR.GREEN | LAYOUT_THEME_COLOR.PURPLE | LAYOUT_THEME_COLOR.BLUE;
  layoutModeType: LAYOUT_MODE_TYPES.LIGHTMODE | LAYOUT_MODE_TYPES.DARKMODE;
  leftSidebarType: LAYOUT_SIDEBAR_TYPES.LIGHT | LAYOUT_SIDEBAR_TYPES.DARK | LAYOUT_SIDEBAR_TYPES.GRADIENT | LAYOUT_SIDEBAR_TYPES.GRADIENT_2 | LAYOUT_SIDEBAR_TYPES.GRADIENT_3 | LAYOUT_SIDEBAR_TYPES.GRADIENT_4;
  layoutWidthType: LAYOUT_WIDTH_TYPES.FLUID | LAYOUT_WIDTH_TYPES.BOXED;
  layoutPositionType: LAYOUT_POSITION_TYPES.FIXED | LAYOUT_POSITION_TYPES.SCROLLABLE;
  topbarThemeType: LAYOUT_TOPBAR_THEME_TYPES.LIGHT | LAYOUT_TOPBAR_THEME_TYPES.DARK;
  leftsidbarSizeType: LEFT_SIDEBAR_SIZE_TYPES.DEFAULT | LEFT_SIDEBAR_SIZE_TYPES.COMPACT | LEFT_SIDEBAR_SIZE_TYPES.SMALLICON | LEFT_SIDEBAR_SIZE_TYPES.SMALLHOVER;
  leftSidebarViewType: LEFT_SIDEBAR_VIEW_TYPES.DEFAULT | LEFT_SIDEBAR_VIEW_TYPES.DETACHED;
  leftSidebarImageType: LEFT_SIDEBAR_IMAGE_TYPES.NONE | LEFT_SIDEBAR_IMAGE_TYPES.IMG1 | LEFT_SIDEBAR_IMAGE_TYPES.IMG2 | LEFT_SIDEBAR_IMAGE_TYPES.IMG3 | LEFT_SIDEBAR_IMAGE_TYPES.IMG4;
  preloader: PERLOADER_TYPES.ENABLE | PERLOADER_TYPES.DISABLE;
  sidebarVisibilitytype: SIDEBAR_VISIBILITY_TYPES.SHOW | SIDEBAR_VISIBILITY_TYPES.HIDDEN;
}

export const initialState: LayoutState = {
  layoutType: LAYOUT_TYPES.TWOCOLUMN,
  layoutThemeType: LAYOUT_THEME.DEFAULT,
  layoutThemeColorType: LAYOUT_THEME_COLOR.DEFAULT,
  layoutModeType: LAYOUT_MODE_TYPES.LIGHTMODE,
  leftSidebarType: LAYOUT_SIDEBAR_TYPES.DARK,
  layoutWidthType: LAYOUT_WIDTH_TYPES.FLUID,
  layoutPositionType: LAYOUT_POSITION_TYPES.FIXED,
  topbarThemeType: LAYOUT_TOPBAR_THEME_TYPES.LIGHT,
  leftsidbarSizeType: LEFT_SIDEBAR_SIZE_TYPES.DEFAULT,
  leftSidebarViewType: LEFT_SIDEBAR_VIEW_TYPES.DEFAULT,
  leftSidebarImageType: LEFT_SIDEBAR_IMAGE_TYPES.NONE,
  preloader: PERLOADER_TYPES.DISABLE,
  sidebarVisibilitytype: SIDEBAR_VISIBILITY_TYPES.SHOW
};

const LayoutSlice = createSlice({
  name: 'LayoutSlice',
  initialState,
  reducers: {
    changeLayoutAction(state: any, action: any) {
      state.layoutType = action.payload;
    },
    changeLayoutThemeAction(state: any, action: any) {
      state.layoutThemeType = action.payload;
    },
    changeLayoutThemeColorAction(state: any, action: any) {
      state.layoutThemeColorType = action.payload;
    },
    changeLayoutModeAction(state: any, action: any) {
      state.layoutModeType = action.payload;
    },
    changeSidebarThemeAction(state: any, action: any) {
      state.leftSidebarType = action.payload;
    },
    changeLayoutWidthAction(state: any, action: any) {
      state.layoutWidthType = action.payload;
    },
    changeLayoutPositionAction(state: any, action: any) {
      state.layoutPositionType = action.payload;
    },
    changeTopbarThemeAction(state: any, action: any) {
      state.topbarThemeType = action.payload;
    },
    changeLeftsidebarSizeTypeAction(state: any, action: any) {
      state.leftsidbarSizeType = action.payload;
    },
    changeLeftsidebarViewTypeAction(state: any, action: any) {
      state.leftSidebarViewType = action.payload;
    },
    changeSidebarImageTypeAction(state: any, action: any) {
      state.leftSidebarImageType = action.payload;
    },
    changePreLoaderAction(state: any, action: any) {
      state.preloader = action.payload;
    },
    changeSidebarVisibilityAction(state: any, action: any) {
      state.sidebarVisibilitytype = action.payload;
    },
  }
});

export const {
  changeLayoutAction,
  changeLayoutThemeAction,
  changeLayoutThemeColorAction,
  changeLayoutModeAction,
  changeSidebarThemeAction,
  changeLayoutWidthAction,
  changeLayoutPositionAction,
  changeTopbarThemeAction,
  changeLeftsidebarSizeTypeAction,
  changeLeftsidebarViewTypeAction,
  changeSidebarImageTypeAction,
  changePreLoaderAction,
  changeSidebarVisibilityAction
} = LayoutSlice.actions;

export default LayoutSlice.reducer;