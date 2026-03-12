import type { AboutContent, WorkplaceDescriptionItem } from '@/types'
import type { RichTextDocument } from '@/lib/contentful'
import { BLOCKS } from '@contentful/rich-text-types'

const toRichTextDocument = (paragraphs: string[]): RichTextDocument => ({
  nodeType: BLOCKS.DOCUMENT,
  data: {},
  content: paragraphs.map(paragraph => ({
    nodeType: BLOCKS.PARAGRAPH,
    data: {},
    content: [
      {
        nodeType: 'text',
        value: paragraph,
        marks: [],
        data: {},
      },
    ],
  })),
})

const workplaceDescriptions: WorkplaceDescriptionItem[] = [
  {
    miniQuote: 'Work should be a place you genuinely enjoy.',
    text: toRichTextDocument([
      'The people you work with play a big part in making that possible. I take my work seriously, but I don’t take myself too seriously — positivity and curiosity go a long way toward building a great team and creating better solutions.',
    ]),
  },
  {
    text: toRichTextDocument([
      "I'm collaborative, communicative, and genuinely enjoy solving problems alongside others. I like keeping things clear and structured so everyone on the team knows what's happening and can focus on building, not guessing.",
    ]),
  },
  {
    pullQuote:
      'My goal is to make collaboration productive, enjoyable, and confidence-inspiring for the whole team.',
  },
  {
    miniQuote: 'I don’t just participate — I help make work easier for everyone.',
    text: toRichTextDocument([
      'I’m always happy to mentor and support others, while staying open to suggestions and direction. I take ownership of projects and ensure they move forward smoothly, whether it means pairing on a tricky problem, reviewing a design, sharing a helpful pattern, or guiding QA.',
    ]),
  },
]

const aboutContent: AboutContent = {
  hero: {
    title: 'About Me',
    subtitle: "I'm a frontend developer based in Guelph, ON Canada.",
    body: toRichTextDocument([
      'Since 2021, I’ve been building front-end interfaces that are clear, accessible, and thoughtfully structured — the kind that quietly do their job so well you barely notice them. That sweet spot where design systems, usability, and clean code overlap? That’s my comfort zone.',
      'When I close my laptop, you might find me dangling off a rock wall, paddling across a lake, wandering a hidden trail, or digging in my garden. On quieter days, I keep my mind busy with crochet, a good book, or a challenging puzzle. Whether it’s a boulder problem or a codebase, working through something complex is where I thrive.,',
    ]),
    image: {
      file: {
        url: '//images.ctfassets.net/83wvckqpi655/6ZhiU20MqwZ9Bhk8VMEIua/af5fe6fab0884b52a048f2c4d9c6fb9e/portrait-right.png',
        description: 'Portrait of Patti Perlock',
      },
    },
  },
  myStory: {
    title: 'My Story',
    tagLine: 'From geophysics to frontend, code has been my constant.',
    image: [],
    description: toRichTextDocument([
      'I started in computer science and later applied that foundation to computational modeling and statistical analysis in geophysics.',
      'My path wasn’t linear. I ran my own dog training business, worked as a core logger at a gold mine, and eventually became a database administrator.',
      'Different roles. Different industries. But one constant: I automated everything I could. If there was a repetitive task, I was already halfway through scripting it.',
      'Even when coding wasn’t in my job description, it was how I thought.',
    ]),
  },
  frontend: {
    title: 'Why Frontend',
    description: toRichTextDocument([
      'In 2020, I enrolled in a remote web development bootcamp and was hooked immediately. I loved seeing something I built appear instantly on screen, debugging until everything clicked, and shaping the architecture behind complex frontend systems.',
      'Turning designs into seamless, pixel-perfect experiences is where creativity meets structure — and that’s the intersection I feel most at home in.',
      'I love building things that people can interact with and experience directly. There’s something magical about writing code and seeing it come to life as a polished, functional interface.',
    ]),
  },
  collaboration: {
    tagLine: 'Turning diverse perspectives into seamless experiences.',
    image: [
      {
        file: {
          url: '/ui-vs-ux.png',
          description: 'UI vs UX illustration',
        },
        description: 'UI vs UX illustration',
      },
    ],
    description: toRichTextDocument([
      'I thrive on cross-disciplinary collaboration with designers, backend engineers, product managers, and QA.',
      'By understanding how each discipline approaches user experience and system design, I combine creativity, structure, and technical depth to deliver experiences people genuinely enjoy using.',
    ]),
  },
  workplace: {
    title: 'Hello, Friend',
    images: [],
    description: workplaceDescriptions,
  },
}

export default aboutContent
