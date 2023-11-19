 import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Components/SignIn';
import UserHome from './Components/UserHome';
import SignUp from './Components/SignUp';
import ViewUser from './Components/ViewUser';
import UpdateProfile from './Components/UpdateProfile';
import DeleteAccount from './Components/DeleteAccount';
import Protect from './Components/Protect';
import AddProduct from './Components/AddProduct';
import ViewProducts from './Components/ViewProducts';
import EditProduct from './Components/EditProduct';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<SignIn/>}></Route>
         <Route path="/userhome" element={<Protect Child = {UserHome}/>}/>
         <Route path="/signup" element={<SignUp/>}/>
         <Route path="/viewuser" element={<Protect Child={ViewUser}/>}/>
         <Route path="/updateuser" element={<Protect Child={UpdateProfile}/>}/>
         <Route path="/deleteuser" element={<Protect Child={DeleteAccount}/>}/>
         <Route path='/addproduct' element={<Protect Child={AddProduct}/>}/>
         <Route path="/viewproducts" element={<Protect Child={ViewProducts}/>} />
         <Route path="/editproduct" element={<Protect Child={EditProduct} />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
