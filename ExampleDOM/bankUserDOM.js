document.addEventListener("DOMContentLoaded", function() {
    const accountNumberElement = document.getElementById("accountNumber");
    const firstNameElement = document.getElementById("firstName");
    const lastNameElement = document.getElementById("lastName");
    const accountTypeElement = document.getElementById("accountType");
    const balanceElement = document.getElementById("balance");
    const amountInput = document.getElementById("amount");
    const depositBtn = document.getElementById("depositBtn");
    const withdrawBtn = document.getElementById("withdrawBtn");
    const transactionsList = document.getElementById("transactions");

    accountNumberElement.textContent = bankUser.accountNumber;
    firstNameElement.textContent = bankUser.firstName;
    lastNameElement.textContent = bankUser.lastName;
    accountTypeElement.textContent = bankUser.accountType;
    balanceElement.textContent = bankUser.getBalance();

    depositBtn.addEventListener("click", function() {
        const amount = parseFloat(amountInput.value);
        if (!isNaN(amount) && amount > 0) {
            const depositMessage = bankUser.deposit(amount);
            balanceElement.textContent = bankUser.getBalance();
            transactionsList.innerHTML += `<li>${depositMessage}</li>`;
            amountInput.value = "";
        } else {
            alert("Please enter a valid amount");
        }
    });

    withdrawBtn.addEventListener("click", function() {
        const amount = parseFloat(amountInput.value);
        if (!isNaN(amount) && amount > 0) {
            const withdrawMessage = bankUser.withdraw(amount);
            if (withdrawMessage === 'Insufficient funds') {
                alert(withdrawMessage);
            } else {
                balanceElement.textContent = bankUser.getBalance();
                transactionsList.innerHTML += `<li>${withdrawMessage}</li>`;
                amountInput.value = "";
            }
        } else {
            alert("Please enter a valid amount");
        }
    });
    const bankUsers = [bankUser, bankUser1,bankUser2]; // Add more instances if needed
    let currentCustomerIndex = 0;

    function displayNextCustomer() {
        const currentCustomer = bankUsers[currentCustomerIndex];
        document.getElementById('accountNumber').textContent = currentCustomer.accountNumber;
        document.getElementById('firstName').textContent = currentCustomer.firstName;
        document.getElementById('lastName').textContent = currentCustomer.lastName;
        document.getElementById('accountType').textContent = currentCustomer.accountType;
        document.getElementById('balance').textContent = currentCustomer.balance;
    
        const transactionsList = document.getElementById('transactions');
        transactionsList.innerHTML = ''; // Clear previous transactions
    
        currentCustomer.getTransactions().forEach(transaction => {
            const listItem = document.createElement('li');
            listItem.textContent = transaction;
            transactionsList.appendChild(listItem);
        });
    
        currentCustomerIndex = (currentCustomerIndex + 1) % bankUsers.length; // Move to the next customer, loop back to the first if reached the end
    }
    const nextCustomerBtn = document.getElementById('nextCustomerBtn');
    nextCustomerBtn.addEventListener('click', displayNextCustomer);
});
