import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskListComponent from './components/containers/task_list'
import TaskDetailPage from './pages/tasks/TaskDetailPage';

function AppRoutingOne() {
  return (
    <BrowserRouter>
      <div>
        <aside>
          <Link to='/'> | HOME | </Link>
          <Link to='/profile'> | PROFILE | </Link>
          <Link to='/tasks'> | TASK | </Link>
        </aside>
        <main>
      <Routes>
        <Route exact path='/' element= {<HomePage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/tasks' element={<TaskListComponent/>}></Route>
        <Route path='/task/:id' element={<TaskDetailPage/>} />
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route element={<NotFoundPage/>}></Route>
      </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default AppRoutingOne;
