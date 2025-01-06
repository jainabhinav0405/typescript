type Event = {
    stopDefault: () => void
  }
  
  function fun(cb: <T extends Event>(event: T) => void) {
    const event: Event = {
      stopDefault: () => {
        console.error("stop default is working")
      }
    }
    cb(event);
  }
  
  fun((e) => {
    e.stopDefault()
    console.log(e)
  })
  
  fun((e) => {
    e.stopDefault()
    console.info(e)
  })
  
export{}