# 4. Understanding Enums in TypeScript

## What is an Enum?

In TypeScript, an enum (short for enumeration) is a way to give friendly names to sets of numeric or string values. Enums make it easier to work with a group of related values by giving each value a name that’s easier to remember and use in our code.

## Why Use Enums?

Enums help make code cleaner, more readable, and less error-prone. Instead of using hard-coded values like numbers or strings again and again, we can use enum names which are easier to manage.

## Example: Numeric Enum

In our code, I created a numeric enum called Day:

```ts
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
```

In this example:

- Day.Monday has the value 0  
- Day.Tuesday has the value 1  

```ts
function getDayType(day: Day): string {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}
```

This function checks whether the day is Saturday or Sunday, and returns "Weekend" or "Weekday" based on the day.

### Why is this helpful?

Using `Day.Saturday` instead of the number `5` makes our code easier to read and understand. we don’t have to remember which number stands for which day.

## Example: String Enum

```ts
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
```

In a function, we can use it like this:

```ts
function move(direction: Direction) {
    console.log("Moving", direction);
}

move(Direction.Left); // Output: Moving LEFT
```

String enums are useful when we want readable values and easy debugging, since the output will show words like "LEFT" instead of a number.






# 5. Understanding Type Inference in TypeScript

## What is Type Inference?

In TypeScript, type inference means that the compiler can automatically guess the type of a variable, even if we don’t write it ourselves. It makes TypeScript smart enough to understand types based on our code.

## Why is Type Inference Helpful?

- Less typing: we don’t have to write types again and again.
- Safer code: TypeScript still catches mistakes early.
- Clean code: Our code is shorter and easier to read.

---

## Example 1: Type Inference with Arrays


```ts
const rollNumbers: GenaricArray<number> = [3, 6, 8];
```

We told TypeScript the type using `GenaricArray<number>`. But even if we write:

```ts
const rollNumbers = [3, 6, 8]; // TypeScript understands this is number[]
```

TypeScript will automatically guess it’s a number array. That’s type inference.

---

## Example 2: Type Inference with Functions



```ts
const createArray = (pharm: string): string[] => {
    return [pharm];
}
```

we gave the return type as `string[]`. But we could skip that, and TypeScript will still know:

```ts
const createArray = (pharm: string) => {
    return [pharm]; // inferred as string[]
}
```

---

## Example 3: Type Inference with Objects and Interfaces

WE used interface to define object shapes. For example:

```ts
interface User {
    id: number;
    name: string;
}

const resGenericObj = createArrayWithGeneric<User>({
    id: 1016,
    name: 'Mr. Reduan',
});
```

Here, the type `User` is passed as a generic to the function. This helps keep code organized and reusable.

Another example with interface and type inference:

```ts
interface EmilabWatch {
    brand: string;
    model: string;
    display: string;
}

interface Developer<T, X = null> {
    name: string;
    computers: {
        brand: string;
        model: string;
        releseYear: number;
    };
    smartWatch: T;
    bike?: X;
}

const poorDeveloper: Developer<EmilabWatch> = {
    name: 'Reduan',
    computers: {
        brand: 'dkslf',
        model: 'klsdahf',
        releseYear: 8979,
    },
    smartWatch: {
        brand: 'emilab',
        model: 'sdfj',
        display: 'OLED',
    }
};
```

Here, the type of `poorDeveloper` is clearly set using an interface, but if we use this object later, TypeScript can infer types for each property when we access them:

```ts
console.log(poorDeveloper.name); // inferred as string
console.log(poorDeveloper.computers.releseYear); // inferred as number
```

We don’t need to tell TypeScript the type every time—it understands it from the interface and the data.

---

## Example 4: Type Inference in a Function That Adds New Properties

```ts
const addCourseToStudent = <T>(student: T) => {
    const course = 'Next level web Development';
    return {
        ...student,
        course
    };
}

const student1 = addCourseToStudent({
    name: 'Reduan Ahmad',
    email: 'dksfa@gkadf.com',
    devType: 'NLWD'
});
```

Here, TypeScript infers the type of `student1` from the input, and adds the new field `course`. We didn’t define a type, but TypeScript handled it perfectly.
