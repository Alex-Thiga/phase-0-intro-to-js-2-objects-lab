// Write your solution in this file!
const employee = {
  lname: "Sam",
  streetAddress: "11 Broadway",
};
function updateEmployeeWithKeyAndValue ( obj, key, value )
{
    return {
        ...obj,[key]: value
    }
}
const newEmployee = updateEmployeeWithKeyAndValue( employee, lname, alex )
newEmployee

function destructivelyUpdateEmployeeWithKeyAndValue ( obj, key, value )
{
    obj[ key ] = value;
    return obj
}
const destructiveEmployee = destructivelyUpdateEmployeeWithKeyAndValue( employee, lname, thiga );
destructiveEmployee;
function deleteFromEmployeeByKey ( obj, key)
{
    const newEmployee = { ...obj }
    delete newEmployee[key];
    return newEmployee
    
}
const newObj = deleteFromEmployeeByKey( employee, lname);
newObj;
function destructivelyDeleteFromEmployeeByKey ( obj, key )
{
    delete obj[ key ]
    return obj
}
const destructiveDeleteEmployee = destructivelyDeleteFromEmployeeByKey( employee, lname );
destructiveDeleteEmployee