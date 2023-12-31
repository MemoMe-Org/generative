const biosArray = [
    '🌟 Living life one emoji at a time.',
    '📚 Book lover with a caffeine addiction.',
    '🍔 Professional foodie and burger enthusiast.',
    '🎮 Gamer by night, superhero by day.',
    '🌍 Travel addict exploring one city at a time.',
    '📷 Capturing moments, one snapshot at a time.',
    '🎵 Music in my soul, headphones on, world off.',
    '☕ Coffee connoisseur and early riser.',
    '🚀 Dreaming of intergalactic adventures.',
    '🐶 Proud dog parent and cuddle expert.',
    '✈️ Jetsetter with a passport full of memories.',
    '💪 Fitness freak, one rep at a time.',
    '🎨 Art lover exploring the colorful canvas of life.',
    '🌿 Plant parent nurturing a green oasis.',
    '🍕 Pizza is my love language.',
    '📚 Lost in the pages of a good book.',
    '🌞 Chasing sunsets and good vibes.',
    "🎶 Dance like nobody's watching.",
    '🌮 Taco Tuesday enthusiast, every day.',
    '⚡️ Making the web a better place, one line of code at a time.',
    '🌙 Stargazer and night sky enthusiast.',
    '🎭 Drama queen with a flair for theatrics.',
    '📈 Analyzing data by day, dreaming of graphs at night.',
    '🏄‍♀️ Riding the waves of life, one surfboard at a time.',
    '🌌 Exploring the cosmos, one star at a time.',
    '🌈 Living life in technicolor.',
    '🚲 Two - wheel adventurer, on and off - road.',
    '🎭 Shakespearean at heart, modern in action.',
    '🍣 Sushi lover with chopsticks skills.',
    '💡 Innovating for a brighter future.',
    '🧘‍♂️ Zen master seeking inner peace.',
    '🌆 Cityscape dreamer in a concrete jungle.',
    '🍰 Baking smiles, one cake at a time.',
    '💻 Coding my way through the digital maze.',
    '🌄 Nature lover and sunrise chaser.',
    '🍩 Donut worry, be happy.',
    '🎸 Strumming the chords of life.',
    '🌱 Sustainable living advocate.',
    '🌊 Ocean lover, beach bum.',
    '🧁 Cupcake enthusiast, frosting artist.',
    '📖 Lost in the world of words.',
    '🏞️ Hiking trails and seeking waterfalls.',
    '💼 9 to 5 grind with a 24 / 7 hustle.',
    "🏀 Ballin' on and off the court.",
    '🎬 Movie buff with popcorn skills.',
    "🛹 Skating through life's ups and downs.",
    '🐱 Crazy cat person and proud of it.',
    '🚁 Aiming high and reaching for the skies.',
    '🌧️ Dancing in the rain, not just waiting for the storm to pass.',
    '🍹 Mixologist in the making.',
    '📚 World - building, one story at a time.',
    '🏋️‍♀️ Lifting weights and lifting spirits.',
    '🌻 Spreading positivity like wildflowers.',
    '🎣 Fishing for adventures, one cast at a time.',
    '🚗 Road tripping and map chasing.',
    "🎭 The world is my stage, and life's my script.",
    '🍔 Burger architect, building flavor skyscrapers.',
    '🏞️ Exploring the great outdoors.',
    '🛸 Believer in extraterrestrial life.',
    '🏰 A castle in the clouds kind of dreamer.',
    '🎧 Tuned in to the rhythm of life.',
    '🚀 Rocket scientist by day, stargazer by night.',
    '📸 Capturing smiles and candid moments.',
    '🏄‍♂️ Surfing through the waves of existence.',
    '🎨 Painting the canvas of life with vibrant strokes.',
    '🧘‍♀️ Namaste, finding zen in chaos.',
    '🍕 Life is short, eat dessert first.',
    '🏝️ Island - hopping and beachcombing.',
    '🎤 Karaoke superstar in the shower.',
    "🚴‍♀️ Pedaling through life's adventures.",
    '📚 Writer of stories, creator of worlds.',
    '🌊 Riding the waves of life.',
    '🚁 Aiming high and living larger.',
    '🏔️ Climbing mountains and conquering fears.',
    '🚀 Striving for the stars, one goal at a time.',
    '🍜 Ramen aficionado and noodle lover.',
    '🌻 Sunflower soul, wild heart.',
    "🏹 Archer aiming for life's bullseye.",
    '🚤 Sailing through calm and stormy seas.',
    "🎪 Life is a circus, and I'm the ringmaster.",
    '🍣 Sushi ninja, stealthy with chopsticks.',
    '💻 Navigating the digital universe.',
    '🌠 Stardust in my veins, dreams in my eyes.',
    '🏊‍♂️ Swimming against the current.',
    '🌆 Chasing city lights and urban adventures.',
    '🏄‍♀️ Surfing through the ups and downs.',
    '📖 Reader of books, writer of dreams.',
    '🌵 Desert wanderer and cactus enthusiast.',
    '🌆 Urban explorer, skyscraper admirer.',
    '🚁 Helicopter views and high - flying dreams.',
    '🏟️ Sports fanatic, cheering for the underdog.',
    '🍦 Ice cream guru and flavor explorer.',
    "💃 Dancing through life's rhythms.",
    '🌺 Blossoming like a flower in spring.',
    "🏞️ Nature's therapy, one hike at a time.",
    '🎶 Music curator, playlist maestro.',
    '🚲 Two - wheel adventures, endless horizons.',
    '🚤 Boating through the waters of life.',
    '🎠 Never too old for carousel rides.',
    '🚀 Launching into the unknown, fueled by curiosity.',
    '🌈 Rainbow chaser, daydreamer at heart.',
    "🍭 Candy crushin' my way through life's challenges.",
    '🎠 Forever young, riding the carousel of life.',
    '🌟 Stardust collector, galaxy explorer.',
    '🧜‍♀️ Mermaid vibes, sea salt in my soul.',
    '🧚‍♂️ Believing in magic, one fairy tale at a time.',
    '🌵 Desert wanderer, oasis seeker.',
    '🚀 Space cowboy on a cosmic journey.',
    "🚢 Sailing through life's uncharted waters.",
    '🦸‍♀️ Saving the world, one heroic act at a time.',
    '🎉 Party animal with a wild side.',
    '🌆 Urban jungle navigator, skyscraper scaler.',
    '🌮 Taco truck tracker and salsa aficionado.',
    '🌍 Earth explorer, wanderlust wanderer.',
    '🌻 Sunflower soul, blooming in adversity.',
    '📸 Selfie specialist, picture - perfect life.',
    '🏰 Living in my own fairy tale castle.',
    '🍹 Cocktail chemist, mixing up happiness.',
    '🎮 Leveling up in the game of life.',
    '🎨 Artistic soul, painting my own destiny.',
    '🌊 Riding the waves of adventure.',
    "🛹 Skateboarding through life's twists and turns.",
    '🚲 Pedaling my way to happiness.',
    '🏖️ Beach bum with a passion for sandy toes.',
    '🌌 Stargazing wanderer, galaxy dreamer.',
    '📚 Lost in the pages of my own story.',
    '🌆 Chasing sunsets and dreams.',
    '🍔 Burger enthusiast on a tasty journey.',
    '🚁 Helicopter views, seeing life from new heights.',
    '💡 Bright ideas and brilliant adventures.',
    '🌴 Tropical paradise seeker, island hopper.',
    '🎭 Drama llama, making life a spectacle.',
    '🍕 Pizza lover with cheesy dreams.',
    "🚤 Boating through life's serene waters.",
    '🎤 Karaoke superstar in the shower.',
    '🐉 Dragon tamer, fearless and fiery.',
    "🌲 Nature's whisperer, forest explorer.",
    '🌟 Shooting for the stars, one wish at a time.',
    '🎵 Dancing to the rhythm of my own beat.',
    '🏜️ Desert nomad, sand dune surfer.',
    "🎸 Strumming through life's chords.",
    '🌞 Sunshine enthusiast, spreading rays of joy.',
    '🏞️ Hiking to new heights, peak seeker.',
    '🛸 UFO spotter, believer in the unknown.',
    '🍦 Ice cream lover, scooping up happiness.',
    '📖 Novel explorer, literary adventurer.',
    '🏋️‍♂️ Pumping iron and pumping positivity.',
    '🌆 City slicker with a heart of gold.',
    "🏄‍♀️ Surfing life's waves, catching dreams.",
    '🌮 Taco Tuesday advocate, taco everyday believer.',
    '🍩 Donut aficionado, sprinkling joy wherever I go.',
    '🌍 World traveler, making memories one stamp at a time.',
    '🌈 Chasing rainbows and unicorns in life.',
    '🍹 Sipping on sunshine and tropical vibes.',
    '🌺 Flower child, blooming with positivity.',
    "🏆 Life's a game, and I'm the reigning champ.",
    "🛹 Skating through life's twists and tricks.",
    '🚤 Boating in a sea of adventure.',
    "🚀 Rocketing through life's cosmic mysteries.",
    '🎭 Drama enthusiast, starring in my own story.',
    '📚 Bibliophile building bookish bridges.',
    '🎉 Party animal, always ready to celebrate.',
    '🌆 City lights guide, urban explorer.',
    '🎨 Brushing life with my colorful strokes.',
    '🏄‍♂️ Surfing the waves of my own destiny.',
    "🏞️ Nature's admirer, hiking enthusiast.",
    '🚁 Helicopter views, soaring to new heights.',
    '🌄 Dawn and dusk enthusiast, twilight lover.',
    '🍔 Burger boss, flipping patties and happiness.',
    '🌟 Cosmic dreamer, starry - eyed adventurer.',
    '🐾 Animal whisperer, pet lover extraordinaire.',
    '🌴 Beachcomber on a quest for seashells.',
    '🍕 Pizza party planner, slice of life seeker.',
    "📷 Snapping moments, capturing life's beauty.",
    "🚲 Pedaling through life's scenic routes.",
    '🌞 Sun chaser, vitamin D enthusiast.',
    '🎤 Shower serenader and bathroom balladeer.',
    '🌻 Spreading positivity, one smile at a time.',
    '🏰 Castle builder in the sandbox of dreams.',
    '🏆 Champion of fun and laughter.',
    "🎹 Playing the keys of life's melodies.",
    '🍦 Ice cream lover, melting for adventure.',
    '📖 Writing my story, chapter by chapter.',
    '🧜‍♀️ Mermaid on land, with feet for adventures.',
    '🏜️ Desert wanderer, mirage chaser.',
    "🌈 Rain or shine, I'm here to shine.",
    '🎧 Music in my ears, harmony in my heart.',
    '🌊 Ocean waves and salty kisses.',
    '🌆 Urban adventurer, concrete jungle navigator.',
    '🐱 Crazy cat lover, purring through life.',
    '🚴‍♀️ Cycling towards new horizons.',
    '🌌 Starry - eyed wanderer of the night.',
    '🍰 Baking the world a better place.',
    '🏋️‍♀️ Lifting weights, lifting spirits.',
    '🍣 Sushi enthusiast, mastering the chopsticks.',
    '🚀 Launching into the unknown, fearless explorer.',
    '📸 Capturing laughter, framing joy.',
    '🌱 Green thumb gardener, nurturing life.',
    '🍹 Mixologist creating liquid happiness.',
    "🎵 Dancing through life's melodies.",
    "💭 What's on your mind?"
]

export { biosArray }

// Scraped Online


// const biosArray = (bios.match(/^\d+\.\s*(.*?)$/gm) || []).map((line) => line.replace(/^\d+\.\s*/, ''));
// console.log(biosArray) - Used in removing the numbering