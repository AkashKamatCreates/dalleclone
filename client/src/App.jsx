import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => (
  <BrowserRouter>

    {/* header: contains create button linked to create-post page(/create-post), and openai logo which 
    links to homepage (/).  */}
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      {/* linked button created below:  */}
      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
    </header>

    {/* Main content of the page. */}
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      
      {/* Routes is component from React Router DOM that serves
       as a container for defining multiple Route components. 
       here, route to homepage and route to createpost has been created.*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    
    </main>




  </BrowserRouter>
);

export default App;