"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function CookieConsent(){

const [show,setShow] = useState(false)
const [preferences,setPreferences] = useState(false)
const [analytics,setAnalytics] = useState(true)

useEffect(()=>{

const consent = localStorage.getItem("nomiah_cookie_consent")

if(!consent){
setShow(true)
}

},[])

function acceptAll(){

localStorage.setItem("nomiah_cookie_consent","accepted")
localStorage.setItem("nomiah_cookie_analytics","true")
setShow(false)

}

function rejectAll(){

localStorage.setItem("nomiah_cookie_consent","rejected")
localStorage.setItem("nomiah_cookie_analytics","false")
setShow(false)

}

function savePreferences(){

localStorage.setItem("nomiah_cookie_consent","custom")
localStorage.setItem("nomiah_cookie_analytics",analytics ? "true":"false")

setShow(false)

}

return(

<AnimatePresence>

{show && (

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
>

<motion.div
initial={{scale:0.9,opacity:0}}
animate={{scale:1,opacity:1}}
exit={{scale:0.9,opacity:0}}
transition={{duration:0.25}}
className="bg-white max-w-xl w-full mx-6 rounded-2xl shadow-xl p-8"
>

<h2 className="text-2xl font-semibold text-gray-900">
Your Privacy Matters
</h2>

<p className="mt-4 text-gray-600 leading-relaxed">

NOMIAH uses cookies and similar technologies to improve
security, analyze performance, and enhance user experience.

Some cookies are essential for the operation of the website,
while others help us understand visitor interactions in order
to optimize digital services.

</p>

<p className="mt-4 text-gray-600">

In compliance with international data protection standards
including POPIA and GDPR, you may choose to accept or reject
non-essential cookies.

</p>

<div className="mt-6 text-sm text-gray-500 space-x-4">

<Link href="/privacy-policy" className="underline">
Privacy Policy
</Link>

<Link href="/cookie-policy" className="underline">
Cookie Policy
</Link>

<Link href="/terms-of-service" className="underline">
Terms of Service
</Link>

</div>

{preferences && (

<div className="mt-8 border-t pt-6">

<h3 className="font-semibold mb-4">
Cookie Preferences
</h3>

<div className="flex items-center justify-between">

<span className="text-gray-600">
Analytics Cookies
</span>

<input
type="checkbox"
checked={analytics}
onChange={(e)=>setAnalytics(e.target.checked)}
className="w-5 h-5"
/>

</div>

<p className="text-sm text-gray-500 mt-2">
Analytics cookies help us understand how visitors interact
with our website so we can improve performance.
</p>

</div>

)}

<div className="mt-8 flex flex-col sm:flex-row gap-3 justify-end">

<button
onClick={()=>setPreferences(!preferences)}
className="px-4 py-2 border rounded-lg hover:bg-gray-100"
>
Preferences
</button>

<button
onClick={rejectAll}
className="px-4 py-2 border rounded-lg hover:bg-gray-100"
>
Reject
</button>

<button
onClick={preferences ? savePreferences : acceptAll}
className="px-5 py-2 bg-[var(--brand-primary)] text-white rounded-lg"
>
Accept
</button>

</div>

</motion.div>

</motion.div>

)}

</AnimatePresence>

)

}