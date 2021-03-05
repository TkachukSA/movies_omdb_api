import React, {ChangeEvent} from 'react';
import s from './FilmDescription.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/state";
import {FilmDescriptionType, ResponseType} from "../../api/api";


type DescriptionType = {
    decriptionsFelm: (id: string) => void
    Title?: string
    Year?: string
    imdbID: string
    Type?: string
    Plot?: string
    Poster?: string
}


export const FilmDescription= (props: DescriptionType) => {


    let a = useSelector<AppRootStateType, ResponseType[]>(state => state.movies.headersBody)
    let b = useSelector<AppRootStateType, FilmDescriptionType>(state => state.movies.filmDescription)

    return (

        <div className={s.mainBlock}>
            <div className={`${s.container} ${s.nainContainer}`}>

                <div className={s.photo}>
                    {<img onClick={() => {props.decriptionsFelm(props.imdbID)}} src={props.Poster && props.Poster}/>}
                </div>

                <div className={s.text}>
                    <div>{props.Title && props.Title}</div>
                    <div>{props.Year && props.Title}</div>
                    <div>{props.Type && props.Title}</div>
                    <div>{props.Plot && props.Plot}</div>
                </div>

            </div>

        </div>
    );
}