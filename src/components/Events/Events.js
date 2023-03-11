import React from 'react'
import './Events.scss'
import { useEffect } from 'react'

const Events = () => {

  
let progress = 50
let startX = 0
let active = 0
let isDown = false
const speedWheel = 0.02
const speedDrag = -0.1
const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))
const $items = document.querySelectorAll('.carousel-item')
const $cursors = document.querySelectorAll('.cursor')

const displayItems = (item, index, active) => {
  const zIndex = getZindex([...$items], active)[index]
  item.style.setProperty('--zIndex', zIndex)
  item.style.setProperty('--active', (index-active)/$items.length)
}
const animate = () => {
  progress = Math.max(0, Math.min(progress, 100))
  active = Math.floor(progress/100*($items.length-1))
  
  $items.forEach((item, index) => displayItems(item, index, active))
}

useEffect(() => {
animate();
}, []);


$items.forEach((item, i) => {
  item.addEventListener('click', () => {
    progress = (i/$items.length) * 100 + 10
    animate()
  })
})
const handleWheel = e => {
  const wheelProgress = e.deltaY * speedWheel
  progress = progress + wheelProgress
  animate()
}

const handleMouseMove = (e) => {
  if (e.type === 'mousemove') {
    $cursors.forEach(($cursor) => {
      $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })
  }
  if (!isDown) return
  const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
  const mouseProgress = (x - startX) * speedDrag
  progress = progress + mouseProgress
  startX = x
  animate()
}

const handleMouseDown = e => {
  isDown = true
  startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
}

const handleMouseUp = () => {
  isDown = false
}
// document.addEventListener('mousewheel', handleWheel)
// document.addEventListener('mousedown', handleMouseDown)
// document.addEventListener('mousemove', handleMouseMove)
// document.addEventListener('mouseup', handleMouseUp)
// document.addEventListener('touchstart', handleMouseDown)
// document.addEventListener('touchmove', handleMouseMove)
// document.addEventListener('touchend', handleMouseUp)

  return (
    <div className="carousel"
    onMouseDown={handleMouseMove}
    onWheel={handleWheel}
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUp}
    onTouchStart={handleMouseDown}
    onTouchMove={handleMouseMove}
    onTouchEnd={handleMouseUp}
    >
      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">Paris</div>
          <div className="num">01</div>
          <img alt="" src="https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g=" />
        </div>
      </div>

      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">Warsaw</div>
          <div className="num">02</div>
          <img alt="" src="https://media.istockphoto.com/id/1150545984/it/foto/palazzo-moderno-di-lusso-con-piscina.jpg?s=612x612&w=0&k=20&c=Pbrai_VGc9tUviMCF1UaBErdS1YGyIVWsD29jzMZwTY=" />
        </div>
      </div>

      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">Madrid</div>
          <div className="num">03</div>
          <img
            alt="" src="https://media.istockphoto.com/id/1214351345/it/foto/guardando-direttamente-lo-skyline-del-quartiere-finanziario-nel-centro-di-londra-immagine-di.jpg?s=612x612&w=0&k=20&c=oNNbPzPvcQ-4RA6AeatNIxHQIafBiXmDRtUUY0Ska-I="
          />
        </div>
      </div>

      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">Sydney</div>
          <div className="num">04</div>
          <img alt="" src="https://media.istockphoto.com/id/904390980/it/foto/foto-di-architettura-contemporanea-astratta.jpg?s=612x612&w=0&k=20&c=_P4Wmx5nq5MeDuimpNklKCBlrLovmCyd9lfiMKeJZDs=" />
        </div>
      </div>

      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">Istanbul</div>
          <div className="num">05</div>
          <img alt="" src="https://media.istockphoto.com/id/130408311/it/foto/piscina-allesterno-della-casa-moderna-al-crepuscolo.jpg?s=612x612&w=0&k=20&c=ZoVjx7uDjoHKmpM1ayW6UR1SQOoYh_xx-QMG_qeOYs0=" />
        </div>
      </div>
    </div>
  )
}

export default Events