document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const ticketType = document.getElementById('ticketType').value;
    const quantity = document.getElementById('quantity').value;
    const categories = Array.from(document.getElementById('Category').selectedOptions).map(option => option.text).join(', ');

    // Calculate total price
    const totalPrice = calculatePrice(ticketType, quantity);

    // Update output section
    const output = document.getElementById('output');
    output.innerHTML = `
        <h3>Thank you for registering! Here are your registration details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Ticket Type:</strong> ${ticketType}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Category:</strong> ${categories}</p>
        <p><strong>Total Price:</strong> ₦${totalPrice.toLocaleString()}</p>
    `;

    // Show output section
    output.classList.remove('hidden');
});

function calculatePrice(ticketType, quantity) {
    let pricePerTicket;
    switch(ticketType) {
        case 'vip':
            pricePerTicket = 15000; // VIP ticket price in ₦
            break;
        case 'student':
            pricePerTicket = 5000; // Student ticket price in ₦
            break;
        case 'standard':
        default:
            pricePerTicket = 8000; // Standard ticket price in ₦
            break;
    }
    return pricePerTicket * quantity;
}