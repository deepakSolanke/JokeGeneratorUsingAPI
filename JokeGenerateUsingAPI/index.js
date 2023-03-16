const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

// api from API Ninjas
const apiKey = '6QiNIf0isKz5MTktEsaFyA==QJWrnFALMWGP45g3';

const options = {
    method: "GET",
    headers: {
        'X-Api-Key': apiKey,
    },
};

// https://api.api-ninjas.com/v1/dadjokes?limit=  -- API URL
const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

async function getJoke() {

    try {
        jokeEl.innerText = "Updating....";
        btnEl.disabled = true;
        btnEl.innerHTML = "Loading....";

        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerHTML = "Tell me Joke";


        // console.log(data[0].joke);
        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An Error Occured..Try Again Some Time..";
 
        btnEl.disabled = false;
        btnEl.innerHTML = "Tell me Joke";

    }

}

btnEl.addEventListener("click", getJoke);   