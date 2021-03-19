const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
 cats.push("Ralph");   
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    const newCats = [...cats, "Broom"];
    return newCats;
}
function prependCat(name) {
    const newCatss = ["Arnold", ...cats];
    return newCatss;
}
function removeLastCat() {
    const newLastCat = cats.slice(0, -1)
    return newLastCat;
}
function removeFirstCat() {
    const newFirstCat = cats.slice(1)
    return newFirstCat;
}
