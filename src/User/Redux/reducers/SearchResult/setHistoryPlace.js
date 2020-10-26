const initialState = {
  originCityId: "",
  originCityName: "",
  originCountryName: "",
  originCountryCode: "",
  destinationCityId: "",
  destinationCityName: "",
  destinationCountryName: "",
  destinationCountryCode: "",
};

export default (state=initialState, {type, payload}) => {
  switch (type) {
  case "SET_HISTORY_PLACE": {
    return {
      ...state,
      originCityId: payload.originCityId,
      originCityName: payload.originCityName,
      originCountryName: payload.originCountryName,
      originCountryCode: payload.originCountryCode,
      destinationCityId: payload.destinationCityId,
      destinationCityName: payload.destinationCityName,
      destinationCountryName: payload.destinationCountryName,
      destinationCountryCode: payload.destinationCountryCode,
    };
  }
  default: {
    return state;
  }
  }
};