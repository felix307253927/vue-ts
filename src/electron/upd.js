var dgram = require("dgram");

var server = dgram.createSocket("udp4");

server.on("error", function (err) {
  console.log("server error:\n" + err.stack);
  server.close();
});

server.on("message", function (msg, rinfo) {
  console.log("server got: " + msg + " from " + rinfo.address + ":" + rinfo.port);
  server.send("i am serve", rinfo.port, rinfo.address)
});

server.on("listening", function () {
  console.log(`server listening`)
});

server.bind(41234);