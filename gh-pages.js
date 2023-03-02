import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://rieldreams.github.io/arielsPortfolio/', // Update to point to your repository
  user: {
   name: 'Ariel', // update to use your name
   email: 'Arielf412@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);