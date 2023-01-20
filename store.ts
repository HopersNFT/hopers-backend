class Store {
    private data: symbol;
    private readonly sym: symbol;
    constructor() {
        this.data = Symbol.for('data');
    }
    setData = (data: Record<string, any>) => {
        // this.data = {
        //     ...this.data,
        //     ...data,
        // };
        const exist = this.getData();
        (global as any)[this.sym] = {
            ...exist,
            ...data,
        };
    };
    getData = () => {
        return (global as any)[this.data];
    };
}

const store = new Store();

export default store;
