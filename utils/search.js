const search = async (search = '', page = 1) => {
  const response = await fetch(`https://swapi.dev/api/people/?search=${search}&page=${page}`)
  const data = await response.json()
  return data;
};

export default search;
