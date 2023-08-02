import './Topbar.css';
import {Search,Person,Chat,Notifications}from '@mui/icons-material';

export default function Topbar (){
    return(
        <>
            <div className='topbarContainer'>
                <div className='topbarLeft'>
                    <span className='logo'>Dhru</span>
                </div>
                <div className='topbarCenter'>
                    <div className='searchbar'>
                        <Search className='searchicon'/>
                        <input placeholder='Search for friend,post or video' className='searchInput' />
                    </div>
                </div>
                <div className='topbarRight'>
                    <div className='topBarLink'>
                        <span className='topBarLink'>Homepage</span>
                        <span className='topBarLink'>Timeline</span>
                    </div>
                    <div className='topbaricons'>
                        <div className='topbariconitem'>
                        <Person/>
                        <span className='topbariconbadge'>1</span>
                        </div>
                        <div className='topbariconitem'>
                        <Chat/>
                        <span className='topbariconbadge'>1</span>
                        </div>
                        <div className='topbariconitem'>
                        <Notifications/>
                        <span className='topbariconbadge'>1</span>
                        </div>
                    </div>
                    <img src='https://www.beyoung.in/beyoungistan/wp-content/uploads/2023/04/aishwarya-rai-bachchan-709x1024.jpg' alt= '' className='topbarimg'/>
                </div>

            </div>
        </>
    )
}