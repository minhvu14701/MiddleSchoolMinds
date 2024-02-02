const redis = require("ioredis");
const client = new redis(
  "redis://:gdwxCyR7smy6DLkBX7n92PuG98h4fwkg@redis-14972.c292.ap-southeast-1-1.ec2.cloud.redislabs.com:14972"
);

client.ping(function (err, result) {
  if (err) {
    console.error("Error pinging Redis:", err);
  } else {
    console.log("Redis ping result:", result);
  }
});

client.on("connect", () => {
  console.log("Redis client connected");
});

client.on("error", (error) => {
  console.error("redis Error:", error);
});
// };
module.exports = client;
