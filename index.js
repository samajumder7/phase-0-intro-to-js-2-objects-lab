// Write your solution in this file!
const employee = {
    name: "Neil Young",
    streetAddress: "11 Crazy Horse Road",
}
function updateEmployeeWithKeyAndValue(employee, keyA, valueA){
    const employee2 = {...employee};
    employee2[keyA] = valueA;
    return employee2;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, keyA, valueA){
    employee[keyA] = valueA;
    return employee;
}
function deleteFromEmployeeByKey(employee, keyA){
    const employee2 = {...employee};
    delete employee2[keyA];
    return employee2;
}
function destructivelyDeleteFromEmployeeByKey(employee, keyA){
    delete employee[keyA];
    return employee;
}
