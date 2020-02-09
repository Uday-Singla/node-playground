setTimeout(() => {
    console.log("Two seconds are up")
}, 2000)

const geocode = (location, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }

        callback(data)
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data) 
})