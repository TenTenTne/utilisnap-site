import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/index'
import AdsenseCalc from './pages/adsense-calc'
// 앞으로 여기에 다른 기능도 추가됨

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adsense-calc" element={<AdsenseCalc />} />
    </Routes>
  )
}

