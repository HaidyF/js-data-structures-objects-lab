// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
    let newDriver = Object.assign({}, obj)
    newDriver[key] = value
  
    return newDriver
  }

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value
  
    return obj
  }
  
function deleteFromDriverByKey(obj, key) {
    let deleteDriver = Object.assign({}, obj)
    delete deleteDriver[key]

    return deleteDriver
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key]
  
    return obj
  }
