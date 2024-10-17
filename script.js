//task1
function filterArray(arr) {
    return arr.filter(num => num % 2 === 0);
  }
console.log(filterArray([28, 96, 5, 77, 63, 7])); 
//task2
function isLeap(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
     return true;
    }
    else if (year % 400 === 0) {
      return true;
    }
    return false;
}
  console.log(isLeap(2024)); 
  console.log(isLeap(2023)); 
  console.log(isLeap(2000)); 
  console.log(isLeap(1900)); 
  //task3
  function groupByAge(people) {
    const groupedPeople = {};
  
    people.forEach(person => {
      const { age, name } = person;
  
      if (!groupedPeople[age]) {
        groupedPeople[age] = [];
      }
  
      groupedPeople[age].push(name);
    });
  
    return groupedPeople;
  }
  const people = [
    { name: "Oleg", age: 25 },
    { name: "Alla", age: 30 },
    { name: "Peter", age: 25 },
    { name: "Ivan", age: 30 }
  ];
  
  const grouped = groupByAge(people);
  console.log(grouped);