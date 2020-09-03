// Lab 1 Solution
// By E.L. Fridge

const Machine = require('./machine');
const ConsoleService = require('./consoleService');
const MAX_SODA_CAPACITY = 25;
const MAX_SODA_TYPES = 8;

// Instatiate our classes
let machine = new Machine(MAX_SODA_TYPES);
let consoleService = new ConsoleService(MAX_SODA_CAPACITY);

// Get the initial mode to start the machine in
let machineMode = consoleService.getModeChoice();

// Loading mode: Keep looping as long as we are in loading mode
while (machineMode === 1) {
  const sodaInfo = consoleService.getNewSodaInfo();     // Get the soda name and amount
  machine.newSodaType(sodaInfo.name, sodaInfo.amount);  // Add the soda to the machine
  machine.listSodas();                                  // Prints out the list of valid sodas
  machineMode = consoleService.getModeChoice();         // Ask the user again what they want to do
}

console.log("Ready to vend!");                          // When we get out this far we must now be ready to vend!
let choice = consoleService.getVendChoice(machine);     // Ask the user for a valid vending machine choice

// Vending mode: Keep looping as long as we're vending sodas
while (choice !== 0) {
  let soda = machine.vendSoda(choice);  // Vend the soda
  consoleService.giveUserSoda(soda);
  choice = consoleService.getVendChoice(machine);      // Get another choice
}
