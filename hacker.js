const axios = require('axios');

const hack = async () => {
    const res = await axios.get("https://5000-lakshyamaha-taskmanager-84faoyoz8ak.ws-us79.gitpod.io/api/v1/tasks/");
    console.log(res.status);
}

module.exports = hack
