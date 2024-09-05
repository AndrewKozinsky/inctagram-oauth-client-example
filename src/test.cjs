const crypto = require('crypto');

const state = crypto.randomBytes(16).toString("hex");
console.log(state)