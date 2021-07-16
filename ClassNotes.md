### JavaScript Window Object

The window object represents an open "window" in a browser.

**Window Object Common Properties:**

-   `closed` - returns a bool indicating whether a window has been closed or not
-   `console` - returns a reference to the console object.
-   `document` -returns the document object for the window.

**Window Object Common Methods:**

-   `alert` - displays an alert box with a message and an OK button.
-   `confirm` - displays an alert box with a message, an OK, and a Cancel button.
-   `prompt` - display a dialog box that prompts the user for input.

**Prompt**
The prompt() method displays a dialog box that prompts the visitor for input.

A prompt box is often used if you want the user to input a value before entering a response.

**Note:** When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value. Do not overuse this method, as it prevents the user from accessing other parts of the page until the box is closed.

The prompt() method returns the input value if the user clicks "OK". If the user clicks "cancel" the method returns null.

[More info about the window object](https://www.w3schools.com/jsref/obj_window.asp)

**Syntax**

prompt(_text, defaultText_)

`text` - (string) required parameter. The text that will be displayed in the dialog box.

`defaultText` - (string) Optional. The default input text.

**Return Value:** A String. If the user clicks "OK", the input value is returned. If the user clicks "cancel", _null_ is returned. If the user clicks OK without entering any text, an empty string is returned.

## For Loops

Instead of repeating code manually, we can set code to run over certain iteration boundaries.

### For Loops

Can Iterate over plain numbers or they can iterate over sets.

**Syntax**

```js
for (initializer; condition; step) {
    //  _code block to be executed_
}
```

`initializer` is executed once before the execution of the code block.

`condition` defines the condition for executing the code block.

`step` is executed every time after each block has been executed.

**Example**

```js
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br/>";
}
```

**For/In Over Object**

Loops through the properties of an object.

```js
for (let key in object) {
    // code block to be executed
}
```

**Example:**

```js
let person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
    text += person[x];
}
```

**For/In Over Arrays**

**Syntax**

```js
for (let variable in array) {
    code;
}
```

**Example**

```js
let numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
    txt += numbers[x] + "<br>";
}
document.getElementById("demo").innerHTML = txt;
```

_Note: Do Not use for in over an Array if the index order is important._

**While**
The while loop iterates through a block of code as long as a specified condition is true.

**Syntax**

```js
while (condition) {
    // code block to be executed
}
```

**Example**

```js
while (i < 10) {
    text += "The number is " + i;
    i++;
}
```

### Do While

The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition, then it will repeat the loop as long as the condition is true.

**Syntax**

```js
do {
    // code block to be executed
} while (condition);
```

**Example**

```js
do {
    text += "The number is " + i;
    i++;
} while (i < 10);
```

![While Vs Do-While loop : ProgrammingAndTech](https://i.redd.it/r3ulhb9a1o421.jpg)

### **Switch Statements**

The `switch` statement is used to perform different actions based on different conditions.

**Syntax**

```js
switch (expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
    //  code block
}
```

The `break` keyword breaks out of the switch block and will stop the execution inside the switch block.

The `default` keyword specifies the code to run if there is no case match.

**Example**

```js
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
```

### Enumerators

In computer programming an enum or enumerator is a data type consisting of a set of "named" elements.

```js
const seasons = {
    SUMMER: "summer",
    WINTER: "winter",
    SPRING: "spring",
    AUTUMN: "autumn",
};
```

## Globals and Scope

JS variables defined inside of a function are LOCAL to that function. Unless you return them, that memory is deleted once you leave that function, and you will not be able to access them.

JS variables defined outside of a function are _global_ and have _global scope_. These variables can be accessed from any function that is on the same page.

ES6 introduces Modules which you can use to export global variables. This is handy for system configurations.
