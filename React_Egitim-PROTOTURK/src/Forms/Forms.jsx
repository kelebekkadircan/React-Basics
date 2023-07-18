import React from 'react'
import { useState } from "react";







function Forms() {

    const genders = [
        { key: '1', value: 'erkek' },
        { key: '2', value: 'kadın' },
    ]

    const categoriyList =
        [
            { key: '1', value: 'JavaScript' },
            { key: '2', value: 'Php' },
            { key: '3', value: 'Css' },
            { key: '4', value: 'Html' },

        ]


    const checkRule = (key, checked) => {
        setRules(rules => rules.map(rule => {
            if (key === rule.key) {
                rule.checked = checked
            }

            return rule
        }))
    }
    const [name, setName] = useState('Kadircan');
    const [description, setDescription] = useState('');
    const [gender, setGender] = useState('0')
    const [category, setCategory] = useState([])
    const selectedGender = genders.find(g => g.key === gender)
    const selectedCategories = category && categoriyList.filter(c => c.key)
    // const [rule, setRule] = useState(true)
    const [rules, setRules] = useState([
        { key: 1, value: '1. kuralı kabul ediyorum', checked: false },
        { key: 2, value: '2. kuralı kabul ediyorum', checked: false },
        { key: 3, value: '3. kuralı kabul ediyorum', checked: true },
    ]);
    const enabled = rules.every(rule => rule.checked)



    return (
        <>
            <div>Forms</div>


            <button className="rounded border-2 bg-indigo-200 p-2" onClick={() => setName('Mehmet')}>Adı Değiştir</button>
            <input onChange={e => setName(e.target.value)} className="rounded border bg-slate-50" type="text" value={name} />
            <textarea value={description} onChange={e => setDescription(e.target.value)} className="border bg-slate-50 mt-5 ml-4"> </textarea>

            <div>
                {description}
            </div>

            <div>

                <select onChange={e => setGender(e.target.value)} value={gender} className="border-2 rounded bg-slate-50 mt-2" >
                    <option value="">Seçin</option>
                    {genders.map((gender) => (
                        <option value={gender.key} key={gender.key}> {gender.value} </option>
                    ))}

                    {/* <option value="1">Erkek</option>
          <option value="2">Kadın</option>
          <option value="3">Atak Helikopteri</option> */}
                </select>

            </div>
            <pre>
                {JSON.stringify(selectedGender, null, 2)}
            </pre>
            {/* {selectedGender} */}

            <div>

                <select onChange={e => setCategory([...e.target.selectedOptions].map(option => +option.value))} multiple={true} value={category} className="border-2 rounded bg-slate-50 mt-2" >
                    <option value="">Seçin</option>
                    {categoriyList.map((category) => (
                        <option value={category.key} key={category.key}> {category.value} </option>
                    ))}

                    {/* <option value="1">Erkek</option>
          <option value="2">Kadın</option>
        <option value="3">Atak Helikopteri</option> */}
                </select>


            </div>


            <pre>
                {JSON.stringify(selectedCategories, null, 2)}
            </pre>

            <br />
            <button className="rounded border p-2 bg-lime-400 " disabled={!rules}>Devam Et</button>

            <label htmlFor="">
                <input type="checkbox" checked={rules} onChange={e => setRules(e.target.checked)} />
                Kuralları Kabul Ediyorum
            </label>

            <br />

            {rules.map(rule => (
                <label key={rule.key} htmlFor="">
                    <input className="p-1 m-2 space-x-2" type="checkbox" checked={rule.checked} onChange={e => checkRule(rule.key, e.target.checked)} />
                    {rule.value}
                </label>
            ))}

            <br />

            <pre>
                {JSON.stringify(rules, null, 2)}
            </pre>


            <br />


            <button className="rounded border p-2 bg-lime-400 " disabled={!enabled}>Devam Et</button>







        </>
    )
}

export default Forms