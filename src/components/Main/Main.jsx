import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../gemini-clone-assets/assets/assets'
import { Context } from '../../context/Context'
function Main() {

    const{onSent,recent,showresult,loading,resultdata,setinput,input} = useContext(Context)
  return (
    <div className='main'>
        <div className="nav"><p>Doogle</p>
        <img src={assets.user_icon} alt=''/></div>
      <div className="main-container">
        {!showresult?<>
            <div className="greet">
            <p><span>Hello, Bro.</span></p>
            <p>How can I Help You Today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful places to see an upcoming road trip</p>
                <img src={assets.compass_icon} alt=""  />
            </div>
            <div className="card">
                <p>Briefly summarize this concept :urban planning</p>
                <img src={assets.bulb_icon} alt=""  />
            </div>
            <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt=""  />
            </div>
            <div className="card">
                <p>Improve the readibility of the following code</p>
                <img src={assets.code_icon} alt=""  />
            </div>
        </div>
        </>:<div className='result'>
            <div className="result-title">
                <img src={assets.user_icon}/>
                <p>{recent}</p></div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?<div className='loader' 
                    
                    >


                        <hr />
                        <hr />
                        <hr />
                    </div>: <p dangerouslySetInnerHTML={{__html:resultdata}}></p>}
                   
                </div>
                </div>}
       

        <div className="main-botttom">
            <div className="search-box">
                <input type='text' placeholder='Enter Prompt here' onChange={(e)=>{setinput(e.target.value)}} value={input}/><div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" onClick={()=>{onSent()}} />
                </div>
            </div>
            <p className="bottom-info">
                Doogle may display inaccurate information , including about people , so double check its respones . Your Privacy and Doogle Apps
            </p>
        </div>
      </div>
    </div>
  )
}

export default Main
