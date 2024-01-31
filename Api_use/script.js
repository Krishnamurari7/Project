const URL = "https://cat-fact.herokuapp.com/facts";


const getFact = async() => {
    console.log("loading...");
const response = await fetch(URL);
console.log(response);
};