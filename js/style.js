class Newuser{
    constructor(firstname, lastname, age, currentlevel, favclub){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.currentlevel = currentlevel;
        this.favclub = favclub;
    }
}

class Tablesetting{
    addingTableData = (register)=>{
        let list = document.getElementById('table-data');
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${register.firstname}</td>
        <td>${register.lastname}</td>
        <td>${register.age}</td>
        <td>${register.currentlevel}</td>
        <td>${register.favclub}</td>
        <td><button class="btn btn-danger">DELETE</button></td>    
        `;
        list.appendChild(row);
    }

    deletingTableData = target =>{
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    clearing = ()=>{
        document.getElementById('firstname').value = ' ';
        document.getElementById('lastname').value = ' ';
        document.getElementById('yourage').value = ' ';
        document.getElementById('yourlevel').value = ' ';
        document.getElementById('yourclub').value = ' ';

    }

}