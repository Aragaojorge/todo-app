import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginComponent from './LoginComponent'
import ListTodosComponent from './ListTodosComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import HeaderComponent from './HeaderComponent'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'

import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={ <LoginComponent /> } />
                    <Route path='/login' element={ <LoginComponent /> } />
                    <Route path='/welcome/:username' element={ <WelcomeComponent /> } />
                    <Route path='/todos' element={ <ListTodosComponent /> } />
                    <Route path='/logout' element={ <LogoutComponent /> } />
                    <Route path='*' element={ <ErrorComponent /> } />
                </Routes>
                <FooterComponent />      
            </BrowserRouter>       
        </div>
    )
}
