// -------------------native filter function
const samFilter = [1,2,3]

samFilter.map(showArra);

function calle (number, index) {
    if (2 === index) return false;
    else return true;
}
const newArr = samFilter.filter(calle);

console.log("-------------------");
function showArra(number, index) {
    console.log(number, index);
}
newArr.map(showArra);

class Array {
    filter (callback) {
        const arra = [];

        for(let i = 0; index < this.length; i++) {
        const ans = callback(this[i], i);
        
            if(ans === true) {
                arra.push(this[i]);
            }
        }

        return arra;
    }
}
// ----------------------

// ------------------------native find function
const sam = [1,2,3];

function findNumber (number, index) {
    if (index === 2) return true;
    else return false;
}

const newArra = sam.find(findNumber);
console.log(newArra);

class Array {
    findilter (callback) {
        for(let i = 0; i < this.length; i++) {
        const ans = callback(this[i], i);
        
            if(ans === true) {
               return (
                    this[i]
                );
            }
        }
    }
}
// ----------------------------------------------

// -----------------native map function
const sMap = [1,2,3];

function mapCallback(number, index) {
    console.log(number,' ', index);
    const x = 10;
    return(
        "iqbal is awsome"
    );
}

const returned = sMap.map(mapCallback);
console.log(returned);

class Array {
    arra = [];

    map(callback) {
        for (index = 0; index < this.lenght; index++) { 
            const one = callback(this[index], index);

            arra.push(one);
        }
        return arra;
    }
}
// -------------------