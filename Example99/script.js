function BankUser(accountNumber, firstName, lastName, balance, accountType) {
    this.accountNumber = accountNumber; // 'this' refers to the new object being created
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
    this.accountType = accountType;
    this.transactions = [];
 
    this.deposit = function(amount) {
        this.balance += amount;
        this.transactions.push(`Deposit: +${amount}`);
        return `Deposited ${amount} into account. New balance: ${this.balance}`;
    };
 
    this.withdraw = function(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            this.transactions.push(`Withdrawal: -${amount}`);
            return `Withdrawn ${amount} from account. New balance: ${this.balance}`;
        } else {
            return 'Insufficient funds';
        }
    };
 
    this.getBalance = function() {
        return `Current balance: ${this.balance}`;
    };
 
    this.getTransactions = function() {
        return this.transactions;
    };
 }
 
 // Creating a new instance of BankUser
const bankUsers = [
 new BankUser('1234567890', 'Jack', 'Jones', 5000, 'Savings'),
 new BankUser('2345678901', 'Jill', 'Smith', 10000, 'Savings'),
 new BankUser('0123456789', 'Peter', 'Williams', 7000, 'Savings')
]
 // Example usage:
 function logUserByName(firstName) {
    const user = bankUsers.find(user => user.firstName === firstName);

    if (user) {
        console.log(`Account Number: ${user.accountNumber}`);
        console.log(`First Name: ${user.firstName}`);
        console.log(`Last Name: ${user.lastName}`);
        console.log(`Balance: ${user.balance}`);
        console.log(`Account Type: ${user.accountType}`);
        console.log(user.deposit(1000)); // Output: Deposited 1000 into account. New balance: 6000
        console.log(user.withdraw(2000));
        console.log(user.deposit(3000));

        //----------------------------forEach---------------------------------//
        user.getTransactions().forEach(transaction => {
            console.log(transaction);
        });
        
        //----------------------------map()----------------------------------//
            const feeRate = 0.05; // Assuming a fee rate of 5%
            const transactionsWithFee = user.transactions.map(transaction => {
            const [transactionType, amount] = transaction.split(':');
            const fee = amount * feeRate;
            const transactionWithFee = `${transactionType}: ${amount} (Fee: ${fee})`;
            return transactionWithFee;
          });
           console.log(transactionsWithFee);
          
        //---------------------------filter()---------------------------------//
            const deposits = user.transactions.filter(transaction => {
            const [transactionType, amount] = transaction.split(':');
            const transactionAmount = amount;
            return transactionAmount > 0;
          });
        
          console.log(deposits);

    } else {
        console.log('User not found');
    }
}

// Usage example
logUserByName('Jill');


 //----------------------------findIndex-------------------//
 function findUserIndexByName(name) {
    return bankUsers.findIndex(user => user.firstName === name);
  }
 
  const userIndex = findUserIndexByName('Peter');
  console.log(userIndex); 

//------------------------------reduce()------------------//
  const totalBalance = bankUsers.reduce((accumulator, user) => {
    return accumulator + user.balance;
  }, 0);
  
  console.log(`Total balance of all bank users: ${totalBalance}`);
  