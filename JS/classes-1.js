// Homework I

/*Create a factory function that generates person objects with the following properties: 
name, age, and job. Also, add a method called introduce that logs a message introducing the person.*/

function createPerson(name, age, job) {
  return {
    name: name,
    age: age,
    job: job,
    introduce: function () {
      console.log(
        `Hello, my name is ${this.name}. I'm ${this.age} years old and I work as a ${this.job}.`
      );
    },
  };
}

const person1 = createPerson("Sebastian", 30, "DADA Teacher");
person1.introduce();

const person2 = createPerson("Alice", 25, "Actress");
person2.introduce();

/*Create a factory function that generates bank account objects with properties accountNumber, 
accountHolder, and balance. Implement methods for depositing and withdrawing funds from the account.*/

function createBankAccount(accountNumber, accountHolder, initialBalance) {
    return {
        accountNumber: accountNumber,
        accountHolder: accountHolder,
        balance: initialBalance,
        deposit: function(amount) {
            if (amount > 0) {
                this.balance += amount;
                console.log(`Successfully deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
            } else {
                console.log("Invalid amount for deposit.");
            }
        },
        withdraw: function(amount) {
            if (amount > 0 && amount <= this.balance) {
                this.balance -= amount;
                console.log(`Successfully withdrew ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
            } else {
                console.log("Invalid amount for withdrawal or insufficient balance.");
            }
        }
    };
}


const account1 = createBankAccount("123456789", "Sirius Black", 1000);
console.log("Account Number:", account1.accountNumber);
console.log("Account Holder:", account1.accountHolder);
console.log("Balance:", account1.balance);
account1.deposit(500); 
account1.withdraw(200); 
account1.withdraw(2000);


/*Create a constructor function named Animal that takes species, name, and sound as parameters and creates animal objects.
 Include a method called makeSound that logs the sound the animal makes.*/

/*Create a constructor function named Book that takes title, author, and pages as parameters and creates book objects.
 Implement a method called read that logs a message indicating the book has been read.*/

/*Create a class called Student with a constructor that takes name, age, and grade as parameters. 
Add a method called study that logs a message indicating the student is studying.*/
