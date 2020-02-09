// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(4))

const event = {
    name: 'Birthday Party',
    guestList: ['Uday', 'Paul', 'GPS'],
    printGuestList () {
        console.log('Guest List for - ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending the ' + this.name)
        })
    }
}

event.printGuestList()