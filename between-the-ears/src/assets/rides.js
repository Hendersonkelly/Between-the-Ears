let rides =[
    {
        name: "Alice in Wonderland",
        movie: "Alice in Wonderland",
        height: 0,
        description: ["dark", "loud", "slow"],
        summary:"Take a topsy-turvy trip into the nonsensical world of Disney’s Alice in Wonderland aboard an oversized caterpillar.",
        image: "https://mickeyblog.com/wp-content/uploads/2023/06/Alice-in-Wonderland-Disneyland-720x340.png" ,
        video: "https://www.youtube.com/watch?v=nbud4-dIan8",
        park: "Disneyland",
        site: 'https://disneyland.disney.go.com/attractions/disneyland/alice-in-wonderland/'



    },
    {
        name:'Astro Orbiter',
        movie:'',
        height:0,
        description: ['spinninig'],
        summary:'Pilot your very own rocket ship high in the sky amid a gleaming constellation of orbiting planets.',
        image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/b4/ef/b8/astro-orbiter-disneyland.jpg?w=1200&h=1200&s=1',
        video: 'https://www.youtube.com/watch?v=vehwOWGKGYw',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/astro-orbitor/'
    },
    {
        name:'Autopia',
        movie:'',
        height: 32,
        description: ['loud', 'slow'],
        summary:'Put the pedal to the metal on an unforgettable road trip along a miniature motorway.',
        image:'https://dvcshop.com/wp-content/uploads/2022/02/Autotopia-e1645947466608.jpg',
        video:'https://www.youtube.com/watch?v=goPBcyNc_2Y',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/autopia/'
    },
    {
        name:'Big Thunder Mountain',
        movie:'',
        height:40,
        description: ["small drops", " thrill", 'dark', "loud"],
        summary:'Streak through a haunted gold mine aboard a speeding train on this thrilling coaster-style ride',
        image:'https://www.ocregister.com/wp-content/uploads/migration/ntn/ntnftc-b88491098z.120150825103919000gb5bh99b.10.jpg?w=620',
        video:'https://www.youtube.com/watch?v=1Csw9vCqvbk',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/big-thunder-mountain-railroad/'
    },
    {
        name:'Buzz lightyear Astro Blasters',
        movie:'Toy Story',
        
        height:0,
        description: ['slow','spinning', 'dark', 'loud '],
        summary:'Calling all Space Rangers! Take aim and fire your laser to defeat Zurg during a thrilling space battle.',
        image:'https://myyearwiththemouse.files.wordpress.com/2011/04/buzz-9.jpg',
        video:'https://www.youtube.com/watch?v=2tT6ZZPbuHQ',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/buzz-lightyear-astro-blasters/'
    },
    {
        name:'Casey J. Circus Train',
        movie:'Dumbo',
        
        height:0,
        description: ['slow'],
        summary:'Enjoy a whimsical tour through miniature versions of fairytale locales from classic Disney movies.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/casey-jr-circus-train/casey-jr-circus-train-00.jpg?1686267777673',
        video:'https://www.youtube.com/watch?v=8R4VtpHrXZM',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/casey-jr-circus-train/'
    },
    {
        name:'Chip n Dales:  GADGETcoaster',
        movie:'Chip n Dale:Rescue Rangers ',
        
        height:35,
        description: ['small drops', "thrill"],
        summary:'Twist and turn on a speedy coaster ride built by the inventor mouse from Chip n Dale Rescue Rangers.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/attractions/chip-n-dale-gadgetcoaster/Chip-n-Dale-GADGETcoaster-16x9.jpg?2023-04-03T16:34:27+00:00',
        video:'https://www.youtube.com/watch?v=mQs4MhIHbn4',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/chip-n-dales-gadget-coaster/'
    },
    {
        name:'Davy Crocketts Explorer Canoes',
        movie:'Davy Crockett: King of the Wild Frontier',
        
        height: 0,
        description: ['water'],
        summary:'Paddle down the Rivers of America on a grand oar-venture all the way around Pirate’s Lair on Tom Sawyer Island.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/davy-crocketts-explorer-canoes/davy-crocketts-explorer-canoes-00.jpg?1559891115765',
        video:'https://www.youtube.com/watch?v=-ViLOQLoqEI',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/davy-crocketts-explorer-canoes/'
    },
    {
        name:'Disneyland Railroad',
        movie:'',
        
        height:0,
        description: ["slow", "dark", "loud"],
        summary:'Embark on a relaxing 18-minute scenic journey aboard an authentic steam-powered train around Disneyland Park.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/disneyland-railroad/disneyland-railroad-06.jpg?1559890350809',
        video:'https://www.youtube.com/watch?v=hT_s_9MP4XA',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/disneyland-railroad/'
    },
    {
        name:'Indiana Jones Adventure',
        movie:'Indiana Jones',
        
        height:46,
        description: ["dark", "loud", "scary"],
        summary:'Embark on a fast-paced thrill ride in search of Indiana Jones—enter this cursed temple at your own risk!',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/indiana-jones-adventure/indiana-jones-adventure-00.jpg?1559890500905',
        video:'youtube.com/watch?v=oCG_-v5mfT0',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/indiana-jones-adventure/'
    },
    {
        name:'Its a small world',
        movie:'',
        
        height:0,
        description: ["slow", "water", "loud"],
        summary:'Board a whimsical boat ride for a song-filled journey around the globe—this cherubic chorus is pure joy!',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/attractions/disneyland/its-a-small-world/small-world-exterior-16x9.jpg?1680910257282',
        video:'https://www.youtube.com/watch?v=5iikekGiCi0',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/its-a-small-world/'
    },
    {
        name:'Dumbo the Flying Elephant',
        movie:'Dumbo',
        
        height:0,
        description: ["slow", "spinning"],
        summary:'Soar high in the sky aboard the famous little pachyderm on a fanciful flight for all ages.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/attractions/disneyland/dumbo-the-flying-elephant/dumbo-mom-kids-16x9.jpg?1586560567583',
        video:'https://www.youtube.com/watch?v=1gHLdvet9dY',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/dumbo-the-flying-elephant/'
    },
    {
        name:'Jungle Cruise',
        movie:'Jungle',
        
        height:0,
        description: ["loud", "slow", "water"],
        summary:'Cast off on a guided tour of the world’s most remote rivers where adventure abounds—and the animals get the last laugh.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/jungle-cruise/jungle-cruise-00.jpg?1559890530809',
        video:'https://www.youtube.com/watch?v=H0Iy41fXQNk',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/jungle-cruise/'
    },
    {
        name:'King Arthur Carrousel',
        movie:'Mary Poppins',
        
        height:0,
        description: ["slow", "spinning", " loud"],
        summary:'Sit astride a regal steed at this classic attraction and gently “gallop” through a whirling backdrop of color and sound.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/king-arthur-carrousel/king-arthur-carrousel-00.jpg?1559890545835',
        video:'https://www.youtube.com/watch?v=zVvuz7VXlNc',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/king-arthur-carrousel/'
    },
    {
        name:'Mad Tea Cups',
        movie:'Alice in Wonderland',
        
        height:0,
        description: ["spinning"],
        summary:'Pour yourself into an oversized teacup and spin through a whimsical party.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/attractions/disneyland/mad-tea-party/tea-cup-ride-father-daughters-16x9.jpg?1669764341555',
        video:'https://www.youtube.com/watch?v=5fg5aPoxlHs',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/mad-tea-party/'
    },
    {
        name:'The Many Adventures of Winnie the Pooh',
        movie:'The Many Adventures of Winnie the Pooh',
        height:0,
        description: ["dark", "loud", "slow"],
        summary:'Buzz through Hundred-Acre Wood in an oversized beehive and revisit beloved songs and scenes from Winnie the Pooh.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/many-adventures-of-winnie-the-pooh/many-adventures-of-winnie-the-pooh-00.jpg?1686004041933',
        video:'https://www.youtube.com/watch?v=DI3jvBR5HeM',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/many-adventures-of-winnie-the-pooh/'
    },
    {
        name:'Mark Twain Riverboat',
        movie:'',
        height:0,
        description: ["slow", "water", "rides"],
        summary: 'disneyCruise the scenic Rivers of America on a sightseeing tour aboard a majestic 19th-century paddle boat.land',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/mark-twain-riverboat/mark-twain-riverboat-00.jpg?1645539026331',
        video:'https://www.youtube.com/watch?v=gyHmPrSSbt0',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/mark-twain-riverboat/',
        park: "Disneyland"
    },
    
    {
        name:'Matterhorn Bobsleds',
        movie:'',
        height:42,
        description: ["dark", "loud", "scary", "small drops", "water", "thrill"],
        summary:'Hurtle through a snow-capped mountain on a speeding alpine sled while avoiding the clutches of the Abominable Snowman.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/matterhorn-bobsleds/matterhorn-bobsleds-00.jpg?1559890590831',
        video:'https://www.youtube.com/watch?v=1dfwMiMeCls',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/matterhorn-bobsleds/'
    },
    
    {
        name:'Minnie & Minnies Runaway Railroad',
        movie:'Mickey Mouse',
        height:0,
        description: ["dark", "koud", "slow"],
        summary:'Zoom off on a wild and wacky adventure through Mickey and Minnie’s madcap cartoon world.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/attractions/mickey-minnies-runaway-railway/MMRR-Exterior-16x9.jpg?2023-02-03T17:34:52+00:00',
        video:'https://www.youtube.com/watch?v=lED5BzGKwHI',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/mickey-minnies-runaway-railway/'
    },
    
    {
        name:'Millennium Falcon: Smugglers Run',
        movie:'Star Wars',
        
        height:38,
        description: ["small drops", "thrill", "dark", "loud"],
        summary:'Fly the Millennium Falcon on a thrilling interactive smuggling mission.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/attractions/disneyland/millennium-falcon-smugglers-run/smugglers-run-character-16x9.jpg?1618887090032',
        video:'https://www.youtube.com/watch?v=yNYe2GuKUVU',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/millennium-falcon-smugglers-run/'
    },
    
    {
        name:'Mr. Toads Wild Ride',
        movie:'The Adventures of Ichabod and Mr. Toad',
        
        height:0,
        description: ["dark", "loud", "scary", "slow"],
        summary:'Zig and zag in a motorcar with J. Thaddeus Toad, Esq. on a manic drive through the countryside',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/mr-toads-wild-ride/mr-toads-wild-ride-00.jpg?1686929081587',
        video:'https://www.youtube.com/watch?v=GYp9p6a1ucc',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/mr-toads-wild-ride/'
    },
    
    {
        name:'Pinocchios Daring Journey',
        movie:'Pinocchio',
        
        height:0,
        description: ["slow", "dark", "loud", "scary"],
        summary:'Relive the classic adventures of the wooden puppet who dreamed of becoming a real boy.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/pinocchios-daring-journey/pinocchios-daring-journey-03.jpg?1677892428527',
        video:'https://www.youtube.com/watch?v=61VP2Z2Y2ps',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/pinocchios-daring-journey/'
    },
    
    {
        name:'Pirates of The Caribbean',
        movie:'Pirates of The Caribbean',
        
        height:0,
        description: ["small drops", "water", "dark", "loud", "scary"],
        summary:'Steer a course for the Golden Age of Piracy on a swashbuckling cruise through seas plagued by scoundrels.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/pirates-of-the-caribbean/pirates-of-the-caribbean-00.jpg?1559891011103',
        video:'https://www.youtube.com/watch?v=x2Rd13QWpgk',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/pirates-of-the-caribbean/'
    },
    
    {
        name:'Snow Whites Enchanted Wish',
        movie:'Snow White',
        
        height:0,
        description: ["slow", "dark","loud"],
        summary:'Embark on a magical ride into memorable scenes from Snow White and the Seven Dwarfs.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/attractions/disneyland/snow-whites-enchanted-wish/snow-whites-echanted-wish-dopey-16x9.jpg?1617969873363',
        video:'https://www.youtube.com/watch?v=I7ogvev5PA8',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/snow-whites-enchanted-wish/'
    },
    {
        name:'Space Mountain',
        movie:'',
        
        height:40,
        description: ["small drops", "thrill", "dark","loud", "scary"],
        summary:'Race through the cosmos in the dark to the edge of the galaxy and back on a thrilling roller-coaster ride.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/space-mountain/space-mountain-00.jpg?1686260233133',
        video:'https://www.youtube.com/watch?v=e-Z0kd2l88Y',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/space-mountain/'
    },
    {
        name:'Star Tours: the Adventure Continue',
        movie:'Star Wars',
        
        height:40,
        description: ["small drops", "thrill","dark", "loud"],
        summary:'Make the jump to hyperspace aboard a 3D space flight to legendary destinations from the Star Wars saga.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/star-tours/star-tours-06.jpg?1680910583885',
        video:'https://www.youtube.com/watch?v=EHl1JwZU6Yo',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/star-tours/'
    },
    {
        name:'Star Wars: rise of the Resistance',
        movie:'Star Wars',
        
        height:40,
        description: ["small drops", "thrill","dark","loud", "scary"],
        summary:'Join the Resistance in an epic battle against the First Order on this exciting ride.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/home/destination/rise-of-the-resisstance-interior-16x9.jpg?1671057602731',
        video:'https://www.youtube.com/watch?v=PlyDQSFAphA',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/star-wars-rise-of-the-resistance/'
    },
    {
        name:'Storybook Land Canal',
        movie:'',
        
        height:0,
        description: ["slow", "water"],
        summary:'Cruise through the mouth of Monstro the Whale into a magical land of Disney movie locales—all in miniature.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/storybook-land-canal-boats/storybook-land-canal-boats-00.jpg?1677892701471',
        video:'https://www.youtube.com/watch?v=itACah9rkFw',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/storybook-land-canal-boats/'
    },
    
    {
        name:'Peter Pans Flight',
        movie:'Peter Pan',
        
        height:0,
        description: ["small", "drops","dark", "loud"],
        summary:'Soar over London aboard an enchanted pirate ship to Never Land with the boy who wouldn’t grow up.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disneyland/peter-pans-flight/peter-pan-flight-00.jpg?1684521206340',
        video:'https://www.youtube.com/watch?v=fQexPmLstAA',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/peter-pans-flight/'
    },
    
    {
        name:'Haunted Mansion',
        movie:'Muppets Haunted Mansion',
        
        height:0,
        description: ["dark", "slow", "loud", "scary"],
        summary:'Take your seat in a gloomy Doom Buggy for an eerie tour through this house of happy haunts.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/attractions/haunted-mansion/hanted-mansion-exterior-16x9.jpg?1582648505167',
        video:'https://www.youtube.com/watch?v=xzOnIx0Ypus',
        park:'Disneyland',
        site: 'https://disneyland.disney.go.com/attractions/disneyland/haunted-mansion/'
    },
    
    {
        name:'Golden Zephyr',
        movie:'',
        
        height:0,
        description: ["spinning"],
        summary:'Soar high in the sky in a gleaming retro spaceship inspired by science fiction stories of the 1920s.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/golden-zephyr/golden-zephyr-00.jpg?1677891994447',
        video:'https://www.youtube.com/watch?v=ukli00IVGyA',
        park:'Disney California Adventure',
        site: 'https://disneyland.disney.go.com/attractions/disney-california-adventure/golden-zephyr/'
    },
    
    {
        name:'Goofys Sky School',
        movie:'The Goofy Movie',
        
        height:42,
        description: ["small drops", "thrill", "loud"],
        summary:'Soar high—and learn to fly the Goofy way—on this coaster-style attraction.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/goofys-sky-school/goofys-sky-school-00.jpg?1669767710381',
        video:'https://www.youtube.com/watch?v=ue0PPp6Ck7w',
        park:'Disney California Adventure',
        site: 'https://disneyland.disney.go.com/attractions/disney-california-adventure/goofys-sky-school/'
    },
    
    {
        name:'Grizzly River Run',
        movie:'',
        
        height:47,
        description: ["Small drops", "water", "thrill", "spinning"],
        summary:'Embark on a thrilling whitewater raft adventure that splashes you down a roaring California river deep in the mountains.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/gallery/attractions/disney-california-adventure/grizzly-river-run/grizzly-river-run-gallery00.jpg?1678997090081',
        video:'https://www.youtube.com/watch?v=xK48SXssbwQ',
        park:'Disney California Adventure',
        site: 'https://disneyland.disney.go.com/attractions/disney-california-adventure/grizzly-river-run/'
    },
    
    {
        name:'Guardians of the Galaxu: Mission BREAKOUT',
        movie:'Guardians of the Galazy',
        
        height:40,
        description: ["big drops", "thrill","dark","loud","scary"],
        summary:'Join Rocket on a thrilling mission to rescue the Guardians of the Galaxy from the Collector’s fortress.',
        image:'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/guardians-of-the-galaxy-mission-breakout/new/gotg-breakout-16x9.jpg?1559891296177',
        video:'https://www.youtube.com/watch?v=TrJZB7VhfrI',
        park:'Disney California Adventure',
        site: 'https://disneyland.disney.go.com/attractions/disney-california-adventure/guardians-galaxy-mission-breakout/'
    },
    {
        name:"Incredicoaster",
        movie: "The Incrdibles",
        height:48 ,
        description: ["big drops", "thrill", "loud"],
        summary: "Join the Incredibles in a mad dash to catch Jack-Jack as he wreaks havoc throughout this high-speed chase!",
        image: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/incredicoaster-guests-16x9.jpg?1676429891890",
        video:"https://www.youtube.com/watch?v=IPSaD2VVq6g",
        park:"Disney California Adventure",
        site: "https://disneyland.disney.go.com/attractions/disney-california-adventure/incredicoaster/"
    },
    {
        name:"Inside Out Emotional Whirlwind",
        movie: "inside Out",
        height: 0,
        description:["spinning "],
        summary: "Tap into Riley’s Emotions when you take a sense-sational spin around the whimsical world inside her mind’s Headquarters.",
        image: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/attractions/disney-california-adventure/emotional-whirlwind/emotional-whirlwind-inside-out-16x9.jpg?1677892094483",
        video:"https://www.youtube.com/watch?v=i7IZvquw-rk",
        park:"Disney California Adventure",
        site: "https://disneyland.disney.go.com/attractions/disney-california-adventure/emotional-whirlwind/"
    },
    {
        name:"Jessies Critter Carrousel",
        movie: "Toy Story",
        height:0 ,
        description: ["slow", "spinning"],
        summary: "Saddle up for a whimsical spin on Jessie’s favorite critter pals from her wild west adventures—yee-haw!",
        image: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/attractions/disney-california-adventure/jessies-critter-carousel/jessies-critter-carousel-16x9_1.jpg?1677892128416",
        video:"https://www.youtube.com/watch?v=mxQjvLmPsqg",
        park:"Disney California Adventure",
        site: "https://disneyland.disney.go.com/attractions/disney-california-adventure/jessies-critter-carousel/"
    },
    {
        name:"Jumpin Jellyfish",
        movie: "The Little Mermaid",
        height:40 ,
        description: ["small drops"],
        summary: "Float high into the sky above Paradise Bay aboard a colorful jellyfish before gently sinking back down to dry land.",
        image: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/jumpin-jellyfish/jumpin-jellyfish-00.jpg?1677904029836",
        video:"https://www.youtube.com/watch?v=Ex9mo0-hfB0",
        park:"Disney California Adventure",
        site: "https://disneyland.disney.go.com/attractions/disney-california-adventure/jumpin-jellyfish/"
    },
    {
        name:"The Little Mermaid- Ariels Undersea Adventure",
        movie: "The Little Mermaid",
        height: 0,
        description: ["slow", "dark", "loud"],
        summary: "Journey under the sea for a whimsical musical adventure awash with scenes from the animated Disney classic.",
        image: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/gallery/attractions/disney-california-adventure/little-mermaid-ariels-undersea-adventure/little-mermaid-ariels-undersea-adventure-gallery01.jpg?1639109075110",
        video:"https://www.youtube.com/watch?v=x6G2x_48HWI",
        park:"Disney California Adventure",
        site: "https://disneyland.disney.go.com/attractions/disney-california-adventure/little-mermaid-ariels-undersea-adventure/"
    },
    {
        name:"Luigis Rollickin Roadsters",
        movie: "Cars",
        height:32 ,
        description: ["thrill", "spinning", "loud"],
        summary: "Climb aboard a colorful car that “dances” its way across Luigi’s lot to tire-tapping Italian tunes!",
        image: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/luigis-rollickin-roadsters/luigis-rollickin-roadsters-00.jpg?1673244620173",
        video:"https://www.youtube.com/watch?v=650ms7RpjLo",
        park:"Disney California Adventure",
        site: "https://disneyland.disney.go.com/attractions/disney-california-adventure/luigis-rollickin-roadsters/"
    },
    {
        name:"Maters Junkyard Jamboree ",
        movie: "Cars",
        height: 32,
        description: ["thrill"],
        summary: "Ride along aboard a tractor during a tow-tappin’ hoedown hosted by Mater from the Disney and Pixar film Cars.",
        image: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/maters-junkyard-jamboree/maters-junkyard-jamboree-00.jpg?1673244848630",
        video:"https://www.youtube.com/watch?v=aIQI-SiCh14",
        park:"Disney California Adventure",
        site: "https://disneyland.disney.go.com/attractions/disney-california-adventure/maters-junkyard-jamboree/"
    },
    {
        name:"Monsters Inc. Mike and Sully to the Rescue",
        movie: "Monsters Inc.",
        height:0 ,
        description: ["dark", "loud","slow"],
        summary: "Zip through scenes from the Disney and Pixar film Monsters, Inc. on a wild taxi ride with familiar scare-acters.",
        image: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/monsters-inc/monsters-inc-00.jpg?1680910429654",
        video:"https://www.youtube.com/watch?v=rnv4c5KGHpA",
        park:"Disney California Adventure",
        site: "https://disneyland.disney.go.com/attractions/disney-california-adventure/monsters-inc/"
    },
    {
        name:"Pixar Pal-A-Round Swinging/Non-Swinging",
        movie: "",
        height:0 ,
        description: ["small drops"],
        summary: "Climb aboard for an exhilarating Ferris wheel adventure that swoops, swings, and slides—high above Pixar Pier.",
        image: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier/pixar-pal-around-night-16x9.jpg?1677892461478",
        video:"https://www.youtube.com/watch?v=Ut67gwXRtNY",
        park:"Disney California Adventure",
        site: "https://disneyland.disney.go.com/attractions/disney-california-adventure/pixar-pal-a-round-swinging"
    },
    {
        name:"Radiator Springs Racers",
        movie: "Cars",
        height:40 ,
        description: ["small drops", "thrill", "dark","loud"],
        summary: "Start your engines! Zoom through the desert landscape of Cars Land, inspired by the Disney and Pixar movie Cars.",
        image: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/radiator-springs-racers/radiator-springs-racers-00.jpg?1681256207684",
        video:"https://www.youtube.com/watch?v=nOYWMySQESY",
        park:"Disney California Adventure",
        site: "https://disneyland.disney.go.com/attractions/disney-california-adventure/radiator-springs-racers/"
    },
    {
        name:"Silly Symphony Swings",
        movie:"",
        height:40,
        description: ["spinning"],
        summary: "Get swept off your feet and into the air as you wheel above it all in graceful, soaring circles.",
        image: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/silly-symphony-swings/silly-symphony-swings-00.jpg?1677892529386",
        video: "https://www.youtube.com/watch?v=YBvxVPrdTJ8",
        park: "Disney California Adventure",
        site:"https://disneyland.disney.go.com/attractions/disney-california-adventure/silly-symphony-swings/"
    },
    {
        name:"Soarin Around the World",
        movie:"",
        height:40,
        description: ["small drops", 'slow','dark','loud'],
        summary: "Feel the wind in your face during an airborne hang-gliding flight over the wonders of the world.",
        image: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/soarin-over-the-world/soarin-over-the-world-00.jpg?1682522587106",
        video: "https://www.youtube.com/watch?v=NmyBNgaRqbQ",
        park: "Disney California Adventure",
        site:"https://disneyland.disney.go.com/attractions/disney-california-adventure/soarin/"
    },
    {
        name:"Toy Story Mania",
        movie:"Toy Story",
        height:0,
        description: ["dark", "loud"],
        summary: "Zip through an exhilarating 4D midway-style game starring Toy Story characters—and blast away!",
        image: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/dlr/parks-and-tickets/attractions/disney-california-adventure/toy-story-mania/toy-story-mania-00.jpg?1680910656544",
        video: "https://www.youtube.com/watch?v=oKNoMNUAtS4",
        park: "Disney California Adventure",
        site:"https://disneyland.disney.go.com/attractions/disney-california-adventure/toy-story-mania/"
    },
    {
        name:"WEB SLINGERS: A Spider-Man Adeventure",
        movie:"Spider-Man",
        height:0,
        description: ["dark", "loud", "spinning"],
        summary: "Wrangle rogue Spider-Bots run amok during this mayhem-filled mission at Avengers Campus!",
        image: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/attractions/disney-california-adventure/web-slingers-spider-man-adventure/webslingers-night-16x9.jpg?1617916703474",
        video: "https://www.youtube.com/watch?v=rHf70Agwr4Y",
        park: "Disney California Adventure",
        site:"https://disneyland.disney.go.com/attractions/disney-california-adventure/web-slingers-spider-man-adventure/"
    }
    
 
    
]

export default rides