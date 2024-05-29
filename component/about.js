export default function About() {
  return `
    <section class='about-container'>
      <section class='profile'>
        <img src='/web-programming-assignment/asset/kantlim.jpeg' alt='My Image' class='profile-image' />
        <div class='profile-details'>
          <div class='profile-header'>
            <h1 class='profile-name'>임정욱</h1>
            <p class='profile-title'>소프트웨어 엔지니어</p>
            <ul class='profile-links'>
              <li class='profile-link'>
                <a href='https://www.linkedin.com/in/kant-lim/' target='_blank'>
                  LinkedIn
                </a>
              </li>
              <li class='profile-link'>
                <a href='https://blog.naver.com/kant_lim' target='_blank'>
                  Blog
                </a>
              </li>
              <li class='profile-link'>
                <a href='https://github.com/yju0808' target='_blank'>
                  Github
                </a>
              </li>
              <li class='profile-link'>
                <a href='mailto:yju0808@naver.com'>Email</a>
              </li>
            </ul>
          </div>
          <div class='profile-description'>
            <p>철학을 사랑하는 소프트웨어 엔지니어 입니다.</p>
            <p>기술과 철학을 연결하는 데 관심을 가지고 있으며, 기술과 철학의 교차점이 독특한 관점과 가치 있는 기여를 제공한다고 굳게 믿습니다.</p>
          </div>
        </div>
      </section>
    </section>
    `;
}
