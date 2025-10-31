export interface Chapter {
  title: string
  content: string
  image: string
}

export interface Story {
  title: string
  description: string
  image: string
  chapters: Chapter[]
}

export const storyData: Record<string, Story> = {
  "national-park-adventure": {
    title: "Cousins in the National Parks",
    description: "Goo Goo and Carolyn embark on an exciting journey to visit her bear cousins in America's most beautiful national parks.",
    image: "/story1.png",
    chapters: [
      {
        title: "Chapter 1: The Big Adventure Begins",
        content:
          "Carolyn surprised Goo Goo with exciting news - they were going on a road trip to visit her bear cousins in America's national parks! Goo Goo could hardly contain her excitement as they packed their camping gear and favorite snacks.",
        image: "/scene1.png",
      },
      {
        title: "Chapter 2: Yellowstone Wonders",
        content:
          "Their first stop was Yellowstone, where Goo Goo met her cousin Bella the Black Bear. Together they watched Old Faithful erupt and learned about how the park rangers help protect the wildlife. Carolyn took lots of pictures of their adventures.",
        image: "/scene2.png",
      },
      {
        title: "Chapter 3: Yosemite Dreams",
        content:
          "In Yosemite, Goo Goo's cousin Grizzly Gary showed them the towering sequoia trees and taught them about keeping the park clean for all animals. Carolyn and Goo Goo were amazed by the beautiful waterfalls and massive granite cliffs.",
        image: "/scene3.png",
      },
      {
        title: "Chapter 4: Home Sweet Home",
        content:
          "After visiting all her cousins and learning about nature conservation, Goo Goo and Carolyn headed home with wonderful memories and new appreciation for America's wild places. They promised to visit again next summer!",
        image: "/scene4.png",
      },
    ],
  },
  "summer-overalls": {
    title: "Summer Overalls",
    description: "Goo Goo gets a new outfit for summer.",
    image: "/story5.png",
    chapters: [
      {
        title: "Chapter 1: A Warmer Day",
        content:
          "The flowers were blooming and the air felt different. Winter was over. Goo Goo slipped on her mint green sweater, like she always did, and headed outside to play.",
        image: "/scene18.png",
      },
      {
        title: "Chapter 2: Too Hot",
        content:
          "The sun was bright. The birds were singing. But Goo Goo was too warm. Her sweater felt heavy in the heat. She sat under a tree and fanned herself with a big leaf.",
        image: "/scene19.png",
      },
      {
        title: "Chapter 3: A New Idea",
        content:
          "Carolyn watched Goo Goo resting in the shade. She went inside and opened her sewing basket. She found soft, red and white checkered fabric. It gave her an idea.",
        image: "/scene20.png",
      },
      {
        title: "Chapter 4: Sewing Time",
        content:
          "Carolyn snipped and stitched. Rosie the rabbit brought string. The older girls minded Goo Goo. Oliver the owl flapped gently to keep her cool. Piece by piece, something new began to take shape.",
        image: "/scene21.png",
      },
      {
        title: "Chapter 5: A Perfect Fit",
        content:
          "When the overalls were ready, Goo Goo tried them on. They were light, breezy, and just right for summer. She twirled in the sun and smiled. The sweater could wait for fall.",
        image: "/scene22.png",
      },
    ],
  },
  "honey-adventure": {
    title: "The Great Honey Adventure",
    description: "Goo Goo discovers a magical beehive and learns about friendship with the busy bees.",
    image: "/story2.png",
    chapters: [
      {
        title: "Chapter 1: The Sweet Discovery",
        content:
          "One sunny morning, Goo Goo was wandering through the meadow when she caught the most wonderful smell. It was sweet and golden, floating on the warm breeze like a magical invitation.",
        image: "/scene9.png",
      },
      {
        title: "Chapter 2: Meeting the Bees",
        content:
          "Following her nose, Goo Goo discovered a beautiful beehive nestled in an old oak tree. The busy bees were working hard, and their leader, Queen Buzzy, welcomed her with a warm smile.",
        image: "/scene10.png",
      },
      {
        title: "Chapter 3: Learning to Help",
        content:
          "Queen Buzzy taught Goo Goo how to help gather nectar from the flowers. Together, they worked as a team, and Goo Goo learned that the sweetest honey comes from friendship and cooperation.",
        image: "/scene11.png",
      },
      {
        title: "Chapter 4: The Sweet Reward",
        content:
          "At the end of the day, Queen Buzzy shared a special jar of honey with Goo Goo. As she tasted the golden sweetness, she realized that sharing adventures with friends made everything even more delicious.",
        image: "/scene12.png",
      },
    ],
  },
  "seattle-catapult-adventure": {
    title: "Goo Goo's Trip to Seattle",
    description: "Goo Goo builds a catapult to fly to Seattle and visit Carolyn.",
    image: "/story4.png",
    chapters: [
      {
        title: "Chapter 1: Missing Carolyn",
        content:
          "Carolyn was in Seattle for the summer, and Goo Goo missed her so much. When Carolyn called to say hello and talk about the big tall Space Needle, Goo Goo wished she could be there too.",
        image: "/scene13.png",
      },
      {
        title: "Chapter 2: A Big Idea",
        content:
          "Then Goo Goo had a silly idea — what if she built a catapult to fly all the way to Seattle? Her forest friends giggled, but they all wanted to help.",
        image: "/scene14.png",
      },
      {
        title: "Chapter 3: Building the Catapult",
        content:
          "Rosie the rabbit found bendy branches, Oliver the owl drew a plan, and everyone helped tie, twist, and tug. Soon, the biggest catapult in the forest was ready!",
        image: "/scene15.png",
      },
      {
        title: "Chapter 4: Up, Up, Up!",
        content:
          "With a countdown and a BOING! Goo Goo flew through the sky! She zipped past clouds, waved at birds, and saw rivers and mountains far below.",
        image: "/scene16.png",
      },
      {
        title: "Chapter 5: Back Together",
        content:
          "At last, Goo Goo landed with a gentle bump — right on Carolyn's balcony! Carolyn laughed, Goo Goo squeaked, and they hugged and twirled with joy. Best friends, together again.",
        image: "/scene17.png",
      },
    ],
  },
  "forest-friends": {
    title: "New Friends in the Forest",
    description: "When Goo Goo gets lost, woodland creatures help her find her way back to Carolyn.",
    image: "/story3.png",
    chapters: [
      {
        title: "Chapter 1: Lost in the Woods",
        content:
          "Goo Goo had wandered deeper into the forest than ever before while playing hide and seek with Carolyn. The tall trees seemed to whisper secrets, but now she couldn't find her way back. Her heart began to worry.",
        image: "/scene5.png",
      },
      {
        title: "Chapter 2: A Helping Paw",
        content:
          "Just when Goo Goo felt most scared, a friendly rabbit named Rosie hopped out from behind a mushroom. 'Don't worry,' she said with a gentle smile, 'we'll help you find your way back to Carolyn!'",
        image: "/scene6.png",
      },
      {
        title: "Chapter 3: The Forest Family",
        content:
          "Soon, Rosie introduced Goo Goo to Oliver the wise owl and Penny the playful squirrel. Together, they formed a rescue team, each using their special skills to help guide Goo Goo back to her best friend.",
        image: "/scene7.png",
      },
      {
        title: "Chapter 4: Home Sweet Home",
        content:
          "As the sun set, Goo Goo's new friends led her safely back to Carolyn, who had been searching everywhere. She learned that even when you're lost, kindness and friendship can always light the way back to where you belong.",
        image: "/scene8.png",
      },
    ],
  },
}

// Story display order
const storyOrder = [
  "seattle-catapult-adventure",
  "national-park-adventure",
  "honey-adventure",
  "forest-friends",
  "summer-overalls",
]

// Helper to get all story slugs
export const getStorySlugs = () => Object.keys(storyData)

// Helper to get story list for the stories page in display order
export const getStoryList = () => {
  return storyOrder.map(slug => {
    const story = storyData[slug]
    return {
      slug,
      title: story.title,
      description: story.description,
      image: story.image,
    }
  })
}

