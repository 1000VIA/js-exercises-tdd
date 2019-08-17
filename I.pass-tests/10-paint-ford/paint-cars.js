function paintShop(carShop, colour) {
    const array = JSON.parse(JSON.stringify(carShop));
    array.map(car => {
        if (car.colour === 'Red') {
            car.colour = colour;
        }
    });
    return array;
};

module.exports = paintShop;