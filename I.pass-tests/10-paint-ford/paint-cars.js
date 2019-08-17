function paintShop(carShop, colour) {
    const newObject = [];
    carShop.map(car => {
        newObject.push(car)
        if (car.colour === 'Pink' || car.colour === 'Red') {
            car.colour = colour;
        } else {
            car.colour = car;
        }
    });
    return newObject;
};
// paintShop(cars, 'Pink')
module.exports = paintShop;