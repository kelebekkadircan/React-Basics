import React from 'react'
import './modal.css'

export default function Modal({ score }) {
    return (
        <>
            <div className='text-center bg-slate-200 px-20 py-10 text-5xls' >
                <div className='text-gray-700'>Başarıyla Tamamladınız</div>
                <div>Skor:  {score}</div>
                <div>Her soru 100 puan değerindedir.</div>
                <div onClick={() => window.location = "/"} className='modal-btn'>Yeniden Başla</div>
            </div>

        </>
    )
}
