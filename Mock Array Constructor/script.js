// objective: make an object constructor (returns objects) that makes mock arrays, without [] //

function MockArray(numberOfElements) {

    //set length so it is accessible like in a normal array
    this.length = numberOfElements;

    //create array with specified number of elements
    for (var i = 0; i < numberOfElements; i++) {
        //values are empty strings
        //keys(property names) are numbers, starting at 0
        this[i] = "";
    };

    //method to return the value at specified position
    this.getAt = function(position) {
        return this[position];
    };

    //method to add new elements to the end
    this.push = function(newElement) {
        //make sure to create a new element, not overwrite anything
        var currentLength = this.length;
        this[currentLength] = newElement;
        //modify length attribute to reflect addition of new element
        this.length += 1;
    }
}

//give 'er a spin!
//create and look at array
var myArray = new MockArray(3);
console.log(myArray);
//view element at position 2
console.log(myArray.getAt(2));
//push the string 'string Cheese' to a new position
myArray.push('string Cheese');
//check it out - now with string Cheese!
console.log(myArray);