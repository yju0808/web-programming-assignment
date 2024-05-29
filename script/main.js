import About from '../component/about.js';
import Projects from '../component/projects.js';
import Resume from '../component/resume.js';

const routes = {
  '/': { content: About() },
  './': { content: About() },
  './about': { content: About() },
  './projects': { content: Projects() },
  './resume': { content: Resume() },
};

const app = document.querySelector('.App');

const changeUrl = (requestedUrl) => {
  console.log(requestedUrl);
  app.innerHTML = routes[requestedUrl].content;

  if (requestedUrl === './' || requestedUrl === '/') {
    history.pushState(null, null, './about');
  } else {
    history.pushState(null, null, requestedUrl);
  }
};

window.addEventListener('popstate', () => {
  changeUrl(window.location.pathname);
});

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const url = event.target.getAttribute('data-url');
      changeUrl(url);
    });
  });

  changeUrl(window.location.pathname);
});
