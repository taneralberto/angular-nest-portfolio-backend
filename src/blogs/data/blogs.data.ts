import { BlogsDto } from '../dto';

export const blogs: BlogsDto[] = [
  {
    id: '1',
    title: 'Elecciones de Brasil',
    content: 'content1',
    thumbnail:
      'https://ikona.telesurtv.net/content/uploads/2023/09/nuevocnvl3.jpg.webp',
    tags: ['Elecciones', 'Brasil'],
    createdAt: new Date(),
    modifiedAt: new Date(),
    slug: 'slug1',
  },
  {
    id: '2',
    title: 'Brasilia se convierte en primera ciudad brasileña con red 5G',
    content: 'content2',
    thumbnail:
      'https://ikona.telesurtv.net/content/uploads/2023/09/nuevocnvl5.png.webp',
    tags: ['Brasil', 'Brasilia', 'Tecnologia'],
    createdAt: new Date(),
    modifiedAt: new Date(),
    slug: 'slug2',
  },
  {
    id: '3',
    title: 'NASA revela las primeras imágenes del telescopio Webb',
    content: 'content3',
    thumbnail:
      'https://ikona.telesurtv.net/content/uploads/2023/09/chaser.jpg_1718483347.jpg.webp',
    tags: ['EE.UU', 'James Webb', 'NASA', 'Telescopio'],
    createdAt: new Date(),
    modifiedAt: new Date(),
    slug: 'slug3',
  },
];
