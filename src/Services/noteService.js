import Axios from './axiosService';

 const httpService = new Axios();

export default class noteService {

    baseurl="http://fundoonotes.incubation.bridgelabz.com/api/";

    addNote = (data, token) => {
        return httpService.Post(`${this.baseUrl}notes/addNotes`,data,{
        headers: {
            Authorization: `${token}`,
        },
        });
    }

}