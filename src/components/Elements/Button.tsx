'use client'
import { scrollToSection } from '@/utils/utils'
import React from 'react'

export default function Button(props) {
    const handleClick = () => {
        if(props.scrollto){
            scrollToSection(props.scrollto)
        }
    }
  return (
    <div {...props}
        onClick={handleClick}
    >{props.children}</div>
  )
}
