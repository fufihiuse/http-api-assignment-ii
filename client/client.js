const handleResponse = async (response) => {
  const content = document.querySelector('#content');

  switch (response.status) {
    case 200:
      content.innerHTML = '<b>Success</b>';
      break;
    case 201:
      content.innerHTML = '<b>Created</b>';
      break;
    case 204:
      content.innerHTML = '<b>Updated (No Content)</b>';
      return;
    case 400:
      content.innerHTML = '<b>Bad Request</b>';
      break;
    case 404:
      content.innerHTML = '<b>Page Not Found!</b>';
      break;
    default:
      content.innerHTML = 'Error code not implemented by client.';
      break;
  }
  const obj = await response.json();
  if (obj.message) {
    content.innerHTML += `<p>${obj.message}</p>`;
  }
  if (obj.users) {
    console.log(obj.users);
    content.innerHTML += `<p>${JSON.stringify(obj.users)}</p>`;
  }
};

const sendReq = async (userForm) => {
  const nameAction = userForm.getAttribute('action');
  const nameMethod = userForm.getAttribute('method');

  const name = userForm.querySelector('#nameField');
  const age = userForm.querySelector('#ageField');

  const req = {
    method: nameMethod,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
  };

  if (nameMethod.toUpperCase() === 'POST') {
    const formData = `name=${name.value}&age=${age.value}`;
    req.body = formData;
  }

  const response = await fetch(nameAction, req);
  handleResponse(response);
};

const init = () => {
  const nameForm = document.querySelector('#nameForm');
  const addUser = (e) => {
    e.preventDefault();
    sendReq(nameForm);
    return false;
  };
  nameForm.addEventListener('submit', addUser);

  const userForm = document.querySelector('#userForm');
  const getUser = (e) => {
    e.preventDefault();
    sendReq(userForm);
    return false;
  };
  userForm.addEventListener('submit', getUser);

  const urlField = document.querySelector('#urlField');
  const methodSelect = document.querySelector('#methodSelect');

  urlField.addEventListener('change', () => {
    userForm.setAttribute('action', urlField.value);
  });
  methodSelect.addEventListener('change', () => {
    userForm.setAttribute('method', methodSelect.value);
  });

  // Update to match on init
  userForm.setAttribute('action', urlField.value);
  userForm.setAttribute('method', methodSelect.value);
};

window.onload = init;
