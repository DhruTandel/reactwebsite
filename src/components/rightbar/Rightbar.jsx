import './rightbar.css'
import{Users} from '../../DummyData';
import Online from '../online/Online';

export default function Rightbar({profile}) {

  const HomeRightBar=()=>{
    return(
      <>
        <div className='birthdaycontainer'>
          <img className="birthdayimg" src="images/gift.jpeg" alt=""/>
          <span className='birthdaytext'>
            <b>Neel</b> and <b>7 other friends</b> have a Birthday today.
          </span>
        </div>
        <img className='rightbarad' src='images/heart.png' alt=''/>
        <h4 className='rightbartitle'>Online friends</h4>
        <ul className='rightbarfriendlist'>
        {Users.map((u)=>(
          <Online key={u.id} user={u}/>
        ))}
        </ul>
      </>
    );
  }

  const ProfileRightBar=()=>{
    return(
      <>
        <h4 className='rightbartitle'>User Information</h4>
        <div className='rightbarinfo'>
        <div className='rightbarinfoitem'>
            <span className='rightbarinfokey'>City:</span>
            <span className='rightbarinfovalue'>Daman</span>
          </div>
          <div className='rightbarinfoitem'>
            <span className='rightbarinfokey'>From:</span>
            <span className='rightbarinfovalue'>Daman</span>
          </div>
          <div className='rightbarinfoitem'>
            <span className='rightbarinfokey'>Relationship:</span>
            <span className='rightbarinfovalue'>Single</span>
          </div>
        </div>
        <h4 className='rightbartitle'>User Friends</h4>
        <div className='rightbarfollowings'>
        <div className='rightbarfollowing'>
            <img className='rightbarfollowingimg' src='images/photo2.jpg' alt='' />
            <span className='rightbarfollowingname'>John carter</span>
          </div>
          <div className='rightbarfollowing'>
            <img className='rightbarfollowingimg' src='images/photo3.jpg' alt='' />
            <span className='rightbarfollowingname'>John carter</span>
          </div>
          <div className='rightbarfollowing'>
            <img className='rightbarfollowingimg' src='images/photo4.jpg' alt='' />
            <span className='rightbarfollowingname'>John carter</span>
          </div>
          <div className='rightbarfollowing'>
            <img className='rightbarfollowingimg' src='images/photo5.jpg' alt='' />
            <span className='rightbarfollowingname'>John carter</span>
          </div>
          <div className='rightbarfollowing'>
            <img className='rightbarfollowingimg' src='images/photo6.jpg' alt='' />
            <span className='rightbarfollowingname'>John carter</span>
          </div>
          <div className='rightbarfollowing'>
            <img className='rightbarfollowingimg' src='images/photo7.jpg' alt='' />
            <span className='rightbarfollowingname'>John carter</span>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className='rightbar'>
      <div className='rightbarwrapper'>
        {profile ? <ProfileRightBar/> : <HomeRightBar/>}
      </div>
    </div>
  )
}
