const users = [];
const render = document.getElementById('render-body');
const formData = document.forms["data"];
const btnAdd = document.getElementById('btn-add');
const btnEdit = document.getElementById('btn-edit');

btnAdd.addEventListener('click', () => {
    const name = formData.name.value;
    const surname = formData.surname.value;
    const email = formData.email.value;
    const regExpEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,}$/;
    const date = new Date().toLocaleDateString();
    
    if (name != '' && surname != '' && email != '' && regExpEmail.test(email)) {
        const newUser = new Users(name, surname, email, date);
        users.push(newUser);
        formData.reset();
        renderBody();
    }
});

class Users {
    constructor(name, surname, email, date) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.date = date;
    }
}

const renderBody = () => {
    render.innerHTML = '';
    for (let i = 0; i < users.length; i++) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.innerHTML = i + 1;
        tr.appendChild(td);
        for (let key in users[i]) {
            const td = document.createElement('td');
            td.innerHTML = users[i][key];
            tr.appendChild(td);
        }
        tr.innerHTML += `<td><button type="button" class="btn-edit" onclick="editValue(${i})">Edit</button></td>`;
        tr.innerHTML += `<td><button type="button" class="btn-delete" onclick="deleteValue(${i})">Delete</button></td>`;
        render.appendChild(tr);
    }
}

const editValue = ind => {
    formData.name.value = users[ind].name;
    formData.surname.value = users[ind].surname;
    formData.email.value = users[ind].email;

    btnAdd.style.display = "none";
    btnEdit.style.display = "block";
    btnEdit.onclick = function () {
        changeValue(ind);
    }
}

const changeValue = ind => {
    users[ind].name = formData.name.value;
    users[ind].surname = formData.surname.value;
    users[ind].email = formData.email.value;

    btnAdd.style.display = "block";
    btnEdit.style.display = "none";
    formData.reset();

    renderBody();
}

const deleteValue = ind => {
    users.splice(ind, 1);
    renderBody();
}