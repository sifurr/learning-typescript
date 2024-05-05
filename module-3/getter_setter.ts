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

        // without getter
        // public getBalance(): void {
        //     console.log(this._balance);
        // }

        // getter
        get balance() {
            return this._balance;
        }

        // without setter
        // public deposit(amount: number): void {
        //     this._balance = this._balance + amount;
        // }

        // setter
        set deposit(amount: number)
        {
            this._balance = this._balance + amount;
        }
    }

    const goriberAccount = new BankAccount(11, "Goribullah", 99, "1 bochhore 100tk joma hoyechhe");
    
    // goriberAccount.deposit(1);
    goriberAccount.deposit = 51;

    // goriberAccount.getBalance();
    const balance = goriberAccount.balance;

    console.log(balance);



}