let date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;


// footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="section bg">
        <div class="container-fluid">
          <div class="footer">
            <div class="sort-note">
              <a class="navbar-brand" href="index.html">Ray.U</a>
              <p>I’m Ray Unabia, a passionate and driven Junior Web Developer with strong front-end development skills and a keen eye for design.</p>
              <hr>
              <span class="contact"><a href="" class="email">
                <img src="./img/email.png" alt="email me"> &nbsp; &nbsp;
                rayunabia2@gmail.com</a></span>
            </div>
            <div class="quike-links text-center">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#tools">Tools</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="https://my-portfolio-seven-psi-54.vercel.app" target="_blank">Wanna See Something Cool?</a>
                </li>

              </ul>
            </div>
            <div class="social-links text-center">
              <a href="https://linkedin.com/in/ray-unabia-ba135a281/" target="_blank">
                <img src="./img/LinkedIn Circled.png" alt="LinkedIn">
              </a>

              <!-- <a href=""><img src="./img/Instagram.png" alt="Instagram"></a>-->

              <a href="https://twitter.com/" target="_blank">
                <img src="./img/Twitter.png" alt="Twitter">
              </a>

              <a href="https://github.com/Reyuken" target="_blank">
                <img src="./img/GitHub.png" alt="GitHub">
              </a>
              
            </div>
          </div>
        </div>
      </div>
  
    </footer>  
        `;
  }
}
//               <span class="contact"><a href="mailto:rayunabia2@gmail.com" class="email">


// customElements.define("main-header", Header);
customElements.define("main-footer", Footer);

// Back to top
const amountScrolled = 200;
const btnBackToTop = document.querySelector('.back-to-top');

const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
const toggleBtnBackToTop = () => {
  window.scrollY > amountScrolled
    ? btnBackToTop.classList.add('back-to-top_show')
    : btnBackToTop.classList.remove('back-to-top_show');
}

btnBackToTop.addEventListener('click', backToTop);
window.addEventListener('scroll', toggleBtnBackToTop);


// use this to connect this footer to main index.html
// <main-footer></main-footer>