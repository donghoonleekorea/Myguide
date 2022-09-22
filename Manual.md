# Step by step

*Already have locally installed [MongoDB] and installed [ThunderClient] in [VSCode]

1. Make an empty repository with app's name in [Github] and clone it to my laptop

2. In [Excalidraw] I draw each page with components to visualize the whole web. 
(e.g. localhost:6789/)
  Header -> logo and search bar
  Tourlist (Barcelona) -> tour info with img, city, title (clickable and slide) 
  Tourlist (Roma) -> tour info with img, city, title (clickable and slide) 
  Contact info -> company info
  Footer -> Home, Tours, My page, etc
(e.g. localhost:6789/tour:params)
  Header
  Tour's main Img
  Tour's Country and City
  Tour's Title
  Tour's Description
  Creator's name
  Creator's img
  Creator's description
  Contact info
  Tourlist (same city) -> tour info with img, city, title (clickable and slide) 
  Footer

3. In [Excalidraw] Make Tour's schema
   {
    id: 1,
    country: 'spain',
    city: 'barcelona',
    title: 'explore_Gotic_strict',
    creator: {
        name: 'fulanito',
        description: '...',
        img: '...',
        tours: [tour1, tour2, tour3, tour4]   
    },
    img: 'assets/new',
    audio: 'audio/barcelona_fulanito_1',
    sample: 'sample/barcelona_fulanito_1',
    description: '...',
  }

4. In [Excalidraw] Make User's schema

  {
    email: 'abc@gmail.com',
    password: 'helloworld',
    firstName: 'Code',
    lastName: 'Works',
    userTours: [],
  }

5. Create 'server' folder through [VSCode]
6. Initialize npm using 'npm init' from [terminal]
7. Add necessary dependencies : [bycrpt], [cors], [express], [express-session], [mongoose]
8. Create 'index.js', 'router.js', 'db.js' files inside the 'server' folder
9. Inside the 'server' folder create models folder and inside 'tour.js', 'user.js'
10. Inside the 'server' folder create controllers folder and inside 'tour.js', 'user.js'
11. Inside the 'server' folder create middlewares folder and inside 'auth.js'

