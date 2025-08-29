import artImg from '../assets/img/art.jpg';
import favImg from '../assets/img/fav.jpg';
import postImg from '../assets/img/post.jpeg';
import designImg from '../assets/img/sketch.jpg';
import paintingImg from '../assets/img/painting.jpg';
import arton from '../assets/img/2018.jpg';
import nitton from '../assets/img/2019.jpg';
import tjugo from '../assets/img/2020.jpg';
import tjuett from '../assets/img/2021.jpg';
import tjutva from '../assets/img/2022.jpg';
import blakulla from '../assets/img/blakulla.jpg';
import subterra from '../assets/img/subterra.png';
import jonkoping from '../assets/img/jonkoping.jpg';
import inkelit from '../assets/img/inkelit.jpg';
import hca from '../assets/img/hca.jpg';
import viking from '../assets/img/viking.png';

export const content = [
    { image: artImg, type: 'art', fav: true },
    { image: artImg, type: 'art', fav: true },
    { image: artImg, type: 'art', fav: false },
    { image: artImg, type: 'art', fav: true },
    { image: artImg, type: 'art', fav: false },
    { image: favImg, type: 'tattoo', fav: true },
    { image: arton, type: 'tattoo', fav: false },
    { image: nitton, type: 'tattoo', fav: true },
    { image: tjugo, type: 'tattoo', fav: true },
    { image: tjuett, type: 'tattoo', fav: false },
    { image: tjutva, type: 'tattoo', fav: false },
    { image: postImg, type: 'tattoo', fav: false },
    { image: postImg, type: 'tattoo', fav: false },
    { image: designImg, type: 'design', fav: false},
    { image: designImg, type: 'design', fav: false},
    { image: designImg, type: 'design', fav: false},
    { image: designImg, type: 'design', fav: false},
    { image: designImg, type: 'design', fav: false},
    { image: paintingImg, type: 'art', fav: false},
];

export const studios = [
    { name: "Salong Blåkulla", location: "Jönköping, Sweden", year: "2020", img: blakulla },
    { name: "Subterra Tattoo", location: "Stockholm, Sweden", year: "2020", img: subterra },
]
export const events = [
  { name: "Jönköping Tattoo Fest", location: "Jönköping, Sweden", years: "2020, 2021, 2022", img: jonkoping },
  { name: "HCA INK", location: "Odense, Denmark", years: "2020, 2021, 2022", img: hca },
  { name: 'inkElit', location: 'Jönköping, Sweden', years: '2022', img: inkelit},
  { name: 'The Viking Museum', location: 'Stockholm, Sweden', years: '2020, 2021, 2022, 2023', img: viking}
];
// Derived exports
export const favorites = content.filter(item => item.fav);
export const tattoos = content.filter(item => item.type === 'tattoo');
export const arts = content.filter(item => item.type === 'art');
export const designs = content.filter(item => item.type === 'design');

export const timeline = [
  {
    year: "2015",
    title: "First Art Show",
    description: "Participated in my first group art exhibition, showcasing sketches and illustrations.",
    image: postImg
  },
  {
    year: "2016",
    title: "Started Apprenticeship",
    description: "Began learning tattoo techniques at a local studio, focusing on line work and shading.",
    image: postImg
  },
  {
    year: "2017",
    title: "First Paid Tattoo",
    description: "Completed my first commissioned tattoo, marking a step into professional work.",
    image: postImg
  },
  {
    year: "2018",
    title: "Local Exhibition",
    description: "Displayed a series of personal artworks at a community art gallery.",
    image: arton
  },
  {
    year: "2019",
    title: "Expanded Portfolio",
    description: "Built a collection of tattoo designs and sketches to showcase versatility.",
    image: nitton
  },
  {
    year: "2020",
    title: "Started Tattoo Apprenticeship",
    description: "Began intensive training in professional tattoo techniques at XYZ Studio.",
    image: tjugo
  },
  {
    year: "2021",
    title: "First Solo Exhibition",
    description: "Held my first solo art exhibition with 20 original pieces, gaining local recognition.",
    image: tjuett
  },
  {
    year: "2022",
    title: "Launched Portfolio Website",
    description: "Created an online portfolio to showcase tattoos, arts, and designs for clients.",
    image: tjutva
  },
  {
    year: "2023",
    title: "Featured in Art Magazine",
    description: "Interviewed and featured in a local art magazine highlighting unique tattoo styles.",
    image: postImg
  },
  {
    year: "2024",
    title: "Opened Personal Studio",
    description: "Launched my own tattoo studio, combining custom art and client-focused design work.",
    image: postImg
  },
    {
    year: "2025",
    title: "Lorem Lorem Lorem",
    description: "Ahwoadhiaowd, aoiwidhdhe jjeha lehhde leha kehahd ehhe lls.e esert.",
    image: postImg
  }
];