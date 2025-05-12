import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
{children}
<h2>San pham yeu thich</h2>
        </div>
    )
}
