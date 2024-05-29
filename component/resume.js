export default function Resume() {
  `
    <section class='resume-container'>
      <div class='resume-header'>
        <h1 class='title'>임정욱</h1>
        <p class='subtitle'>소프트웨어 엔지니어</p>
      </div>

      <div class='skills'>
        <h4 class='section-title'>Skills</h4>
        <div class='skill-group'>
          <div class='skill-category'>Backend</div>
          <div class='skill-item'>Spring Boot</div>
          <div class='skill-item'>Express.js</div>
          <div class='skill-item'>AWS</div>
        </div>
        <div class='skill-group'>
          <div class='skill-category'>Frontend</div>
          <div class='skill-item'>Next.js</div>
          <div class='skill-item'>TypeScript</div>
          <div class='skill-item'>Tailwind CSS</div>
        </div>
      </div>

      <div class='divider'></div>

      <div class='experience'>
        <h4 class='section-title'>Experience</h4>
        <div class='experience-item'>
          <h5 class='experience-title'>소프트웨어 마에스트로</h5>
          <p class='experience-period'>2023.04~2023.12</p>
          <p>과학기술정보통신부에서 주관하는 소프트웨어 인재 양성 과정</p>
          <div class='experience-details'>
            <p>
              - 웹소설 작가를 위한 클라우드 기반 창작 플랫폼
              <a href='https://www.write-mate.net/' target='_blank' class='link'>
                라이트메이트</a> 출시
            </p>
            <p>- 상위 6% 우수 연수생으로 선정</p>
            <p>- 서비스의 프론트엔드 개발에 100% 기여</p>
            <p>
              - 서비스 개발 과정에서
              <a href='https://drive.google.com/file/d/1B9QHcGkY5qpnIlGph6VyyckgLl5FQxwS/view?usp=sharing' target='_blank' class='link'>
                기술 특허 출원
              </a>
            </p>
            <p>- 서비스 누적 사용자 800+</p>
          </div>
        </div>
      </div>

      <div class='divider'></div>

      <div class='education'>
        <h4 class='section-title'>Education</h4>
        <div class='education-item'>
          <h5 class='education-title'>강원대학교 컴퓨터공학과</h5>
          <p class='education-period'>2022.03~</p>
          <p>GPA : 4.05/4.50</p>
        </div>
        <div class='education-item'>
          <h5 class='education-title'>POCU Academy</h5>
          <p>엘리트 프로그래머 양성을 위한 컴퓨터 공학 교육 기관</p>
          <p id='gpa'>
            <a href='https://drive.google.com/file/d/1CbW1ptYSqOjD7D5Y8OuBdwRIlalGLU4d/view?usp=sharing' target='_blank' class='link'>
              GPA : 92/100
            </a>
          </p>
        </div>
      </div>

      <div class='divider'></div>

      <div class='volunteering'>
        <h4 class='section-title'>Volunteering</h4>
        <div class='volunteering-item'>
          <h5 class='volunteering-title'>GWDC24 오거나이저</h5>
          <p class='volunteering-period'>2023.12~2024.03</p>
          <p>강원도 유일의 개발자 컨퍼런스, GWDC24 기획 및 개최</p>
          <div class='volunteering-details'>
            <p>
              -
              <a href='https://gwdc.dev/' target='_blank' class='link'>
                행사 홈페이지
              </a>
            </p>
            <p>
              -
              <a href='http://www.itdaily.kr/news/articleView.html?idxno=220487' target='_blank' class='link'>
                뉴스 기사
              </a>
            </p>
            <p>- 기업 CTO, 현업 개발자 및 교육자 등 연사자 섭외</p>
          </div>
        </div>
      </div>
    </section>
    `;
}
