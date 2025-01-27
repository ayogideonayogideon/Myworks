document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const ticketType = document.getElementById('ticketType').value;
    const quantity = document.getElementById('quantity').value;
    const categories = Array.from(document.getElementById('Category').selectedOptions).map(option => option.text).join(', ');

    const output = document.getElementById('output');
    output.innerHTML = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Ticket Type: ${ticketType}</p>
        <p>Quantity: ${quantity}</p>
        <p>Category: ${categories}</p>
        <p>Total Price: ₦${calculatePrice(ticketType, quantity)}</p>
    `;
});

function calculatePrice(ticketType, quantity) {
    let pricePerTicket;
    switch(ticketType) {
        case 'vip':
            pricePerTicket = 1000;
            break;
        case 'student':
            pricePerTicket = 500;
            break;
        case 'standard':
        default:
            pricePerTicket = 800;
            break;
    }
    return pricePerTicket * quantity;
}
