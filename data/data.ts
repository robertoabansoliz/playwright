import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    SAUCEDEMOURL: 'https://www.saucedemo.com/'
}

export const CREDENTIALS = {
    SAUCEDEMOUSER: process.env.SAUCEDEMOUSER,
    SAUCEDEMOPASSWORD: process.env.SAUCEDEMOPASSWORD,
    SAUCEDEMOLOCKEDUSER: 'locked_out_user',
    SAUCEDEMOINVALIDUSER: 'invalidUser'
}

export const CHECKOUT = {
    FIRSTNAME: 'firstName',
    LASTNAME: 'lastName',
    ZIPCODE: '0000'
}
