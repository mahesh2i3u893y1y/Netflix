
export const OPTIONS    = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer'+ process.env.REACT_APP_TMDB_KEY,
    }
  };
  
 export const IMAGE_CMD = "https://image.tmdb.org/t/p/w500/"

export const SUPPORTED_LANG = [{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"},{identifier:"telugu",name:"Telugu"}]

