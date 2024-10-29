const SHOW_INDICATOR = 'SHOW_INDICATOR';
const HIDE_INDICATOR = 'HIDE_INDICATOR';

const showIndicator = backdropColor => ({
  type: SHOW_INDICATOR,
  backdropColor,
});

const hideIndicator = () => ({
  type: HIDE_INDICATOR,
});

const intialState = {
  isShowIndicator: false,
  backdropColor: '',
};

export default (state = intialState, action) => {
  switch (action.type) {
    case SHOW_INDICATOR:
      return {
        ...state,
        isShowIndicator: true,
        backdropColor: action.backdropColor,
      };
    case HIDE_INDICATOR:
      return {
        ...state,
        isShowIndicator: false,
        backdropColor: '',
      };

    default:
      return {...state};
  }
};

export {showIndicator, hideIndicator};
