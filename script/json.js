document.getElementById('getData').addEventListener('click', getData);

function getData(event) {
    event.preventDefault();
    const ul = document.getElementById('characters');

    fetch('https://swapi.co/api/people/5') // Call the fetch function passing the url of the API as a parameter
        .then(function (response) {
            // for handling the data from the API
            return response.json();
        })
        .then((data) => {
            let result = `<h1> Characters From StarwarsAPI</h1>`;
            for (let i = 0; i < 5; i++) {
                result +=
            `<div>
                <ul class="info">
                    <li> id: ${data.id}</li>
                    <li> Name: ${data.name}</li>
                    <li> height: ${data.height} </li><br />
                    <li> mass: ${data.mass}</li>
                </ul>
            </div>`;
                document.getElementById('result').innerHTML = result;
            }
        })}