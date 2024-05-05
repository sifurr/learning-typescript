{
    // 
    class Counter {
        public static count: number = 0; // class properties only can be called with class name

        public increment() {
            return Counter.count = Counter.count + 1;
        }

        // method also can be static
        public static decrement() {
            return Counter.count = Counter.count - 1;
        }
    }

    // before static
    /*     
        const instance1 = new Counter();
        console.log(instance1.increment()); // 1 --> instance1 is in different memory space
        
        const instance2 = new Counter();
        console.log(instance2.increment()); // 1 --> instance2 is also in different memory space
     */

    const instance3 = new Counter();
    console.log(instance3.increment()); // 1 --> instance3 is in same memory space

    const instance4 = new Counter();
    console.log(instance4.increment()); // 1 --> instance4 is also in same memory space


    console.log(Counter.decrement()); // 1 --> instance4 is also in same memory space
    console.log(Counter.decrement()); // 1 --> instance4 is also in same memory space

}