// import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { LessonBody, LessonCard } from '~/Lesson'
import { Icon } from './examples/Icon'
import { FaTrash } from 'react-icons/fa'

function Heading({children, text, tag: Comp = "h1", icon: Icon}) {
  return <Comp className="heading-size-1">{text} <Icon /> {children}</Comp>
}

function App({name, message}) {
  return <div id="id" className="heading-size-1"><Heading text={name} icon={FaTrash}><FaTrash />this is children<FaTrash /></Heading> <span>{message}</span><FaTrash /></div>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App name="World" message="Hello"/>) // jsx(App) -> react will call this fn
