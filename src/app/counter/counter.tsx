"use client"

import { useState } from "react"
export default function Couter() {
    const [count, setCount] = useState<number>(0)
    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}
