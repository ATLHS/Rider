import React, {useState, useEffect} from 'react';

const useNavColor = pathname => {
    const [color, setColor] = useState()
    useEffect(() => {
        switch (pathname) {
            case "/":
                setColor("text-light")
                break;
            case "/drivers":
                setColor("text-light")
                break;
            case "/signin":
                setColor("text-dark")
                break;
            case "/signup":
                setColor("text-light")
                break;
            case "/riderssignup":
                setColor("text-dark")
                break;
            case "/driverssignup":
                setColor("text-dark")
                break;
        }
    })

    return [color];
}

export default useNavColor;