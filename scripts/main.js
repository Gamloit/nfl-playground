const myHeading = document.querySelector('h1');
myHeading.textContent = 'This is an example of JavaScript';

// const myArray = [1,2,3];
// const myObject = {
//     propertyA: 'A',
//     propertyB: 'B',
//     propertyC: 'C',
// };

// myArray.push(4);
// myObject.propertyD = 'D';



// console.log(myArray, myObject);

// const myBoolean = true;

// myBoolean = false; // crashes at this line, cannot reassign const primitive types
// console.log(myBoolean);

// Dynamically fetched content example
const populateDynamicContent = async () => {
    const teams = await fetch('./data/teams.json').then(res => res.json());
    const dynamicContentDiv = document.getElementById('populated-by-javascript');

    console.log(teams);

    dynamicContentDiv.innerHTML = `
        <h2>All teams from database</h2>
        <div>${teams.map(team => `${team.name} (id: ${team.id}; bowl apperances: ${team.bowlAppearances})`).join(', ')}</div>
    `;
};

populateDynamicContent();



