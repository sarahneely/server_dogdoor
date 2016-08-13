var Cylon = require("cylon");

// Initialize the robot
Cylon.robot({
  // Change the port to the correct port for your Arduino.
  connections: {
    arduino: { adaptor: 'firmata', port: 'COM5' }
  },

  devices: {
    led: { driver: 'led', pin: 13 }
  },

  work: function(my) {
    every((2).second(), function() { //change the ammount of seconds to automate open and close in 1 function
      my.led.toggle();
    });
  }
}).start();
