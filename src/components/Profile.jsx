import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
 
    if(!user) return <div> please Login</div>

    return <div>hii {user.username} </div>
}

export default Profile