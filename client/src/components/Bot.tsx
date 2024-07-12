import { useEffect } from "react";

const tg = window.Telegram.WebApp;

export const Bot: React.FC = () => {

    useEffect(() => {

        tg.ready();

    }, [])

    const onClose = () => {

        tg.close();

    }

    return (

        <>

            <button onClick={onClose}>Закрыть</button>

        </>

    );

}; 
