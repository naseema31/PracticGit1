import cryptojs from 'crypto-js';
export default class CommonUtils{
    private secretKey:string;

    constructor(){
        this.secretKey=process.env.SECRET_KEY ? process.env.SECRET_KEY :"";

        if(process.env.SECRET_KEY){
            this.secretKey=process.env.SECRET_KEY;
        }else{
            throw new Error("please provide Secret Key while starting execution.");
        }
    }
    public encryptData(data:string){
        const encryptedData=cryptojs.AES.encrypt(data,this.secretKey).toString();
        console.log(encryptedData);
        return encryptedData;
    }
    public decryptData(encData:string){
        const decryptedData=cryptojs.AES.decrypt(encData,this.secretKey).toString(cryptojs.enc.utf8);
        return decryptedData;    
    }

}