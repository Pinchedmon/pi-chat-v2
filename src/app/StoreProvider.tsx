'use client'
import { store } from '@/lib/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'


export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {


    // const storeRef = useRef()
    // if (!storeRef.current) {
    //     // Create the store instance the first time this renders
    //     storeRef.current = store
    // }

    return <Provider store={store}>{children}</Provider>
}