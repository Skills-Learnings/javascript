// Immediately invoked function expressions(IIFe)
const abc = 5;
(function chai() {
    // named iife
    console.log(abc);
    console.log('DB connected');
})(); // Semicolon is required in case of IIFEs because it is not able to get where it has to end the execution.

((name) => {
    console.log(`Db connected two ${name}`);  
})("sahil")