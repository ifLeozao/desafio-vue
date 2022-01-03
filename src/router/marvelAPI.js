import md5 from 'js-md5';
import axios from 'axios';

const urlBaseMarvel = 'https://gateway.marvel.com:443/v1/public/';
const apiKey = '4a7b6789486c32b3c2746f1a78c2aea7';
const timestamp = Number(new Date())
const hash = md5.create()
const PUBLIC_KEY = '4a7b6789486c32b3c2746f1a78c2aea7'
const PRIVATE_KEY = '3d0e9ff417626b8fde1236f9b2358489c3301e79'
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

export default {
    getAllComics: (limit, callback) => {
        const urlComics = urlBaseMarvel + 'comics?apikey=' + apiKey +  '&ts=' + timestamp + '&hash=' + hash;
        axios.get(urlComics).then((comics) => {
            if (callback) {
                callback(comics);
            }
        })
    }
}