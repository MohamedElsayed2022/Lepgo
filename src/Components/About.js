import React from 'react'
import image from '../imgs/Artboard 4@4x.png'
import bulid from '../imgs/Building-amico.png'
function About() {
  return (
    <div className='AllContent d-flex justify-content-center text-align-center mb-3'>
      <div className='content mt-5'>
        <img src={image} alt='' style={{width:"75%" , backgroundColor:"#F8F8F8" , borderRadius:"50%"}}/>
        <p style={{marginTop:"5px" }}>اجهزة الكترونية</p>
      </div>
      <div className='content mt-5'>
        <img src={bulid} alt='' style={{width:"75%" , backgroundColor:"#F8F8F8" , borderRadius:"50%"}}/>
        <p style={{marginTop:"5px" }}> عقارات</p>
      </div>
      <div className='content mt-5'>
        <img src={image} alt='' style={{width:"75%" , backgroundColor:"#F8F8F8" , borderRadius:"50%"}}/>
        <p style={{marginTop:"5px" }}> ملابس</p>
      </div>
      <div className='content mt-5'>
        <img src={image} alt='' style={{width:"75%" , backgroundColor:"#F8F8F8" , borderRadius:"50%"}}/>
        <p style={{marginTop:"5px" }}> اثاث منزلى</p>
      </div>
      <div className='content mt-5'>
        <img src={image} alt='' style={{width:"75%" , backgroundColor:"#F8F8F8" , borderRadius:"50%"}}/>
        <p style={{marginTop:"5px" }}> نقل برى</p>
      </div>
      <div className='content mt-5'>
        <img src={image} alt='' style={{width:"75%" , backgroundColor:"#F8F8F8" , borderRadius:"50%"}}/>
        <p style={{marginTop:"5px" }}> مخازن</p>
      </div>
      <div className='content mt-5'>
        <img src={image} alt='' style={{width:"75%" , backgroundColor:"#F8F8F8" , borderRadius:"50%"}}/>
        <p style={{marginTop:"5px"  }}> ارض زراعية</p>
      </div>
      <div className='content mt-5'>
        <img src={image} alt='' style={{width:"75%" , backgroundColor:"#F8F8F8" , borderRadius:"50%"}}/>
        <p style={{marginTop:"5px" }}>ادوات بناء</p>
      </div>
      <div className='content mt-5'>
        <img src={image} alt='' style={{width:"75%" , backgroundColor:"#F8F8F8" , borderRadius:"50%"}}/>
        <p style={{marginTop:"5px" }}>اغراض مناسبات</p>
      </div>
      <div className='content mt-5'>
        <img src={image} alt='' style={{width:"75%" , backgroundColor:"#F8F8F8" , borderRadius:"50%"}}/>
        <p style={{marginTop:"5px" }}>ادوات الصيد</p>
      </div>
      <div className='content mt-5'>
        <img src={image} alt='' style={{width:"75%" , backgroundColor:"#F8F8F8" , borderRadius:"50%"}}/>
        <p style={{marginTop:"5px" }}>متعلقات الصناعة</p>
      </div>
      <div className='content mt-5'>
        <img src={image} alt='' style={{width:"75%" , backgroundColor:"#F8F8F8" , borderRadius:"50%"}}/>
        <p style={{marginTop:"5px" }}>مساحات عمل</p>
      </div>
    </div>
  )
}

export default About
