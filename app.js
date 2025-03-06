const buses = [
    { busNumber: '13', from: 'Shivajinagara Bus Station', to: 'Banashankari TTMC' },
    { busNumber: '18', from: 'Kempegowda Bus Station', to: 'Marenahalli Bus Station' },
    { busNumber: '25A', from: 'Kempegowda Bus Station', to: 'Banashankari TTMC' },
    { busNumber: '252F', from: 'Bangalore', to: 'Majestic' },
    { busNumber: '401K', from: 'Bangalore', to: 'Yelahanka' },
    { busNumber: '375D', from: 'Kengeri', to: 'Banashankari' },
    { busNumber: '333E', from: 'Brookefield', to: 'Kempegowda Bus Terminus' }
];

function displayBuses(filteredBuses = buses) {
    const busesContainer = document.getElementById('buses');
    busesContainer.innerHTML = '';

    filteredBuses.forEach(bus => {
        const busCard = document.createElement('div');
        busCard.className = 'bus-card';
        busCard.innerHTML = `
            <h3>Bus Number: ${bus.busNumber}</h3>
            <p><strong>From:</strong> ${bus.from}</p>
            <p><strong>To:</strong> ${bus.to}</p>
            <button class="book-now" onclick="bookBus('${bus.busNumber}')">Book Now</button>
        `;
        busesContainer.appendChild(busCard);
    });
}

function filterBuses() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;

    const filteredBuses = buses.filter(bus => 
        (from === '' || bus.from === from) && 
        (to === '' || bus.to === to)
    );

    displayBuses(filteredBuses);
}

function bookBus(busNumber) {
    window.location.href = `booknow.html?busNumber=${busNumber}`;
}

function logout() {
    alert('Logging out...');
    window.location.href = 'index.html';
}

window.onload = displayBuses;
