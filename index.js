// Write your solution in this file!

let driver = {}

// return a new driver with value for specified key
function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value});
}

// return a new driver with value for specified key
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, {[key]: value});
}

// return new object that with exisitng driver except with specified key/value pair deleted
function deleteFromDriverByKey(driver, key) {
    let newDriver = {...driver};
    delete newDriver[key];
    return newDriver;
}

// delete (destructively) key/value pair from exisitng driver
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}