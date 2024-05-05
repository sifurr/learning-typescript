{
    // access modifiers

    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number; // conventionally _ is used to denote private property
        protected bankStatement: string; // only child class can access it

        constructor(id: number, name: string, balance: number, bankStatement: string) {
            this.id = id;
            this.name = name;
            this._balance = balance;
            this.bankStatement = bankStatement;
        }

        public deposit(amount: number): void {
            this._balance = this._balance + amount;
        }

        public getBalance(): void {
            console.log(this._balance);
        }
    }

    const goriberAccount = new BankAccount(11, "Goribullah", 99, "1 bochhore 100tk joma hoyechhe");

    goriberAccount.deposit(1);
    goriberAccount.getBalance();


    class StudentAccount extends BankAccount{
        constructor(id: number, name: string, balance: number, bankStatement: string) {
            super(id, name, balance, bankStatement);   
        }
        
        public amarBankStatement(){
            console.log(`Manoniyo ${this.name}, apnar 1 bochhorer statement: ${this.bankStatement}`);
        }
    }

    const studentAccount = new StudentAccount(69, "Chhatropoti", 11, "1 bochhore apni kheye deye 11 taka rekhechen.");
    
    studentAccount.amarBankStatement();

}