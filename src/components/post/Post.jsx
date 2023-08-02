
import { MoreVert } from '@mui/icons-material';
import './Post.css';
import {Users} from "../../DummyData";
import {useState} from 'react';



export default function Post({post}) {
  const[like,setLike]=useState(post.like);
  const[isliked,setisLiked]=useState(false);
  const user = Users.find((p)=> p.id === post.userid);
  const likehandler=()=>{
    setLike(isliked ? like-1:like+1)
    setisLiked(!isliked)
  }
  return (
    <>
    <div className='post'>
      <div className='postwrapper'>
      <div className='posttop'>
      <div className='posttopleft'>
        <img className='postprofileimg' src={user.profilepicture} alt=""/> 
        <span className='postusername'>{user.username}</span>
        <span className='postdate'>{post.date}</span>
        </div>
      <div className='posttopright'>
        <MoreVert/>
      </div>
      </div>
      <div className='postcenter'>
        <span className='posttext'>{post.desc}</span>
        <br/>
        <img className='postimg' src={post.photo} alt=''/>
      </div>
      <div className='postbottom'>
        <div className='postbottomleft'>
        <img className='likeicon' src='images/like.png' onClick={likehandler} alt='error'/>
        <img className='likeicon' src='images/heart.png' onClick={likehandler} alt='error'/>
        <span className='postlikecounter'>{like} people liked it</span>
        </div>
        <div className='postbottomright'>
          <span className='postcommenttext'>{post.comments} comments</span>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}
