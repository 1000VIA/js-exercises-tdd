function carSales(carsSold) {
    let totals = {};
    totals.Ford = 0;
    totals.Honda = 0;
    totals["Land Rover"] = 0;
    totals.Toyota = 0;
    carsSold.map(car => {
        if (car.make == "Ford") {
            totals.Ford += car.price;
        } else if (car.make == "Honda") {
            totals.Honda += car.price;
        } else if (car.make == "Land Rover") {
            totals["Land Rover"] += car.price;
        } else if (car.make == "Toyota") {
            totals.Toyota += car.price;
        }
    });
    return totals;
}

module.exports = carSales;

// const conFilter = carsSold.filter(car => car.make == "Ford");
// console.log("elFilter", conFilter);
// const finalmente = conFilter.reduce((contador, car) => {
//   return contador + car.price;
// }, 0);
// console.log(finalmente, "finalmente wuju");