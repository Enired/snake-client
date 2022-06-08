const net = require("net");
const {IP, PORT, USERNAME} = require('./constants')

// establishes a connection with the game server
const connect = function () {
  // interpret incoming data as text
  
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT // PORT number here,
  });
  
  conn.setEncoding("utf8");

  conn.on('data', () => {
    console.log(`-----\nYOU HAVE BEEN IDLE FOR TOO LONG. YOU ARE NOW DISCONNECTED.\n-----`)
  })

  conn.on('connect', () => {
    console.log('-----\nYOU HAVE CONNECTED\n-----')
    conn.write(USERNAME)
    setInterval(()=>{
      conn.write('Say: LHL!')
    }, 5000)
  })
 
  //////////////////////
  // Testing Movement //
  //////////////////////
  // conn.on('connect', () => {
  //   setInterval(
  //     ()=>{
  //       conn.write('Move: left')
  //     },
  //     1000
  //   )
  //   setInterval(
  //     ()=>{
  //       conn.write('Move: up')
  //     }, 1500
  //   )
  // })

  return conn;
};

module.exports = {connect}