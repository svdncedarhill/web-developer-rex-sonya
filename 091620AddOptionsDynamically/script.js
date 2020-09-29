function allEmployee()
{
    let slno=1;
    let tbody_data = '';
    //to iterate on employees array
    for (let employee of employees)
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
        document.querySelector('#no_of_emps').innerText = employees.length
}
    
/*-- function to display male employee */
function maleEmployees()
{
    /*filtering employees array to get male employees*/
    let maleEmployees = employees.filter(function(emp){return emp.gender == 'Male'});

    let slno = 1;
    let tbody_data = ''
    for(let employee of maleEmployees)
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
    document.querySelector('#no_of_emps').innerText = maleEmployees.length
}

function femaleEmployees()
{
    /*filtering employees array to get female employees*/
    let femaleEmployees = employees.filter(function(emp){return emp.gender == 'Female'});

    let slno = 1;
    let tbody_data = ''
    for(let employee of femaleEmployees)
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
    document.querySelector('#no_of_emps').innerText = femaleEmployees.length
}