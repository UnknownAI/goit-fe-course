const allUsers = document.querySelector('.all-users');
const tBody = document.querySelector('.response');

const getUserForm = document.querySelector('.id-user-form');
const getUserInput = document.querySelector('.id-user-input');

const getAddFrom = document.querySelector('.add-user-form');
const getUserName = document.querySelector('.add-user-name');
const getUserAge = document.querySelector('.add-user-age');

const getRemoveForm = document.querySelector('.remove-user-form');
const getUserRemoveId = document.querySelector('.remove-user-input');

const getUpdateForm = document.querySelector('.update-user-form');
const getUserUpdateId = document.querySelector('.update-user-id');
const getUserUpdateName = document.querySelector('.update-user-name');
const getUserUpdateAge = document.querySelector('.update-user-age');

//#region html creating 
function userTable(userData) {
    
    const usersTable = document.createElement('table');
    const tableHeader = document.createElement('tr');
    const headerId = document.createElement('th');
    headerId.textContent = 'ID';
    const headerName = document.createElement('th');
    headerName.textContent = 'NAME';
    const headerAge = document.createElement('th');
    headerAge.textContent = 'AGE';
    usersTable.appendChild(tableHeader);
    tableHeader.appendChild(headerId);
    tableHeader.appendChild(headerName);
    tableHeader.appendChild(headerAge);

    if (!Array.isArray(userData)) {
        const row = document.createElement('tr');
        usersTable.appendChild(row);
        for (let key in userData) {
            let col = document.createElement('td');
            col.textContent = userData[key];
            row.appendChild(col);
        }
    } else if (Array.isArray(userData)) {
        userData.forEach(function (item) {
            const row = document.createElement('tr');
            usersTable.appendChild(row);
            for (let key in item) {
                let col = document.createElement('td');
                col.textContent = item[key];
                row.appendChild(col);
            }
        })
    }
    tBody.appendChild(usersTable);
}

function statusMessage(str) {
    const message = document.createElement('p');
    message.textContent = str;
    tBody.appendChild(message);
}

function clearResultContainer() {
    if (tBody.childNodes.length > 0) {
        while (tBody.firstChild) {
            tBody.removeChild(tBody.firstChild);
        }
    }
}
//#endregion
//#region getAllUsers
function getAllUsers (){
   return fetch('https://test-users-api.herokuapp.com/users')
        .then(response => {
            if (response.ok) return response.json();
            throw new Error(`Error while fetching: ${response.statusText}`);
        }).then(responseData => {
            if (responseData.errors.length === 0) return responseData.data;
            throw new Error(JSON.stringify(responseData.errors));
        }
        )
        .catch(error => console.error("Error: ", error));
}


function onGetAllUsers(event){
    event.preventDefault();
    clearResultContainer();
    getAllUsers().then(response => { userTable(response) })
}
//#endregion

//#region getUserByID
function getUserById(id){
    return fetch(`https://test-users-api.herokuapp.com/users/${id}`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(responseData => { 
            if (responseData.errors.length === 0) return responseData.data;
            throw new Error(JSON.stringify(responseData.errors));
        }).catch(error => console.error("Error: ", error));
}


function onGetUserById(event) {
    event.preventDefault();
    clearResultContainer();
    getUserById(getUserInput.value).then(response => { userTable(response) });
    event.target.reset();
}

//#endregion

//#region addUsers
function addUser({ name, age }) {
    return fetch('https://test-users-api.herokuapp.com/users/', {
        method: 'POST',
        body: JSON.stringify({ name, age }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(responseData => {
            if (responseData.errors.length === 0) return responseData.data;
            throw new Error(JSON.stringify(responseData.errors));
        })
        .catch(error => console.error("Error: ", error));
}


function onAddUser(event) {
    event.preventDefault();
    clearResultContainer();
    addUser({ name: getUserName.value, age: getUserAge.value }).then(user => {
        const newUser = {
            id: user._id,
            name: user.name,
            age: user.age
        }
        let message = 'User added successfully';
        statusMessage(message);
        userTable(newUser);

    }
    )
    event.target.reset();

}
//#endregion


//#region removeUser
function removeUser(id) {
    return fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error(`Error while fetching: ${response.statusText}`);
        })
        .then(responseData => {
            if (responseData.errors.length === 0) return responseData.data;
            throw new Error(JSON.stringify(responseData.errors));
        })
        .catch(error => console.error(error));
}

function onRemoveUser(event) {
    event.preventDefault();
    clearResultContainer();
    removeUser(getUserRemoveId.value).then(user => {
        let message = 'User deleted successfully'
        statusMessage(message);
        userTable(user);
    });
    event.target.reset();

}

//#endregion


function updateUser({ userId, name, age }) {

    return fetch(`https://test-users-api.herokuapp.com/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify({ name, age }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Error: ' + response.statusText);
        })
        .then(responseData => {
            
            if (responseData.errors.length === 0) return responseData.data;
            throw new Error(JSON.stringify(responseData.errors));
        })
        .catch(error => console.error(error));
}

function onUpdateUser(event) {
    event.preventDefault();
    clearResultContainer();
    updateUser({
        userId: getUserUpdateId.value,
        name: getUserUpdateName.value,
        age: getUserUpdateAge.value,
    }).then(user => {
        let message = 'User updated successfully'
        statusMessage(message);
        userTable(user);
    });
    event.target.reset();
}




allUsers.addEventListener('click', onGetAllUsers);
getAddFrom.addEventListener('submit', onAddUser);
getRemoveForm.addEventListener('submit', onRemoveUser);
getUserForm.addEventListener('submit', onGetUserById);
getUpdateForm.addEventListener('submit', onUpdateUser);


