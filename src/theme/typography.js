const fontPath = "../assets/fonts/ey-interstate";
const fontWeight = {
  light: 300,
  normal: 400,
  bold: 700,
  black: 900
};

export const EYInterstateLight = {
  fontFamily: 'EYInterstate',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: fontWeight.light,
  src: `
    local('EYInterstate'),
    local('EYInterstate-Light'),
    url('${fontPath}/EYInterstate-Light.woff2') format('woff2'),
    url('${fontPath}/EYInterstate-Light.woff') format('woff'),
    url('${fontPath}/EYInterstate-Light.ttf') format('truetype')
  `
};

export const EYInterstateLightItalic = {
  fontFamily: 'EYInterstate',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: fontWeight.light,
  src: `
    local('EYInterstate'),
    local('EYInterstate-LightItalic'),
    url('${fontPath}/EYInterstate-LightItalic.woff') format('woff'),
    url('${fontPath}/EYInterstate-LightItalic.ttf') format('truetype')
  `
};

export const EYInterstateRegular = {
  fontFamily: 'EYInterstate',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: fontWeight.normal,
  src: `
    local('EYInterstate'),
    local('EYInterstate-Regular'),
    url('${fontPath}/EYInterstate-Regular.woff2') format('woff2'),
    url('${fontPath}/EYInterstate-Regular.woff') format('woff'),
    url('${fontPath}/EYInterstate-Regular.ttf') format('truetype')
  `
};

export const EYInterstateItalic = {
  fontFamily: 'EYInterstate',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: fontWeight.normal,
  src: `
    local('EYInterstate'),
    local('EYInterstate-Italic'),
    url('${fontPath}/EYInterstate-Italic.ttf') format('truetype')
  `
};

export const EYInterstateBold = {
  fontFamily: 'EYInterstate',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: fontWeight.bold,
  src: `
    local('EYInterstate'),
    local('EYInterstate-Bold'),
    url('${fontPath}/EYInterstate-Bold.woff2') format('woff2'),
    url('${fontPath}/EYInterstate-Bold.woff') format('woff'),
    url('${fontPath}/EYInterstate-Bold.ttf') format('truetype')
  `
};

export const EYInterstateBoldItalic = {
  fontFamily: 'EYInterstate',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: fontWeight.bold,
  src: `
    local('EYInterstate'),
    local('EYInterstate-BoldItalic'),
    url('${fontPath}/EYInterstate-BoldItalic.ttf') format('truetype')
  `
};

export const EYInterstateBlack = {
  fontFamily: 'EYInterstate',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: fontWeight.black,
  src: `
    local('EYInterstate'),
    local('EYInterstate-Black'),
    url('${fontPath}/EYInterstate-Black.woff') format('woff')
  `
};