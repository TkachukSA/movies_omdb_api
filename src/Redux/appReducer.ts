import {Dispatch} from 'redux'
import API, {FilmDescriptionType, ResponseType} from "../api/api";


export type MoviesResponseType = {
    body: ResponseType[] ,
    headersBody:ResponseType[],
    filmDescription: FilmDescriptionType

}
const initialState: MoviesResponseType = {body: [], headersBody:[], filmDescription:{} as FilmDescriptionType}

type MoviesActionsTypes = ReturnType<typeof SetMoviesAC>
    |ReturnType<typeof SetHeadersAC>
    |ReturnType<typeof FilmDescriptionAC>

export const moviesReducer = (state: MoviesResponseType = initialState, action: MoviesActionsTypes): MoviesResponseType => {
    switch (action.type) {
        case "SET_SEARH_RESULT":
            return {...state, body: [...action.body]}

        case "SET_HEADERS":{
          return   {...state, headersBody: [...action.body]}
        }
        case "FILM_DESCRIPTION":{
            return {...state, filmDescription: {...action.body}}
        }
        default:
            return state;
    }
};

export const SetMoviesAC = (body: ResponseType[]) => ({type: 'SET_SEARH_RESULT', body} as const)
export const SetHeadersAC = (body: ResponseType[]) => ({type: 'SET_HEADERS', body} as const)
export const FilmDescriptionAC = (body: FilmDescriptionType  ) => ({type: 'FILM_DESCRIPTION', body} as const)


export const getDataFromServer = (title: string) => {
    return (dispatch: Dispatch<any>) => {
        API.searchFilmsByTitle(title)
            .then((res) => {
                dispatch(SetMoviesAC(res.data.Search))
                dispatch(FilmDescriptionAC({} as FilmDescriptionType))
            }).catch((r)=>{
                alert(r)
        })
    }
}

export const getHeadersFromUI = () => {
    return (dispatch: Dispatch<any>) => {
        API.searchFilmsByTitle('2020')
            .then((res) => {
                dispatch(SetHeadersAC(res.data.Search))
            }).catch((r)=>{
            alert(r)
        })
    }
}

export const getFilmDescription = (id: string) => {
    return (dispatch: Dispatch<any>) => {
        API.searchFilmsByType(id)
            .then((res) => {
                dispatch(FilmDescriptionAC(res.data))
                dispatch(SetMoviesAC([] as ResponseType[]))
            }).catch((r)=>{
            alert(r)
        })
    }
}