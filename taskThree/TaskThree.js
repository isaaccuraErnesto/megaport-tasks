const fetchLocations = async () => {
  const response = await fetch('https://api.megaport.com/v2/locations');
  const responseJSON = await response.json();
  const activeLocations = responseJSON.data.filter((location) => {
    return location.status.toLowerCase() === 'active';
  });
  return activeLocations;
};

fetchLocations()
  .then((response) => console.log(response))
  .catch((error) => {
    console.log('An error ocurred while fetching data');
    console.log(error);
  });
