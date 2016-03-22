exports.config = {
  framework: 'mocha',
  seleniumAddress: 'http://2601:641:c001:73b0:b5e0:5d5f:cef3:4444/wd/hub',
  specs: ['todo-spec.js'],
  capabilities: {
  'browserName': 'firefox' // or 'safari'
	}
};
