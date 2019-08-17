function cities(citys) {
    const newArr = [];
    citys.map(element => newArr.push(`${element.city} is the capital of ${element.country}`))
    return newArr;
}

module.exports = cities;