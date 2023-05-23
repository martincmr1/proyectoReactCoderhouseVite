import { useEffect, useState} from "react"

function useFetch(url){
    let [data, setData] = useState([])

useEffect( ()=> {
 async function leerDatos() {
    const fetchRespuesta = await fetch(url)
    const responseJSON = await fetchRespuesta.json()
    console.log('await respuesta', responseJSON)
    dataJson = responseJSON.results
    setData(dataJson)
 }
 leerDatos()
} ,[])

    return data
}


export default useFetch