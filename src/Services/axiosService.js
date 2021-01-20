import axios from 'axios';
import { data } from 'jquery';
// const httpService = new Axios();
export default class axiosService{

    Post=(url,data, isHeaderRequired=false) => {
 return axios.post(url,data,isHeaderRequired)
    }

    Get =(url,data, isHeaderRequired=false) => {
        return axios.post(url, isHeaderRequired)
           }

    // getNotes = () => {
    //     let token = localStorage.getItem("userToken");
    //     return httpService.Get(`${this.baseUrl}/notes/getNotesList`,{
    //         headers: {
    //             Authorization: '${token}',
    //         },
    //     });
    // }

    // deleteNote = (data, token) => {
    //     return httpService.Post(`${this.baseUrl}/notes/trashNotes`, data,{
    //         headers: {
    //             Authorization: `${token}`,
    //         },
    //     });
    // }
       
}

