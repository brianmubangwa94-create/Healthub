function calculateLoan() {
    let amount = parseFloat(document.getElementById('loanAmount').value);
    let rate = parseFloat(document.getElementById('interestRate').value);
    let term = parseFloat(document.getElementById('loanTerm').value);
    
    // Validation
    if (isNaN(amount) || isNaN(rate) || isNaN(term)) {
        document.getElementById('result').innerHTML = '❌ Please fill in all fields';
        return;
    }
    
    if (amount <= 0 || rate <= 0 || term <= 0) {
        document.getElementById('result').innerHTML = '❌ Please enter positive numbers only';
        return;
    }
    
    // Monthly interest rate
    let monthlyRate = (rate / 100) / 12;
    
    // Monthly payment formula
    let monthlyPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
    
    // Total payment
    let totalPayment = monthlyPayment * term;
    
    // Total interest
    let totalInterest = totalPayment - amount;
    
    // Display result
    document.getElementById('result').innerHTML = `
        <strong>Monthly Payment:</strong> $${monthlyPayment.toFixed(2)}<br>
        <strong>Total Interest Paid:</strong> $${totalInterest.toFixed(2)}<br>
        <strong>Total Payment:</strong> $${totalPayment.toFixed(2)}
    `;
}
