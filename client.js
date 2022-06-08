const net = require("net");

// establishes a connection with the game server
const connect = function () {
  // interpret incoming data as text
  
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: "50541" // PORT number here,
  });
  
  conn.setEncoding("utf8");

  conn.on('data', () => {
    console.log(`-----\nYOU HAVE BEEN IDLE FOR TOO LONG. YOU ARE NOW DISCONNECTED.\n-----`)
  })

  conn.on('connect', () => {
    console.log('-----\nYOU HAVE CONNECTED\n-----')
    conn.write('Name: DTB')
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