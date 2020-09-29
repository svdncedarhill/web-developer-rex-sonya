function allEmployee()
{
    displayEmployees(employees);
}
    
/*-- function to display male employee */
function maleEmployees()
{
    /*filtering employees array to get male employees*/
    let maleEmployees = employees.filter(function(emp){return emp.gender == 'Male';
});

       displayEmployees(maleEmployees);
   }

   /*-- function to display female employees */
   function femaleEmployees()
   {
       /*filtering employees array to get female employee*/
       let femaleEmployees = employees.filter(function(emp){return emp.gender == 'Female';
    });
    displayEmployees(femaleEmployees);
   }


 /*function display employees array details in web page*/
   function displayEmployees(emps)

   {
    let slno = 1;
    let tbody_data = ''
    for(let employee of emps)
    {
        tbody_data = `${tbody_data}<tr>
            <td>${slno++}</td>
            <td>REX_${employee.id}</td>
            <td>${employee.first_name}</td>
            <td>${employee.last_name}</td>
            <td>${employee.gender}</td>
            <td>${employee.age}</td>
            <td>${employee.country}</td>
            </tr>
        `
    }
    document.querySelector('#table_body').innerHTML = tbody_data;
    document.querySelector('#no_of_emps').innerText = emps.length
}


/*---------------*/
let firstName_field = document.querySelector('#firstName_field');

firstName_field.addEventListener('keyup',function(){
    let fname = firstName_field.value;

    let searchFirstNames = employees.filter(function(emp){
        return emp.first_name.startsWith(fname)
    })

    displayEmployees(searchFirstNames);
})