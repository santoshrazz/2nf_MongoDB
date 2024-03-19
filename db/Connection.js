import mongoose from 'mongoose'

const url = `mongodb://127.0.0.1:27017/2NF_Mongoose`
export const connector = () => {
    console.log(`connecting`);
    mongoose.connect(url).then(() => {
        console.log(`Connected SuccessFully`);
    }).catch((error) => {
        console.log(`Failed to connect`, error);
    })
}

