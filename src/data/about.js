export const aboutContent = {
  frontend:
    'A response SPA with basic phonebook functionality. \nReact + Material.ui. Redux + Redux Toolkit + RTK Query serves as state manager',

  backend:
    ' WebServer [Node.js + Express] in connection with MongoDB. DAL is implemented',

  validation: 'On the frontend Formik + yup. Backend validation uses Joi',

  functions:
    "Application provides authentication with email + password and sync across all devices. LocalStorage keeps user info between sessions if needed. Current user is tracked during each reload. A unique token is issued for every session and needed for every operation concerning mutation of users data. User can add, edit and delete contacts which contain name, email and phone number fields. There's a search by contact name and ability for adding to favorite which moves contacts to the top of the list",

  'features to implement':
    'Add UI to implement an ability to add and change avatar',
};
