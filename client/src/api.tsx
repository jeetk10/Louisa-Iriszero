import axios from 'axios';

async function getNews() {
  try {
    const res = await axios.get('http://localhost:5000/news');
    console.log(res);
    return await res.data;
  } catch (error) {
    console.error(error);
  }
}



export default getNews