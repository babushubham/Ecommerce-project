import {Client,Account, ID} from  'appwrite'
import conf from '../config/conf.js'

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
        try{
            const userAccount = await this.account.createEmailPasswordSession(email,password);
        }
        catch(error){
            console.error("Login Error:: Authentication::",error)
        }
    }
}

const authService = new AuthService();
export default authService;