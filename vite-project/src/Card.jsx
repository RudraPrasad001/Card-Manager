import React,{useState} from 'react'
function Card(){
    const [oldImg,newImg]=useState('https://yt3.ggpht.com/ytc/AIdro_mn8PS0iFvF0pQYmNBCmGCvhSF5bJwSJskflId9MRqi8g=s600-c-k-c0x00ffffff-no-rj-rp-mo');
    const changeImage=()=>{
        newImg('https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg')
    }
    return(
        <>
        <div className="Card">
            <img className="cardImage" src = {oldImg}></img>
            <h2 className="cardHeader"> BL4Z3NINJA {new Date().getFullYear()}</h2>
            <p className="cardDescription">I am a Full Stack Enthusiast</p>
        </div>
        <div className="Card">
            <img className="cardImage" src ={oldImg}></img>
            <h2 className="cardHeader"> BL4Z3NINJA {new Date().getFullYear()-1}</h2>
            <p className="cardDescription">I am a Full Stack Enthusiast</p>
        </div>
        <div className="Card">
            <img className="cardImage" src = {oldImg}></img>
            <h2 className="cardHeader"> BL4Z3NINJA {new Date().getFullYear()-2}</h2>
            <p className="cardDescription">I am a Full Stack Enthusiast</p>
        </div>
        <div className = "imageChangerContainer">
            <button id="imageChanger" onClick={changeImage}>ChangeImage</button>
    </div>
        </>
    )
}

export default Card