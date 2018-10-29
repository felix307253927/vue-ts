var dgram = require("dgram");
var socket = dgram.createSocket("udp4");
var multicastAddr = "224.168.168.168"
socket.bind(function () {
  socket.setBroadcast(true);
  socket.setTTL(128)
});
socket.on('error', (err)=>{
  console.log('error', err);
})

socket.on("listening", ()=>{
  
})

socket.on("message", (msg, info)=>{
  console.log(`msg:${msg}`, info);
})

var message = Buffer.from("Hi");
socket.send(message, 0, message.length, 41234, "192.168.5.124", function(err, bytes) {
  console.log("err", err, bytes);
});