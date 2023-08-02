import Post from '../post/Post'
import Share from '../share/Share'
import './Middle.css'
import { Posts } from "../../DummyData";



export default function Middle() {
  return (
    <>
    <div className='middle'>
      <div className='middlewrapper'>
        <Share/>
        {Posts.map((p)=>(
          <Post key={p.id} post={p}/>
        )
        )}
      </div>
    </div>
    </>
  )
}
