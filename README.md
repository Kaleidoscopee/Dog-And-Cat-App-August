# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# CTD-App-August

Hello and welcome to my app. This is meant to be an exercise in API calls. 

8/1/24 - 
I currently have a skeleton HTML setup based on some sketches and HTML I had written down in a notebook. I hop to quickly test the API and my ability to pull information, before moving on to focus on CSS. 

8/10/24 - 4:35am
Okay can't really prolong it much more, have to test if I can make the API woek. Spent the past week reviewing DOM, asych, promise, catch, then, etc. 
I feel like Web Dev Simplified has been super helpful in certain concepts especially Promises (https://www.youtube.com/watch?v=DHvZLI7Db8E)
From here where the code is i'll just test getting the info and getting it to display stating with the temperature, and then the weather (rain,sunny, cloudy, etc). 

8/10/24 - 11:55am
Took a nap after some studying and were back. Have to get over that fear of failure and test the syntax I got from (https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/)

8/10/24 - 6:01pm
Okay, back again. Should've just read these articles to begin with made it much easier with examples. I guess the concepts from the videos are wearing off. 

8/10/24 - 7:05pm
Just searched Times Square Long and Lat and got this (https://www.latlong.net/place/times-square-nyc-usa-7560.html), plugged it into (https://open-meteo.com/en/docs#hourly=temperature_2m&temperature_unit=fahrenheit) and then used (https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/) to help write my fetch. Not seeing the temperature so goign to have to figure out why. Oh actually it's a console log, will have to make it post to the HTML. Probably through DOM. 

8/10/24 - 7:39pm
I tried the original examples as a framework and realized I should just write it out myself since the framework are for those specific examples. Tried it on a live server and checked the console, but it shows "Failed to load resource: the server responded with a status of 404 (Not Found)" Going to see if it's just that one or if I messed up the Fetch. Oh wait! Just reloaded and the data shows UP!!!!

"{latitude: 40.762505, longitude: -73.97511, generationtime_ms: 0.029087066650390625, utc_offset_seconds: 0, timezone: 'GMT', …}"

Since it's in this format I just have to check the documentation again to see how I'm going ot extract only the temperature to present. I'm going to assume the same thing, but dot notation to specify. Oh the weather looks off and I assume it's the elevation being 91, just googled it and it should be 10 meters or 33 feet. I'll check the API again and update the link if need be. 

8/10/24 - 7:48pm
Okay just read the documentation and messed with the settings a bit. 

"The elevation used for statistical downscaling. Per default, a 90 meter digital elevation model is used. You can manually set the elevation to correctly match mountain peaks. If &elevation=nan is specified, downscaling will be disabled and the API uses the average grid-cell height. For multiple locations, elevation can also be comma separated."

Okay so everything works, but the elevation still comes up as 91 despite putting &elevation=nan in the link. Maybe it's a settings option. I'll have to check again.  

8/10/24 - 8:07pm
Okay so luckily my fetch works, but the API is returning the temperature at an elevation of 91 meters no matter what I do, and i don't think knowing it's 168 degrees Farenheight above Times Square is very helpful. Going to have to pivot, luckily that mainly just mweans the HTML content, the rest of the code should be reusable. 

8/10/24 - 8:42pm
Took a food break, so I'll have to use another API and shift focus of the project. It's been a bit since I've used vite, but should just be an install and then a matter of keeping the API key within the env file under a variable, then putting that variable within the code. 

8/10/24 - 10:08pm
Okay so Vite requires Node.js and I'll go ahead and download since this is a new hardrive. 

8/10/24 - 10:28pm
Okay Vite is installed, but now I messed up since it's within the Weather App directory as if it's a seperate folder within the app. Now I have to find out how to move it up the hierarchy and the main focus, while copying over the relevant code. Also making it part of the repository I suppose. Also need to figure out how to make it ignore certain files when updating the commit as I remember certain files like package-lock.json take forever to send to github. Going to commit now, and then look it up alongside fixing the app hierarchy. 

8/10/24 - 11:52pm
Okay back froma  shower and some coffee, lets fix this app in the directory and put the code in the relevant files.

8/11/24 - 12:13am
Moved all original code int o Vite's fiel structure. Once deleted it looks like it goes directly into the Vite folder, so I'll leave it for now to save time. 

8/11/24 - 1:12am 
Found it, the .env file (https://vitejs.dev/guide/env-and-mode.html) is where you put the API keys to recall later through the variable. 

8/11/24 - 1:30am
So it seems I have everything from what I remember putting the API Key in the env file so no one can see it, and just calling it from the request link in Fetch, but the console is giving me 

Had to also delete Vite and React logo from jsx. Maybe that'll fix it??

Okay so it looks like multiple errors pop up 
-"react-dom_client.js?v=bb34a7b9:19411 Uncaught 
ReferenceError: dogApiKey is not defined
    at App (App.jsx:9:85)
    at renderWithHooks (react-dom_client.js?v=bb34a7b9:11546:26)
    at mountIndeterminateComponent (react-dom_client.js?v=bb34a7b9:14924:21)
    at beginWork (react-dom_client.js?v=bb34a7b9:15912:22)
    at beginWork$1 (react-dom_client.js?v=bb34a7b9:19751:22)
    at performUnitOfWork (react-dom_client.js?v=bb34a7b9:19196:20)
    at workLoopSync (react-dom_client.js?v=bb34a7b9:19135:13)
    at renderRootSync (react-dom_client.js?v=bb34a7b9:19114:15)
    at recoverFromConcurrentError (react-dom_client.js?v=bb34a7b9:18734:28)
    at performConcurrentWorkOnRoot (react-dom_client.js?v=bb34a7b9:18682:30)"

    Going to have to see whythis keeps coming up, maybe I have to do that Vite_ thing? Just want to make sure the API isn't visible client side. 

8/11/24 - 1:53am
Okay so after doing the VITE_ it made it possible for the variable to work? Also changed the variablename. It now shows in console, just need it to show in HTML. 

8/11/24 - 2:39am
It looks like to change the reponse grabbed from the JSON data you'll have to use DOM with dot notation to specify what info will be taken and pushed into HTML. (https://www.youtube.com/watch?v=zUcc4vW-jsI)

Oh looks like the way i had my .env leaked my api. I'll have to figure that out as well as remove my 3 most recent commits from the repository. 

8/11/24
Waiting to put my API key, according to this video (https://www.youtube.com/watch?v=17UVejOw3zA) I shoul dhave put require('dotenv').config(); so i put it in my main.jsx 

Okay so my issue was using Vite_, but that was unnecessary as it made it open for the user to see. So just get rid of that and have the key in a variable in your env and use that variable in your JS. 