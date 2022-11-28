import Typed from 'typed.js'
import { useEffect, useRef } from "react";

export default function Profile() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Soooon...", "SOON.....", "Soooooooon..", "Soon..."], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 100,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        // border-2 border-indigo-600
        <div className=''>
            <h1 className='text-center m-28 text-4xl'>Content <span ref={el}></span></h1>
        </div>
    )
}
