import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

//useselector to get the data from redux

function User() {
  const dispatch = useDispatch();
  const users =useSelector((state)=> state.userInfo.users);

  const deleteUserInfo = (i)={
    dispatch(deleteUser(i))
  }
  // console.log(users)
  return <>
 users.map user,index
  <divkeyindex>

    <button onClick={()=>deleteUserInfo(i)}>delete</button>
  </divkeyindex>
  </>
}

export default User