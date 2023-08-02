import "./Home.css"
import Middle from  "../../components/feed/Middle";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";



export default function Home(){
    return(
        <>
        
            <Topbar/>
            <div className="homeContainer">
            <Sidebar/> 
            <Middle/>
            <Rightbar/>
            </div>
      
         
        </>
    )
}