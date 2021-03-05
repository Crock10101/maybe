import React from "react"
import styled from "styled-components"
import Reel from '/src/assests/videos/BBI_15SecondReel.mp4'

const Home = () => {
    return (
        <VideoContainer>
            <ZeroBg>
                <VideoPlay autoPlay loop muted playsInline src={Reel} type="video/mp4" />
            </ZeroBg>
            <VideoText>
                <VideoContent>
                    <VideoH1>
                        Built on Better Integrity
                    </VideoH1>
                </VideoContent>
            </VideoText>
        </VideoContainer>
    )
}

export default Home

const VideoContainer = styled.div`

display: flex;
justify-content: center;
align-items: center;
height: 100vh;
padding: 0 1rem;
position: relative;
margin-top: -40px;
color: White;
`
const ZeroBg = styled.div`
position: absolute;
top:0;
bottom:0;
right:0;
left:0;
width:100%;
height: 100%;
overflow: hidden;
`

const VideoPlay = styled.video`
width: 100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
filter: brightness(50%);
`

const VideoText = styled.div`
z-index: 3;
height: calc(100vh - 80px);
max-height: 100%;
padding: 0rem calc((100vw - 1300px) / 2);
`

const VideoContent = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align: center;
height: 100vh;
max-height:100%;
padding: 0;
line-height: 1.1.%;
font-weight: bold;
`

const VideoH1 = styled.h1`
font-size: clamp(1.5rem, 6vw, 4rem);
margin-bottom: 1.5rem;
letter-spacing: 3px;
padding: 0.1rem;

`

