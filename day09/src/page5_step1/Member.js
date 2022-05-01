import React from 'react';
import { Link } from 'react-router-dom';

const Member = ({ item }) => {
   const { id, name, username, email } = item
   const navigate = useNavigate()
   const css = { border: '1px solid red', margin: 20, padding: 20 }
   const onGo = () => {
      const url = `/member/${id}`
      navigate(url)
   }
   return (
      <div style={css}>
         <p>Id : {id}</p>
         <h4> 이름 : {name} </h4>
         <h5> 이메일 : {email}</h5>
         {/* 자세히보기, 상세보기 누를시 세부내용이 나오게 끔 만들어보자 */}
         <p><Link to={`/member/${id}`}>자세히보기</Link></p>
         <button onClick={onGo}>{id}번 상세보기</button>
      </div>
   );
};

export default Member;