import {get} from "../utilities/fetch";
import {MovieReactions} from "../models/model";

export const addLike = (movieId: string): Promise<MovieReactions> => {
    return new Promise<MovieReactions>((resolve, reject) => {
        get('/secured/reaction/7/likes/'+movieId)
            .then((response: MovieReactions) => resolve(response))
            .catch(error => reject(error));
    })
}

export const addHate = (movieId: string): Promise<MovieReactions> => {
    return new Promise<MovieReactions>((resolve, reject) => {
        get('/secured/reaction/7/hates/'+movieId)
            .then((response: MovieReactions) => resolve(response))
            .catch(error => reject(error));
    })
}