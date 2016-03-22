exports.config = {
  framework: 'mocha',
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  seleniumAddress: 'http://192.168.0.26:4444/wd/hub',
  specs: ['todo-spec.js'],
  capabilities: {
  'browserName': 'firefox' // or 'safari'
	}
};
