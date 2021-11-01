import giveMeAJoke from '../node_modules/give-me-a-joke';
import axios from 'axios';

// import {getDadJoke} from "random-joke-getter";

giveMeAJoke.getRandomDadJoke((joke) => {
    console.log('De grap is: ' + joke)
})

async function fetchJoke() {
    try {
        const result = await axios.get('https://api.chucknorris.io/jokes/random');
        console.log(result);
    } catch(e) {
        console.log(e);
    }
}

fetchJoke();