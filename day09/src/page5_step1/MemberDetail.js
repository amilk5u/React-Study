import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const MemberDetail = () => {
   const { memberID } = useParams()
   const [member, setMember] = useState({})
   const navigate = useNavigate()

   useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/users/${memberID}`
      axios.get(url)
         .then(res => setMember(res.data))
   }, [])

   const { name, email, phone, website } = member
   const css = { border: '1px solid red', margin: 20, padding: 20 }
   const onGo = () => {
      navigate('/')
      // navigate(-1) 한 단계 이전 -2, 1, 2
   }
return (
   <div style={css}>
      <h1>MemberDetail Page : {memberID}</h1>
      <h3> 이름 : {name}</h3>
      <ul>
         <li>이메일 : {email}</li>
         <li>전화번호 : {phone}</li>
         <li>웹사이트 : {website}</li>
      </ul>
      <button onClick={onGo}>이전/목록으로</button>
   </div>
);
};

export default MemberDetail;