import "./Closefriend.css"

export default function Closefriend({user}) {
  return (
   <>
       <li className='sidebarfriend'>
            <img className='sidebarfriendimg' src={user.profilepicture} alt=""/>
            <span className='sidebarfriendname'>{user.username}</span>
          </li>
   </>
  )
}
