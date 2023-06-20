import { storageService } from "./storage"
import axios from 'axios'

const API_KEY = 'AIzaSyA13ULgHZv3MrvSQoFX_MR3C2-5ALY-wgQ'
const youtubeDB = 'youtubeDB'
const gYouTubeCache = storageService.loadFromStorage(youtubeDB) || {}

export const weTubeService = {
    askVideo
}

// async function askVideo(value) {
//     try {
//         if (gYouTubeCache[value]) return gYouTubeCache[value]
//         const video = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${API_KEY}&q=${value}`)
//         gYouTubeCache[value] = video.data.items
//         storageService.saveToStorage(youtubeDB, gYouTubeCache)
//         return video.data.items
//     } catch (err) {
//         console.log(err)
//         throw err
//     } finally {
//         console.log('After Youtube service')
//     }
// }

async function askVideo(value) {
    if (gYouTubeCache[value]) return gYouTubeCache[value];

    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${API_KEY}&q=${value}`);
        const videoItems = response.data.items;
        gYouTubeCache[value] = videoItems;
        storageService.saveToStorage(youtubeDB, gYouTubeCache);
        console.log(videoItems);
        return videoItems;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        console.log('After Youtube service');
    }
}
