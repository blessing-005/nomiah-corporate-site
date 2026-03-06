"use client"

import { useState, useEffect } from "react"

export default function CookieBanner(){

const [show,setShow] = useState(false)

useEffect(()=>{
const consent = localStorage.getItem("cookieConsent")
if(!consent) setShow(true)
},[])

function accept(){
localStorage.setItem("cookieConsent","accepted")
setShow(false)
}

function reject(){
localStorage.setItem("cookieConsent","rejected")
setShow(false)
}

if(!show) return null

return(

<div className="fixed bottom-0 left-0 right-0 bg-black text-white p-6 flex flex-col md:flex-row justify-between items-center gap-4 z-50">

<p className="text-sm">
We use cookies to improve your experience.
</p>

<div className="flex gap-4">

<button
onClick={reject}
className="border px-4 py-2 rounded"
>
Reject
</button>

<button
onClick={accept}
className="bg-white text-black px-4 py-2 rounded"
>
Accept
</button>

</div>

</div>

)
}