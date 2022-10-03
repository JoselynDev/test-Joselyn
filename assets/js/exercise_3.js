const passengers = [
    {
        id: 1,
        passengerName: "Freddie Mercury",
        isVegetarianOrVegan: false,
        connectedFlights: 2,
    },
    {
        id: 2,
        passengerName: "Amy Winehouse",
        isVegetarianOrVegan: true,
        connectedFlights: 4,
    },
    {
        id: 3,
        passengerName: "Kurt Cobain",
        isVegetarianOrVegan: true,
        connectedFlights: 3,
    },
    {
        id: 3,
        passengerName: "Michael Jackson",
        isVegetarianOrVegan: true,
        connectedFlights: 1,
    },
];

function orderAscendancyPassengers(listPassengers) {
    listPassengers.sort(((a, b) => a.connectedFlights - b.connectedFlights));
    console.log(listPassengers);
}

orderAscendancyPassengers(passengers);

function orderDescendantPassengers(listPassengers) {
    listPassengers.sort();
    listPassengers.sort((a, b) => {
        return b.connectedFlights - a.connectedFlights;
    });
    console.log(listPassengers);
}

orderDescendantPassengers(passengers);
