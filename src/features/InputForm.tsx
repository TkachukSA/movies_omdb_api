import React, {ChangeEvent} from 'react';
import s from './InputForm.module.css'


type InputFormType = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    searchFilm: ()=>void
}


export const InputForm: React.FC<InputFormType> = ({value, onChange, searchFilm}) => {

    return (
        <div className={s.header}>
            <div className={s.title}> <h1>OMDb API</h1></div>
            <div className={s.nav}>
                <input value={value}
                       onChange={onChange}
                       onKeyPress={(e)=>{if (e.key === 'Enter') {searchFilm() }}} />
                <button onClick={searchFilm}>Search</button>
            </div>



        </div>

    );
}


