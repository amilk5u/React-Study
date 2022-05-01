import { Link, Route, Routes } from 'react-router-dom';
import Front from './Front'

const Profile = () => {
   return (
      <div>
         <h1> Profile Page 입니다. </h1>
         <ul>
            <li><Link to="html">html</Link></li>
            <li><Link to="css">css</Link></li>
            <li><Link to="javascript">javascript</Link></li>
            <li><Link to="react">react</Link></li>
            <li><Link to="vue">vue</Link></li>
         </ul>
         <hr />
         {/* 화면에 보이는 영역 */}
         <Routes>
            <Route path=":name" element={<Front/>}/>
         </Routes>
      </div>
   );
};

export default Profile;