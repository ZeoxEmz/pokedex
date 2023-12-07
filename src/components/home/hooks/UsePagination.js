import { useState } from "react"
import { useDispatch } from "react-redux"
import { getPokemons } from "../../../redux/action"

export const UsePagination = ({ord})=>{
    const [offset,setOffset] = useState(0)
    const [limit,setLimit] = useState(20)
    const [isLoading,setIsLoading] = useState(false)
    const dispatch = useDispatch()


    const nextPage = async ()=>{
        if(isLoading) return
        try {
            setIsLoading(true)
            const newLimit = limit + 20
            const newOffset = offset + 20 
            await dispatch(getPokemons({ord,offset:newOffset,limit:newLimit}))
            setLimit(newLimit)
            setOffset(newOffset)
        } catch (error) {
            console.error("error al cambiar de pagina", error.message)
        }
        finally{
            setIsLoading(false)
        }
    }

    const prevPage = async ()=>{
        if(isLoading || offset === 0) return
        try {
            setIsLoading(true)
            const newLimit = Math.max(limit - 20 ,20)
            const newOffset = Math.max(offset - 20 ,0)
            await dispatch(getPokemons({ord,offset:newOffset,limit:newLimit}))
            setLimit(newLimit)
            setOffset(newOffset)
        } catch (error) {
            console.error("error al cambiar de pagina", error.message)
        }
        finally{
            setIsLoading(false)
        }
    }

    return {nextPage,prevPage,isLoading}
}