/* import axios from 'axios'; */

// eslint-disable-next-line no-undef
//

/* var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

export const postProfile = async (data) => {
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow',
  };

  fetch(URL_API, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log('✅ Enviado correctamente');
      console.log(result);
    })
    .catch((error) => {
      console.log('🤨 Algo esta fallando');
      console.log('error', error);
    });
}; */
const URL_API = 'https://peaceful-mesa-85586.herokuapp.com/api/profiles';

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

export const postProfile = async (data) => {
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: 'follow',
  };

  fetch(URL_API, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};
