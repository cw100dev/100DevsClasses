//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value;
 // const url = 'https://pokeapi.co/api/v2/pokemon/'+choice
    const url = 'https://api.nasa.gov/planetary/apod?api_key=UKdY1NZ3iGAaB5DV13eOS4CdiXnNvSZuTzqy8NaN&date='+choice;
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        document.querySelector('h3').innerText = data.explanation;
        document.querySelector('h2').innerText = data.title;
        if(data.media_type == 'image'){document.querySelector('img').src = data.hdurl;
        document.querySelector('iframe').src = '';
      }
        else if (data.media_type == 'video'){document.querySelector('img').src = '';
        document.querySelector('iframe').src = data.url;}
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
