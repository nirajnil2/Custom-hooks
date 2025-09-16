import React, { useEffect, useState } from 'react';

function useIsonline() {
    const [isonline, setisonline] = useState(window.navigator.onLine);

    useEffect(() => {
        window.addEventListener("online", () => {
            setisonline(true);
        });
        window.addEventListener("offline", () => {
            setisonline(false);
        });
    }, []);

    return isonline;
}

export default useIsonline;
