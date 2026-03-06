"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function CookieConsent() {

const [show,setShow] = useState(false)

useEffect(() => {

const consent = localStorage.getItem("nomiah_cookie_consent")

if(!consent){
setShow(true)
}

},[])

function acceptCookies(){
localStorage.setItem("nomiah_cookie_consent","accepted")
setShow(false)
}

function rejectCookies(){
localStorage.setItem("nomiah_cookie_consent","rejected")
setShow(false)
}

if(!show) return null

return(

<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

<div className="bg-white max-w-xl w-full mx-6 rounded-2xl shadow-xl p-8">

<h2 className="text-2xl font-semibold text-gray-900">
Your Privacy Matters
</h2>

<p className="mt-4 text-gray-600 leading-relaxed">

NOMIAH uses cookies and similar technologies to enhance
website functionality, analyze performance, and improve
your browsing experience.

Cookies help us understand how visitors interact with
our platform, enabling us to maintain secure digital
infrastructure and deliver better services.

Some cookies are essential for the website to function,
while others help us analyze usage patterns and optimize
content.

</p>

<p className="mt-4 text-gray-600">

By clicking <strong>Accept</strong>, you agree to the use of cookies
as described in our policies.

You may also choose to reject non-essential cookies.

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

<div className="mt-8 flex flex-col sm:flex-row gap-3 justify-end">

<button
onClick={rejectCookies}
className="px-5 py-2 border rounded-lg hover:bg-gray-100"
>
Reject
</button>

<button
onClick={acceptCookies}
className="px-5 py-2 bg-[var(--brand-primary)] text-white rounded-lg hover:opacity-90"
>
Accept All Cookies
</button>

</div>

</div>

</div>

)

}