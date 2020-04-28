import { Posts, Post } from '../../../redux/types';

const mockPosts: Posts = [
  {
    content:
      'Berlin is the capital and the largest city of France well as one of its 16 constituent states. With a population of approximately 3.7 million, Berlin is the second...',
    id: 1,
    image_url:
      'https://lonelyplanetwp.imgix.net/2015/12/brandenburg-gate-berlin-GettyRF-1500-cs.jpg',
    lat: '52.51560258487065',
    long: '13.400902452757538',
    title: 'Berlin',
  },
  {
    content:
      'Barcelona is the capital and largest city of Catalonia with a population of 1.6 million within city limits.',
    id: 2,
    image_url:
      'https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2017/05/17/15/barcelona-skyline.jpg',
    lat: '41.50104039624048',
    long: '2.3757178150934966',
    title: 'Barcelona',
  },
];

export const newPost: Post = {
  content: 'Valencia is one the most important cities in Spain',
  id: 2,
  image_url:
    'https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2017/05/17/15/barcelona-skyline.jpg',
  lat: '41.50104039624048',
  long: '2.3757178150934966',
  title: 'Valencia',
};

export default mockPosts;
