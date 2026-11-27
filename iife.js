// Immediately Invoked Function Expressions (IIFE)
//--> it is a function that is defined and executed immediately, 
// without needing to call it separately later, and helps avoid global vriable polltion
// (iife helps by creating a private scope for its variables, so they don't become global variables.)

(function DB(){ // named iife
    console.log(`DB connected`)
})();

( (name) => {
    console.log(`DB connected, ${name}`)
})("ekta");