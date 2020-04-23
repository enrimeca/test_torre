const URL_BIO = 'https://torre.bio/api';
const URL_OPPORTUNITY = 'https://torre.co/api';

  async function callApiBio(endpoint, options = {}) {  
    options.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  
    const url = URL_BIO + endpoint;
    const response = await fetch(url, options);
    const data = await response.json();
  
    return data;
  }

  async function callApiJob(endpoint, options = {}) {  
    options.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  
    const url = URL_OPPORTUNITY + endpoint;
    const response = await fetch(url, options);
    const data = await response.json();
  
    return data;
  }

  const api = {
    information: {
      getBioInformation(username) {  
        return callApiBio(`/bios/${username}`);
      },
      getJobInformation(id) {  
        return callApiJob(`/opportunities/${id}`);
      }
    },
  };
  
  export default api;