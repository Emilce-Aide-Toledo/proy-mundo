import React, {useEffect} from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskListComponent from './components/containers/task_list'
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import Dashboard from './pages/home/Dashboard';

function AppRoutingOne() {

  let logged = false; 

  useEffect(() => {
    logged = localStorage.getItem('credentials'); 
    console.log('User Logged?', logged)
  }, []);

  let taskLists =[
    {
      id: 1,
      name: 'Task 1',
      description: 'My first Task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second Task'
    },
  ]

  return (
    <BrowserRouter>
      <div>
        <aside>
          <Link to='/'> | HOME | </Link>
          <Link to='/profile'> | PROFILE | </Link>
          <Link to='/tasks'> | TASK | </Link>
          <Link to='/task/1'> | TASK 1 | </Link>
          <Link to='/task/2'> | TASK 2 | </Link>
          <Link to='/login'> | LOGIN | </Link>
        </aside>
        <main>
        <Routes>
        <Route exact path='/' element= {<HomePage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}>
          {/* {
            logged ?
            <ProfilePage/>
            :
            ()=>{
              alert('You must be logged in. Redirecting to home...')
            <Redirect to='/' />}
          } */}
        </Route>
        <Route path='/login' element={<LoginPage/>}>
          {/* {
            logged ?
            ()=><HomePage/>
            :
            ()=><LoginPage/>
          } */}
        </Route>
        <Route path='/tasks' element={<TaskListComponent/>}></Route>
        <Route 
        exact 
        path='/task/:id' 
        render={
          ({match})=>(<TaskDetailPage task={taskLists[match.params.id-1]}/>)
        }
        >
          
        </Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route element={<NotFoundPage/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
       </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default AppRoutingOne;
