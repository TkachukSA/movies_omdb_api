import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getDataFromServer, getFilmDescription, getHeadersFromUI, MoviesResponseType} from "./Redux/appReducer";
import {AppRootStateType} from "./Redux/state";
import {InputForm} from "./features/InputForm";
import {FilmDescriptionType, ResponseType} from "./api/api";
import {HeadersFilms} from "./features/headersFilms/HeadersFilms";
import {FilmDescription} from "./features/filmDescription/FilmDescription";
import Footer from "./footer/Footer";

function App() {

    const dispatch = useDispatch()
    let movies = useSelector<AppRootStateType, MoviesResponseType>(state => state.movies)
    let filmDescription = useSelector<AppRootStateType, FilmDescriptionType>(state => state.movies.filmDescription)
    /*let a = useSelector<AppRootStateType, ResponseType[]>(state => state.movies.headersBody)*/
    const [changeTitle, setChangeTitle] = useState('');

    useEffect(() => {
        dispatch(getHeadersFromUI())
    }, [filmDescription])


    const searchFilm = () => dispatch(getDataFromServer(changeTitle))
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChangeTitle(e.currentTarget.value)
    }

    const decriptionsFelm = (id: string) => {
        dispatch(getFilmDescription(id))
    }

    return (


        <div className="App">


            {/*{
                a.map(t => <div>{t.Title}</div>)
            }*/}

            <InputForm onChange={onChange} value={changeTitle} searchFilm={searchFilm}/>
            <HeadersFilms decriptionsFelm={decriptionsFelm}/>
            {filmDescription.Title &&  <FilmDescription
                decriptionsFelm={decriptionsFelm}
                imdbID={filmDescription.imdbID}
                Title={filmDescription.Title }
                Plot={filmDescription.Plot}
                Poster={filmDescription.Poster}
            />}

            {
                 movies.body.map(t=><div>{
                    <FilmDescription
                        decriptionsFelm={decriptionsFelm}
                        imdbID={t.imdbID}
                        Title={t.Title }
                        Plot={t.Type}
                        Poster={t.Poster}
                    />
                }</div>)
            }
<Footer/>

        </div>
    );
}

export default App;
