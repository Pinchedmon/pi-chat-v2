'use client'

import { redirect, useSearchParams } from "next/navigation"
import { useEffect } from "react"

const FilterCheck = () => {
    const searchParams = useSearchParams()
    const filter = searchParams.get('filter')
    useEffect(() => {
        filter === null && redirect('posts?filter=wall')
    }, [filter])
    return (
        <></>
    )
}

export default FilterCheck