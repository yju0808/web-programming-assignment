export default function Projects() {
  return `
    <section class='projects-container'>
      <div class='projects-header'>
        <h1 class='title'>임정욱</h1>
        <p class='subtitle'>소프트웨어 엔지니어</p>
      </div>
      <div class='divider'></div>
      <div class='project'>
        <div class='project-item'>
          <div>
            <h5 class='project-title' id='writemate'>
              <a class='link' href='https://www.write-mate.net/' target='_blank'>
                라이트메이트
              </a>
            </h5>
          </div>
          <p class='project-period'>2023.06~2023.12</p>
          <p>웹소설 작가를 위한 클라우드 기반 창작 플랫폼</p>
          <div class='project-skills'>
            <div class='skill'>Next.js</div>
            <div class='skill'>Recoil</div>
            <div class='skill'>Tanstack-Query</div>
            <div class='skill'>Tailwind CSS</div>
          </div>
          <div class='project-details'>
            <p>- SW마에스트로 우수 프로젝트 선정</p>
            <p>- 서비스의 프론트엔드 개발에 100% 기여</p>
            <p>
              - 서비스 개발 과정에서
              <span id='tech-patent'>
                <a class='link' href='https://drive.google.com/file/d/1B9QHcGkY5qpnIlGph6VyyckgLl5FQxwS/view?usp=sharing' target='_blank'>
                  기술 특허 출원
                </a>
              </span>
            </p>
            <p>- 서비스 누적 사용자 800+</p>
          </div>
        </div>
      </div>
      <div class='divider'></div>
      <div class='project'>
        <div class='project-item'>
          <div>
            <h5 class='link project-title' id='shortcutszip'>
              <a class='link' href='https://github.com/Team-ShortcutsZip/MacC-Team-HappyAnding' target='_blank'>
                숏컷집(ShortcutsZip)
              </a>
            </h5>
          </div>
          <p class='project-period'>2024.04~</p>
          <p>더 편리한 iOS 단축어 공유 플랫폼</p>
          <div class='project-skills'>
            <div class='skill'>Swift UI</div>
            <div class='skill'>Firebase</div>
          </div>
          <div class='project-details'>
            <p>- Repository 패턴을 도입하여 비즈니스 로직과 데이터 레이어 분리</p>
            <p>- Firebase 기반 백엔드 코드 작성</p>
            <p>- 서비스 누적 사용자 6000+</p>
          </div>
        </div>
      </div>
    </section>
    `;
}
