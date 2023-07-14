'use client'

const PhoneNumberGame = () => {
  
  return ( 
    <div className="w-full">
      <div className="relative max-w-xs m-auto">
        <img className="block m-auto max-h-screen" src="/phone-keyboard.png" alt="phone keyboard" />
        <div className="grid grid-cols-3 gap-x-4 gap-y-2.5 place-content-start absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-38%] opacity-40 w-[60%] bg-green-200 m-auto" style={{aspectRatio: "200/320"}}>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square"></div>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square"></div>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square"></div>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square"></div>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square"></div>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square"></div>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square"></div>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square"></div>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square"></div>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square"></div>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square"></div>
          <div className="m-auto bg-red-500 w-full rounded-full aspect-square"></div>
        </div>
      </div>
    </div>
  );
}
//  556 : 1102
export default PhoneNumberGame;