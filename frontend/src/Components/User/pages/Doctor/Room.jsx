// import React from 'react'
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import { useParams } from 'react-router-dom';

// const Room = () => {


//     const {roomID}=useParams()

//     const mymeeting= async (element)=>{

//         const appID =1264575123 ;
//         const serverSecret = " 4559bb693893812b0672f409a014162d ";
//         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(), "patient");

//         const zp = ZegoUIKitPrebuilt.create(kitToken);

//          // start the call
//  zp.joinRoom({
//     container: element,
//     sharedLinks: [
//         {
//             link: 'https://storage.zego.im/demo/whiteboard/index.html',
//             renderType: 'whiteboard',
//             config: {
//                 roomID: roomID,
//                 userID: 'patient',
//                 userName: 'patient',
//                 appID: appID,
//                 appSign: serverSecret,
//                 isWritable: true,
//                 isManager: false,
//             },
//         },
//     ],

//     scenario: {
//      mode: ZegoUIKitPrebuilt.OneONoneCall,
//     },
// });

//     }

//   return (


//     <div ref={mymeeting}>

//         <h1>{roomID}</h1>
//     </div>
//   )
// }

// export default Room




import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const Room = () => {
  const { roomID } = useParams();
  const zpRef = useRef(null); // Create a ref to hold the Zego object

  useEffect(() => {
    const initializeZego = async () => {
      const appID = 1264575123;
      const serverSecret = "4559bb693893812b0672f409a014162d";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(),
        "patient"
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);

      // Store the Zego object in the ref
      zpRef.current = zp;

      try {
        await zp.joinRoom({
          container: elementRef.current,
          sharedLinks: [
            {
              link: 'https://storage.zego.im/demo/whiteboard/index.html',
              renderType: 'whiteboard',
              config: {
                roomID: roomID,
                userID: 'patient',
                userName: 'patient',
                appID: appID,
                appSign: serverSecret,
                isWritable: true,
                isManager: false,
              },
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
          },
        });
      } catch (error) {
        console.error("Error joining the room:", error);
        // Handle the error appropriately (e.g., display an error message to the user)
      }
    };

    initializeZego();
  }, [roomID]);

  const elementRef = useRef(null);

  return (
    <div ref={elementRef}>
      <h1>{roomID}</h1>
    </div>
  );
};

export default Room;
