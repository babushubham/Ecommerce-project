import {Client,Account, ID} from  'appwrite'
import conf from '../config/conf.js'
import { useDispatch } from 'react-redux';
import { loginData } from '../store/authSlice.js';

class AuthService{
    constructor(){
        this.clint = new Client();
        this.clint
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectid);

        this.account = new Account(this.clint);
    }

    //SignUp method

    async signup(email,password,name){
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name);
           
            
            return userAccount;
        }catch(error) {
            console.error("Signup Error:: Authentication::",error)
            return error;
        }
    }
    

    async login(email,password){
        // const dispatch = useDispatch();
        try{
            const userAccount = await this.account.createEmailPasswordSession(email,password);
            console.log(userAccount)
           
            return userAccount;
            
            
        }
        catch(error){
            console.error("Login Error:: Authentication::",error)
        }
    }

    async getCurrentUser(){
        try {
            const currentUser = await this.account.get();
            console.log(currentUser)
            return currentUser;
        } catch (error) {
            console.error('getcurrentUser::authentication::error',error)
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions();

        } catch (error) {
            console.error(error)
        }
    }
}

const authService = new AuthService();
export default authService;