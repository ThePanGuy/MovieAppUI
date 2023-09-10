import {get} from "../utilities/fetch";
import {MovieReactions} from "../models/model";

export const addLike = (movieId: string): Promise<MovieReactions> => {
    return new Promise<MovieReactions>((resolve, reject) => {
        get('/user/7/likes/'+movieId)
            .then((response: MovieReactions) => resolve(response))
            .catch(error => reject(error));
    })
}