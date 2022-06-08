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
  })

  // conn.on('connect', () => {
    
  // })

  return conn;
};

module.exports = {connect}

// console.log("Connecting ...");
// connect();