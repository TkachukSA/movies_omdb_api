import React, {ChangeEvent} from 'react';
import s from './HeadersFilms.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/state";
import {FilmDescriptionType, ResponseType} from "../../api/api";


type HeadersFilmsType = {
    decriptionsFelm: (id: string) => void
}


export const HeadersFilms: React.FC<HeadersFilmsType> = ({decriptionsFelm}) => {


    let a = useSelector<AppRootStateType, ResponseType[]>(state => state.movies.headersBody)
    let b = useSelector<AppRootStateType, FilmDescriptionType>(state => state.movies.filmDescription)

    return (

        <div className={s.header}>
            <div className={s.nav}>
                {
                    a.map(t => <div onClick={() => {decriptionsFelm(t.imdbID)}}>
                        <img src={t.Poster}/></div>)

                }
            </div>
            <div>
                {/*{
                    b && <div>{b.Country}</div>
                }*/}
            </div>
        </div>
    );
}