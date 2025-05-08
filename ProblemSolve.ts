function formatString(input: string, toUpper: boolean = true): string {
    if (toUpper) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {

    return items.filter(item => item.rating >= 4);

}


function concatenateArrays<T>(...arrays: T[][]): T[] {

    const result: T[] = [];

    for (let i = 0; i < arrays.length; i++) {
        const currentArray = arrays[i];
        for (let j = 0; j < currentArray.length; j++) {

            result.push(currentArray[j]);

        }
    } 

    return result;
}



class Vehicle {
    private make: string;
    public year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    public getInfo(): void {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}


class Car extends Vehicle {

    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel(): void {
       console.log(`Model: ${this.model}`);
    }
}


function processValue(value: string | number): number {
    return typeof value === "string" ? value.length : value * 2;
}


interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0){

        return null;

    } 
    return products.reduce((max, product) => product.price > max.price ? product : max);
}


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}



async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
        throw new Error("Negative number not allowed");
    }

    return new Promise((resolve) => {
        setTimeout(() => {

            resolve(n * n);

        }, 1000);
    });

}

