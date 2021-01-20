import Axios from './axiosService';
const httpService= new Axios();

export default class UserService {
     baseurl="http://fundoonotes.incubation.bridgelabz.com/api/";

   registration = (data) => {
       return httpService.Post(`${this.baseurl}user/userSignUp`,data);
   }
   signin =  (data) => {
       return httpService.Post(`${this.baseurl}user/login`, data);
   }
   forgotPassword = (data) => {
       return httpService.Post(`${this.baseurl}user/reset`, data);
   }
   resetpassword = (data,token) => {
       return httpService.Post(`${this.baseurl}user/reset-password`,data,{
           headers: {
               Authorization: `${token}`,
           },
       });
   }

}