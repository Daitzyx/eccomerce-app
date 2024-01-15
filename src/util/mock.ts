import americanSnipper from '../assets/sniper_americano.jpg';
import theOneThing from '../assets/a_unica_coisa.jpg';
import cleanCode from '../assets/codigo_limpo.jpg';
import harryPotter from '../assets/harry_potter_pedra_filosofal.jpg';
import reiDosDividendos from '../assets/rei_dos_dividendos.jpg';
import powerOfHabit from '../assets/o_poder_do_habito.jpg';
import javascript from '../assets/javascript_estrutura_dados.jpg';
import scherlockHolmes from '../assets/scherlock_holmes.jpg';

export const products = [
  {
    id: 1,
    name: 'Sniper Americano',
    price: 129.99,
    date: new Date('2023-01-10'),
    image: americanSnipper
  },
  {
    id: 2,
    name: 'Sherlock Holmes',
    price: 39.99,
    date: new Date('2023-02-15'),
    image: scherlockHolmes
  },
  {
    id: 3,
    name: 'O Poder do Hábito',
    price: 79.99,
    date: new Date('2023-03-20'),
    image: powerOfHabit
  },
  {
    id: 4,
    name: 'Rei dos Dividendos',
    price: 149.99,
    date: new Date('2023-04-25'),
    image: reiDosDividendos
  },
  {
    id: 5,
    name: 'JavaScript Estrutura de Dados',
    price: 59.99,
    date: new Date('2023-05-30'),
    image: javascript
  },
  {
    id: 6,
    name: 'Harry Potter e a Pedra Filosofal',
    price: 49.99,
    date: new Date('2023-06-05'),
    image: harryPotter
  },
  {
    id: 7,
    name: 'Código Limpo',
    price: 89.99,
    date: new Date('2023-07-10'),
    image: cleanCode
  },
  {
    id: 8,
    name: 'A única coisa',
    price: 69.99,
    date: new Date('2023-08-15'),
    image: theOneThing
  }
];
