USERNAME =  process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
  
exports.capabilities = {
    "platformName" : "android",
    "appium:deviceName" : "Google Pixel 6 Pro",
    "browserName" : "chrome",
    "appium:osVersion": "12.0",
    "appium:app" : "bs://a66377d72f9d26848b718fc98fea9ddfbf9b1694",
    'bstack:options' : {
        "projectName" : "BStack Demo",
        "buildName" : "browserstack-build-1",
        "sessionName" : "BStack single mocha-js",
        "userName" : USERNAME,
        "accessKey" : ACCESS_KEY,
        "debug" : true
    }
};
