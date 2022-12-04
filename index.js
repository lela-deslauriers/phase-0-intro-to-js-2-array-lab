let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);//appends a cat to the end of the cats array
    console.log(cats);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);//prepends a cat to the beginning of the cats array
    console.log(cats);
}

function destructivelyRemoveLastCat() {
    cats.pop();//removes the last cat from the cats array
}

function destructivelyRemoveFirstCat() {
    cats.shift();//removes the first cat from the cats array
}

function appendCat(name) {
    appendCat = [...cats, name];
    return appendCat;
}

function prependCat(name) {
    appendCat = [name, ...cats];
    return appendCat;
}

function removeLastCat() {
    removeLastCat = cats.slice(0, cats.length -1);
    return removeLastCat;
    //removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
}

function removeFirstCat() {
    removeFirstCat = cats.slice(1);
    return removeFirstCat;
    //removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
}
