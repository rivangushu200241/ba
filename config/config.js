const TABLE_NAME = 'all-for-you';
const config = {
    PORT: process.env.PORT || 5000,
    //DB_CONNECTION: `mongodb://localhost/${TABLE_NAME}`,
    DB_CONNECTION: `mongodb+srv://2100813768:C4BRX87h8bAK36tm@all-for-you.kijyq33.mongodb.net/all-for-you?retryWrites=true&w=majority`,
    SECRET: 'Q2UTfx7iAFdQxkdo2LtiEf68frrTdIM9',
    SALT: 10,
    COOKIE_NAME: 'jwt',
    CLOUDINARY_NAME: 'dmby7t9rd',
    CLOUDINARY_API_KEY: 969295341919954,
    CLOUDINARY_API_SECRET: 'h5Js0IYmpawBxBMnBOCsINTYhoc'
    // CLOUDINARY_STORAGE: 'pza5zln6'
}

module.exports = config;