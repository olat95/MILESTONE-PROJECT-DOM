class Newuser{
    constructor(firstName, lastName, age, currentLevel, favouriteClub){
        this.firstname = firstName;
        this.lastname = lastName;
        this.age = age;
        this.currentlevel = currentLevel;
        this.favclub = favouriteClub;
    }
}

class Tablesetting{
    addingTableData = (register)=>{
        let list = document.getElementById('table-data');
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${register.firstName}</td>
        <td>${register.lastName}</td>
        <td>${register.age}</td>
        <td>${register.currentLevel}</td>
        <td>${register.favouriteClub}</td>
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