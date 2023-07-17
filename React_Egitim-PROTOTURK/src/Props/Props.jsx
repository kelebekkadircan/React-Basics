import React from 'react'
import { useState } from "react";
import Button from "../Components/Button";
import Tab from "../Components/Tab";

function Props() {

    const [activeTab, setActiveTab] = useState(1)

    return (
        <>
            <div>Props</div>

            <div style={{ padding: 20 }} >

                <button onClick={() => setActiveTab(2)} className="rounded border p-2 bg-slate-50 mb-4">
                    Aktif Tabı Değiştir
                </button>

                <Tab activeTab={activeTab} setActiveTab={setActiveTab} >

                    <Tab.Panel title="profil" >1.Tab</Tab.Panel>
                    <Tab.Panel title="hakkında" > 2.Tab</Tab.Panel>
                    <Tab.Panel title="Ayarlar" >3.Tab</Tab.Panel>

                </Tab>

            </div>


            <div style={{ padding: 20 }}>
                <Button variant="mor">
                    Buton child örneği
                </Button>
                <Button text="Buton Örneği" variant="success" />
                <Button text="Buton Örneği" variant="danger" />
                <Button text="Buton Örneği" variant="warning" />
                <Button text="Buton Örneği" />
            </div >




        </>
    )
}

export default Props