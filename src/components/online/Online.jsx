import './Online.css';

export default function Online({user}) {
    console.log(user)
  return (
    <>
         <li className='rightbarfriend'>
            <div className='rightbarprofileimgcontainer'>
              <img className= 'rightbarprofileimg' src={user.profilepicture} alt=""/>
              <span className='rightbaronline'> </span>
            </div>
            <span className='rightbarusername'>{user.username}</span>
          </li>
    </>
  )
}
