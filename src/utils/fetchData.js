export const exerciseOptions = {
  method: 'GET',
  params: {
    limit: '2000' },
  headers: {
    'X-RapidAPI-Key': '3f753f43f1msh72d9aff0b5768b7p1ac85cjsn9805fb853207',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3f753f43f1msh72d9aff0b5768b7p1ac85cjsn9805fb853207',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}

