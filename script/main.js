import About from '../component/about.js';
import Projects from '../component/projects.js';
import Resume from '../component/resume.js';

const routes = {
  './about': { content: About() },
  './projects': { content: Projects() },
  './resume': { content: Resume() },
};

const app = document.querySelector('.App');

const changeUrl = (requestedUrl) => {
  if (!routes[requestedUrl]) {
    requestedUrl = './about';
  }

  app.innerHTML = routes[requestedUrl].content;
  history.pushState(null, null, requestedUrl);
  setActiveLink(requestedUrl);
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

  const params = new URLSearchParams(window.location.search);
  const initialPath = params.get('path') || window.location.pathname;
  changeUrl(initialPath);
});

const setActiveLink = (requestedUrl) => {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    if (link.getAttribute('data-url') === requestedUrl) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};
