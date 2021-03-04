import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer k4Z5x4Ur91_8ZrC0Q3u6bIVBlHkeq2PwKPLWKm2LVu0SgDaDHEdQ_4oh7PPw7B4OqfcFHVVZCKwSIdtwc8sG70OzD3eZoeOG-9jut2Q0FDXRGfI9hQ3McvfL6Lg-YHYx' // Must have a Capital A  
    }
})
