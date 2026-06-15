"use client"
import { useEffect, useState } from "react"

let shown = false

export function PageLoader() {
    const [visible, setVisible] = useState(!shown)
    const [step, setStep] = useState(0)

    useEffect(() => {
        if (shown) return
        shown = true

        setTimeout(() => setStep(1), 0)
        setTimeout(() => setStep(2), 500)
        setTimeout(() => setStep(3), 1000)
        setTimeout(() => setVisible(false), 2000)
    }, [])

    if (!visible) return null

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black gap-10">
            <img src="/pictures/lod1.svg" alt="pic" className={`transition-opacity duration-300 ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}/>
            <img src="/pictures/lod2.svg" alt="pic" className={`transition-opacity duration-300 ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}/>
            <img src="/pictures/lod3.svg" alt="pic" className={`transition-opacity duration-300 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}/>
        </div>
    )
}