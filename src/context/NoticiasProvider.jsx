import { useState,useEffect, createContext, Children } from "react";
import axios from "axios";



const NoticiasContext = createContext();

const NoticiasProvider = ({children}) =>{

    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalNoticias, setTotalNoticias] = useState(0);


    useEffect(()=>{
        const consultarAPI = async()=>{
            const key = import.meta.env.VITE_API_KEY;
            const url = `https://newsapi.org/v2/top-headlines?country=mx&pageSize=21&category=${categoria}&apiKey=${key}`;

            const {data} = await axios(url);

            setNoticias(data.articles);
            setTotalNoticias(data.totalResults);
            setPagina(1);
        }
        consultarAPI();

    },[categoria])

    useEffect(()=>{
        const consultarAPI = async()=>{
            const key = import.meta.env.VITE_API_KEY;
            const url = `https://newsapi.org/v2/top-headlines?country=mx&pageSize=21&page=${pagina}&category=${categoria}&apiKey=${key}`;

            const {data} = await axios(url);

            setNoticias(data.articles);
            setTotalNoticias(data.totalResults);
        }
        consultarAPI();

    },[pagina])

    const handleChangeCategoria = e=>{
        e.preventDefault();
        setCategoria(e.target.value);
    }

    const handleChangePagina = (e,valorActual)=>{
        setPagina(valorActual);
    }

    return(
        <NoticiasContext.Provider
        value={
            {
                categoria,
                handleChangeCategoria,
                noticias,
                pagina,
                totalNoticias,
                handleChangePagina

            }
        }>
        {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext;