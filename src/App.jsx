import { useState } from 'react'
import './App.css'
import PostForm from './components/PostForm.jsx'
import { RecoilRoot } from 'recoil'



function App() {

  return (
    <RecoilRoot>
       <PostForm />
    </RecoilRoot>
  )
}

export default App
