import { useEffect, useState } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        handleResize();

        window.addEventListener("resize", handleResize);

        // The cleanup is to prevent memory leaks
        const cleanup = () => {
            console.log("Runs if a useEffect dependency changes");
            window.removeEventListener("resize", handleResize);
        }

        return cleanup;
    }, []);

    return windowSize;
}

export default useWindowSize;