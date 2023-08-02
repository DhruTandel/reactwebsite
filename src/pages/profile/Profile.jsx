import Middle from '../../components/feed/Middle'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './Profile.css'

export default function Profile() {
  return (
    <>
        
    <Topbar/>
    <div className="profile">
    <Sidebar/> 
    <div className='profileright'>
    <div className='profilerighttop'>
    <div className='profilecover'>
      <img  className="profilecoverimg" src="images/post4.jpg" alt=""/>
      <img  className="profileuserimg" src="images/photo1.jpg" alt=""/>
    </div>
    <div className='profileinfo'>
      <h4 className='profileinfoname'>Dhru</h4>
      <span className='profileinfodescription'>hello friends!!</span>
    </div>
    </div>
    <div className='profilerightbottom'>
    <Middle/>
    <Rightbar profile/>
    </div>
    </div>
    </div>

 
</>
  )
}
