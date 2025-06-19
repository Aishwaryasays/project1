document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the usual way

    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const passengers = document.getElementById('passengers').value;

    console.log("Departure: " + departure);
    console.log("Destination: " + destination);
    console.log("Date: " + date);
    console.log("Time: " + time);

    // Check if departure and destination are the same
    if (departure === destination) {
        alert("Departure and Destination cannot be the same!");
        return;
    }

    // Simple validation to check if fields are filled
    if (!departure || !destination || !date || !time || !passengers) {
        alert("Please fill out all fields.");
        return;
    }

    // Validate the date to ensure it's not before April 10, 2025
    const minDate = new Date('2025-04-10');
    const selectedDate = new Date(date);

    if (selectedDate < minDate) {
        alert("The selected date cannot be earlier than April 10, 2025.");
        return;
    }

    // Display booking confirmation
    const confirmationDetails = `
        Flight Booking Confirmed!<br>
        Departure City: ${departure}<br>
        Destination City: ${destination}<br>
        Flight Date: ${date}<br>
        Flight Time: ${time}<br>
        Passengers: ${passengers}
    `;
    
    document.getElementById('confirmation-details').innerHTML = confirmationDetails;
    document.getElementById('confirmation').style.display = 'block';
    document.getElementById('booking-form').reset(); // Reset form after submission
});