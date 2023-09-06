import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const Room = () => {


    const {roomID}=useParams()

    console.log(roomID)
    const mymeeting= async (element)=>{

        const appID =1264575123 ;
        const serverSecret = "4559bb693893812b0672f409a014162d ";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(), "patient");

        const zp = ZegoUIKitPrebuilt.create(kitToken);

         // start the call
 zp.joinRoom({
    container: element,
   
    scenario: {
     mode: ZegoUIKitPrebuilt.OneONoneCall,
    },
});

    }

  return (


    <div ref={mymeeting}>

        <h1>{roomID}</h1>
    </div>
  )
}

export default Room