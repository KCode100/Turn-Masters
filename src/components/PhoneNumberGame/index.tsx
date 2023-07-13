'use client'

const PhoneNumberGame = () => {
  
  return ( 
    <div className="w-full">
      <div className="relative max-w-xs m-auto">
        <img className="block m-auto max-h-screen" src="/phone-keyboard.png" alt="phone keyboard" />
        {/* <div className="absolute top-[32%] left-[4em] z-10 w-full max-w-[200px] grid grid-cols-3 gap-x-4 gap-y-1.5">
          <div className="block m-auto bg-red-500 w-full h-full p-[53%] rounded-full"></div>
          <div className="block m-auto bg-red-500 w-full h-full p-[53%] rounded-full"></div>
          <div className="block m-auto bg-red-500 w-full h-full p-[53%] rounded-full"></div>
          <div className="block m-auto bg-red-500 w-full h-full p-[53%] rounded-full"></div>
          <div className="block m-auto bg-red-500 w-full h-full p-[53%] rounded-full"></div>
          <div className="block m-auto bg-red-500 w-full h-full p-[53%] rounded-full"></div>
          <div className="block m-auto bg-red-500 w-full h-full p-[53%] rounded-full"></div>
          <div className="block m-auto bg-red-500 w-full h-full p-[53%] rounded-full"></div>
          <div className="block m-auto bg-red-500 w-full h-full p-[53%] rounded-full"></div>
        </div> */}
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-38%] opacity-40 w-[60%] bg-green-200 block m-auto" style={{aspectRatio: "200/320"}}></div>
      </div>
    </div>
  );
}
//  556 : 1102
export default PhoneNumberGame;