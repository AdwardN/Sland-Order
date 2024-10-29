export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    var navigatorOptions = {
      enableHighAccuracy: true,
      timeout: 20000,
      distanceFilter: 1,
    };
    navigator.geolocation.getCurrentPosition(
      // eslint-disable-line
      position => {
        let item = {
          type: 'Point',
          coordinates: [position.coords.longitude, position.coords.latitude],
        };
        resolve(item);
      },
      error => reject(error),
      navigatorOptions,
    );
  });
};

// Format price with point as thousands separators
export const formatPrice = (x, character = ',') => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, character);
};

// Replace line break
export const replaceLineBreakInEnd = (content = '') => {
  return content.replace(/^[\s\n]+|[\s\n]+$/, '');
};
