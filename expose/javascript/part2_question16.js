let statistic = {
    redCars: 21, 
    blueCars: 45, 
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (let [key, value] of Object.entries(statistic)) {
    if ((key[0] == 'r') || (value % 2)) {
        console.log(value)
    }
}