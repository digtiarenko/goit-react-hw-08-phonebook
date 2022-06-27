import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import SharedLayout from './SharedLayout';
import Skeleton from './Skeleton';

// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import Filter from './Filter';

// const ContactList = lazy(() =>
//   import('../pages/ContactList' /*webpackChunkName: "ContactList"*/),
// );
const About = lazy(() =>
  import('../pages/About' /*webpackChunkName: "ContactList"*/),
);

function App() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<About />} />
          {/* <Route path="login" element={<LoginPage />} /> */}
          {/* <Route path="register" element={<RegisterPage />} /> */}
          {/* <Route path="contacts" element={<ContactList />} /> */}
          {/* <Route path="*" element={<h1>NOT FOUND</h1>} /> */}
        </Route>
      </Routes>
    </Suspense>
  );

  // return (
  //   <div style={{ marginLeft: '30px' }}>
  //     <h1> Phonebook </h1>
  //     <ContactForm />
  //     <h1> Contacts </h1>
  //     <Filter />
  //     <ContactList />
  //   </div>
  // );
}

export { App };
