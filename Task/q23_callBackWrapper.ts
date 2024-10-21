type Event = {
    stopDefault: () => void
}

function fun<T extends Event>(cb: (event: T) => void) {
  
}

fun((e) => {
    e.stopDefault()
    console.log(e)
})

fun((e) => {
    e.stopDefault()
    console.info(e)
})
