 
2.Solution question for # 2
# Explain why do we want sometimes to use setImmediate instead of using setTimeout?
  => setImmediate() is a method available in Node.js which is used to schedule the immediate execution of callback after I/O events callbacks and before setTimeout and setInterval .
  => setTimeout() is used to schedule execution of a one-time callback after a delay of some time in milliseconds.
 
# Explain the difference between process.nextTick and setImmediate?
  => process.nextTick(): puts its callback at the front of the event queue. It will execute after the code currently being executed but before any I/O events or timers or check queue.
  => setImmediate, which is callback that is placed in the check queue of the next cycle of the event loop.
# Name 10 global modules/methods available in Node environment.
  ## events               
  ## http                  
  ## https                 
  ## module                                                 
  ## parseInt              
  ## path        
  ## global.require              
  ##  setInterval
  ## setImmediate         
  ## setTimeout
  ## fs

