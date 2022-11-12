//  icons
import {
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects imagess
import Project1 from './assets/img/projects/gram.png';
import Project2 from './assets/img/projects/sistemapet.png';
import Project3 from './assets/img/projects/devblog.png';
import Project4 from './assets/img/projects/node.png';
import Project5 from './assets/img/projects/pizzas.jpg';
import Project6 from './assets/img/projects/imc.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [  
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/davidrobisom/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Davidpro29',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/david-robison-9453a4166/',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'ReactGram',
    category: 'ReactJs',
  },
  {
    id: '2',
    image: Project2,
    name: 'Sistema pet',
    category: 'ReactJs',
  },
  {
    id: '3',
    image: Project3,
    name: 'Blog dev',
    category: 'React Native',
  },
  {
    id: '4',
    image: Project4,
    name: 'Api com MongoDB',
    category: 'NodeJs',
  },
  {
    id: '5',
    image: Project5,
    name: 'Pizzas do bairro',
    category: 'Javascript',
  },
  {
    id: '5',
    image: Project6,
    name: 'Cálculo do IMC',
    category: 'ReactJs',
  },
];

// projects
export const projectsNav = [
  {
    name: 'todos',
  },
  {
    name: 'reactJs',
  },
  {
    name: 'react Native',
  },
  {
    name: 'nodeJs',
  },
  {
    name: 'javascript'
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'React js',
    description:
      'Junto com NextJs crio meus websites para fins didáticos e futuros projetos para o comércio local.',
  },
  {
    icon: <FiSettings />,
    name: 'React native',
    description:
      'Tenho dois apps onde consigo oferecer a proprietários de estabelecimentos dos comércios locais, onde aborda estoque e pizzaria.',
  },
  {
    icon: <FiPenTool />,
    name: 'Node Js',
    description:
      'Com o MongoBd e postgree criei meus projetos e ja estou familiarizado.',
  },
  {
    icon: <FiTag />,
    name: 'Javascript',
    description:
      'É a linguagem que eu utilizo e para os meus projetos!',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Projetos simples e bem objetivo, valeu Daaavid!',
    authorName: 'Ana Aquino',
    authorPosition: 'Dev frontend',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Muito bom, me ajudou muito o projeto pizzaria',
    authorName: 'Olivia Cássia',
    authorPosition: 'Dev frontend',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Valeu pelo site mano, facilitou as vendas e anexação de novos clientes',
    authorName: 'Julia Ferreira',
    authorPosition: 'Cliente comercio local',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Tem alguma pergunta',
    subtitle: 'Só me chamar!.',
    description: 'E-mail silvapro29@hotmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Onde eu vivo',
    subtitle: 'São Paulo, Brasil',
    description: 'Mais precisamente em Mauá',
  },
];
