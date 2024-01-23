import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import  backgroundImage from '../assets/images/background.jpg'

import Contextpage from '../Contextpage';



import { motion, AnimatePresence } from 'framer-motion';

import Header from '../components/Header';
// import { Pagebtn } from './Pagebtn';
import InfiniteScroll from 'react-infinite-scroll-component';
import Moviecard from '../components/Moviecard';
import Genre from '../components/Genre';
import App from '../App';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', username, password);
    <App username={username} />
  };



  const { movies, loader, page, setPage, totalPage, setMovies, activegenre, filteredGenre } = useContext(Contextpage);

  const { header, backgenre } = useContext(Contextpage);

  return (
    <>
<div className='w-full bg-[#10141e] md:p-10 mb-20 md:mb-0'>

<Helmet>
            <title>MovieGalaxy | Login</title>
        </Helmet>

        <header className={`flex  items-center ${backgenre ? 'justify-center gap-10 md:justify-between' : 'justify-center'} text-3xl md:text-4xl font-bold text-blue-300 py-3 px-5 md:px-10`}>

{backgenre ?
  <a href='/' className='bg-gray-600 text-white p-2 rounded-full text-xl md:text-2xl'>
    <HiChevronLeft />
  </a>
  : null}

{"Login"}
</header>
            <motion.div
                layout
                className="flex flex-wrap relative justify-evenly md:justify-around" style={{paddingBottom:"50%",marginLeft: "39%"}}>
                {/* <div class="backdrop-img">
<span className="lazy-load-image-background blur lazy-load-image-loaded" style={{color:"transparent", display:" inline-block",opacity:"0.3"}}><img src={backgroundImage} alt="" /></span>
   </div>  */}
                <AnimatePresence>
                    
                   <form style={{
    width: "100%",
   marginLeft: "2%",
    marginTop: "15%"}}>
    <div className="mb-3" >
       <label htmlFor="username" className="form-label" style={{color:"white",marginRight:"2%"}}>
        Username :
       </label>
       <input
        type="text"
       className="form-control"
       id="username"
         value={username}
      onChange={(e) => setUsername(e.target.value)}
     />
   </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" style={{color:"white",marginRight:"2.3%"}}>
          Password :
           </label>
          <input
            type="password"
          className="form-control"
             id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
    />
       </div>

       <div className="flex justify-center flex-wrap text-white font-semibold text-[16px] absolute p-5 md:p-2 text-center px-5"style={{marginLeft: "12%",marginTop:"5%",width: "17%"}}>

                        <>
                            <Link to="/" className="w-full bg-gray-900 py-2 gap-4 rounded-xl flex items-center justify-center font-semibold border-2 border-blue-100/10"onClick={() => handleLogin()}>
                                <h1>Log in</h1>
                            </Link>
                        </>
                    
                </div>
   </form>
                </AnimatePresence>
            </motion.div>
            {/* <Pagebtn /> */}

        </div>
  </>
  );
};

export default Login;