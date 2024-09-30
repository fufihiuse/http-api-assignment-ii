/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/client.js":
/*!**************************!*\
  !*** ./client/client.js ***!
  \**************************/
/***/ (() => {

eval("const handleResponse = async (response) => {\n  const content = document.querySelector('#content');\n\n  switch (response.status) {\n    case 200:\n      content.innerHTML = '<b>Success</b>';\n      break;\n    case 201:\n      content.innerHTML = '<b>Created</b>';\n      break;\n    case 204:\n      content.innerHTML = '<b>Updated (No Content)</b>';\n      return;\n    case 400:\n      content.innerHTML = '<b>Bad Request</b>';\n      break;\n    case 404:\n      content.innerHTML = '<b>Page Not Found!</b>';\n      break;\n    default:\n      content.innerHTML = 'Error code not implemented by client.';\n      break;\n  }\n  const obj = await response.json();\n  if (obj.message) {\n    content.innerHTML += `<p>${obj.message}</p>`;\n  }\n  if (obj.users) {\n    console.log(obj.users);\n    content.innerHTML += `<p>${JSON.stringify(obj.users)}</p>`;\n  }\n};\n\nconst sendReq = async (userForm) => {\n  const nameAction = userForm.getAttribute('action');\n  const nameMethod = userForm.getAttribute('method');\n\n  const name = userForm.querySelector('#nameField');\n  const age = userForm.querySelector('#ageField');\n\n  const req = {\n    method: nameMethod,\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n      Accept: 'application/json',\n    },\n  };\n\n  if (nameMethod.toUpperCase() === 'POST') {\n    const formData = `name=${name.value}&age=${age.value}`;\n    req.body = formData;\n  }\n\n  const response = await fetch(nameAction, req);\n  handleResponse(response);\n};\n\nconst init = () => {\n  const nameForm = document.querySelector('#nameForm');\n  const addUser = (e) => {\n    e.preventDefault();\n    sendReq(nameForm);\n    return false;\n  };\n  nameForm.addEventListener('submit', addUser);\n\n  const userForm = document.querySelector('#userForm');\n  const getUser = (e) => {\n    e.preventDefault();\n    sendReq(userForm);\n    return false;\n  };\n  userForm.addEventListener('submit', getUser);\n\n  const urlField = document.querySelector('#urlField');\n  const methodSelect = document.querySelector('#methodSelect');\n\n  urlField.addEventListener('change', () => {\n    userForm.setAttribute('action', urlField.value);\n  });\n  methodSelect.addEventListener('change', () => {\n    userForm.setAttribute('method', methodSelect.value);\n  });\n\n  // Update to match on init\n  userForm.setAttribute('action', urlField.value);\n  userForm.setAttribute('method', methodSelect.value);\n};\n\nwindow.onload = init;\n\n\n//# sourceURL=webpack://http-api-assignment-ii/./client/client.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/client.js"]();
/******/ 	
/******/ })()
;