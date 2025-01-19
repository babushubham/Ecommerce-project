const conf ={
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectid : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDbid : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteUserCollectionId : String(import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID),

}

export default conf;