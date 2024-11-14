const translations = {
  en: {
    title: 'Abdullah Almutairi - AI & Machine Learning Engineer',
    description: 'Personal portfolio of Abdullah Almutairi showcasing projects, skills, and contact information. Specializing in AI and Machine Learning.',
    logo: 'Abdullah',
    nav: ['About', 'Projects', 'Frameworks', 'Contact'],
    about: {
      name: 'Abdullah Almutairi',
      subtitle: 'AI & Machine Learning Engineer',
      text: "I'm Abdullah Almutairi, specializing in AI and Machine Learning, focused on innovative tech solutions to solve real-world problems."
    },
    projectsTitle: 'Projects I Worked On',
    projects: [
      {
        title: 'SADA (2024-Present)',
        description: 'Alert Analysis and Acoustic Detection. Sada is an AI-based system designed to monitor and analyze urban noise pollution...'
      },
      {
        title: 'Myopia and Hyperopia Detection System (2024-Present)',
        description: 'This project focuses on diagnosing myopia and hyperopia using high-resolution eye images, employing deep learning models...'
      },
      {
        title: 'User Data Analysis (2023)',
        description: 'A project aimed at analyzing user data to understand behavior and provide personalized recommendations using machine learning techniques...'
      }
    ],
    frameworksTitle: 'Frameworks I Work With',
    frameworks: ['TensorFlow', 'Pandas', 'Google Colab', 'MATLAB', 'OpenCV'],
    contactTitle: 'Contact Me',
    contact: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      placeholderName: 'Your Name',
      placeholderEmail: 'Your Email',
      placeholderMessage: 'Your Message',
      send: 'Send'
    },
    footer: {
      stayConnected: 'Stay Connected:',
      email: 'Email:',
      rights: '© 2024, Abdullah Almutairi'
    },
    languageToggle: 'العربية'
  },
  ar: {
    title: 'عبدالله المطيري - مهندس ذكاء اصطناعي وتعلم الآلة',
    description: 'محفظة عبدالله المطيري الشخصية التي تعرض المشاريع والمهارات ومعلومات الاتصال. متخصص في الذكاء الاصطناعي وتعلم الآلة.',
    logo: 'عبدالله',
    nav: ['عنّي', 'مشاريعي', 'أطر العمل ', 'تواصل معي'],
    about: {
      name: 'عبدالله المطيري',
      subtitle: 'مهندس ذكاء اصطناعي وتعلم الآلة',
      text: 'أنا عبدالله المطيري، طالب علوم حاسب في جامعة الملك سعود متخصص في الذكاء الاصطناعي وتعلم الآلة، أهدف لصناعة حلول تقنية مبتكرة بأستخدام الذكاء الأصطناعي.'
    },
    projectsTitle: 'مشاريع عملت عليها',
    projects: [
      {
        title: 'صدى (2024-الحاضر)',
        description: 'تحليل التنبيه والكشف الصوتي. صدى هو نظام قائم على الذكاء الاصطناعي مصمم لمراقبة وتحليل التلوث الصوتي الحضري...'
      },
      {
        title: 'نظام كشف قصر وطول النظر (2024-الحاضر)',
        description: 'يركز هذا المشروع على تشخيص قصر وطول النظر باستخدام صور عالية الدقة للعين، وذلك باستخدام نماذج التعلم العميق...'
      },
      {
        title: 'تحليل بيانات المستخدمين (2023)',
        description: 'مشروع يهدف إلى تحليل بيانات المستخدمين لفهم سلوكهم وتقديم توصيات مخصصة باستخدام تقنيات التعلم الآلي...'
      }
    ],
    frameworksTitle: 'أدوات أعمل بها',
    frameworks: ['TensorFlow', 'Pandas', 'Google Colab', 'MATLAB', 'OpenCV'],
    contactTitle: 'تواصل معنا',
    contact: {
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
      placeholderName: 'اسمك',
      placeholderEmail: 'بريدك الإلكتروني',
      placeholderMessage: 'رسالتك',
      send: 'إرسال'
    },
    footer: {
      stayConnected: 'ابقى على تواصل:',
      email: 'البريد الإلكتروني:',
      rights: '© 2024، عبدالله المطيري'
    },
    languageToggle: 'English'
  }
};

document.addEventListener('DOMContentLoaded', function() {
  // Set default language to English
  applyTranslations('en');
});

document.getElementById('language-toggle').addEventListener('click', function() {
  const html = document.documentElement;
  const currentLang = html.getAttribute('lang');
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  html.setAttribute('lang', newLang);
  html.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
  this.textContent = translations[newLang].languageToggle;
  applyTranslations(newLang);
});

function applyTranslations(lang) {
  const t = translations[lang];
  document.title = t.title;
  document.querySelector('meta[name="description"]').setAttribute('content', t.description);
  document.querySelector('.logo').textContent = t.logo;
  document.querySelectorAll('.nav-link').forEach((el, i) => {
    el.textContent = t.nav[i];
  });
  // About Section
  document.querySelector('#about .section-title').textContent = t.about.name;
  document.querySelector('#about .section-subtitle').textContent = t.about.subtitle;
  document.querySelector('#about .section-text').textContent = t.about.text;
  // Projects Section
  document.querySelector('#projects .section-title').textContent = t.projectsTitle;
  const projectTitles = document.querySelectorAll('.project-title');
  const projectDescriptions = document.querySelectorAll('.project-description');
  t.projects.forEach((proj, i) => {
    projectTitles[i].textContent = proj.title;
    projectDescriptions[i].textContent = proj.description;
  });
  document.querySelectorAll('.project-link').forEach(el => {
    el.textContent = lang === 'ar' ? 'اقرأ المزيد →' : 'Read more →';
  });
  // Frameworks Section
  document.querySelector('#frameworks .section-title').textContent = t.frameworksTitle;
  document.querySelectorAll('.framework-item p').forEach((el, i) => {
    el.textContent = t.frameworks[i];
  });
  // Contact Section
  document.querySelector('#contact .section-title').textContent = t.contactTitle;
  document.querySelector('.contact-form label[for="name"]').textContent = t.contact.name;
  document.querySelector('.contact-form input#name').setAttribute('placeholder', t.contact.placeholderName);
  document.querySelector('.contact-form label[for="email"]').textContent = t.contact.email;
  document.querySelector('.contact-form input#email').setAttribute('placeholder', t.contact.placeholderEmail);
  document.querySelector('.contact-form label[for="message"]').textContent = t.contact.message;
  document.querySelector('.contact-form textarea#message').setAttribute('placeholder', t.contact.placeholderMessage);
  document.querySelector('.contact-form button').textContent = t.contact.send;
  // Footer
  document.getElementById('footer-name').textContent = t.about.name;
  document.getElementById('footer-rights').textContent = t.footer.rights;
  document.getElementById('footer-stay-connected').textContent = t.footer.stayConnected;
  document.getElementById('footer-email-label').textContent = t.footer.email;
  // Email address remains the same
  // Text Alignment
  if (lang === 'ar') {
    document.querySelector('footer').style.textAlign = 'right';
  } else {
    document.querySelector('footer').style.textAlign = 'left';
  }
}
// scripts.js
// Updated scripts.js

// Ensure AOS animations are properly initialized when the page loads
let aosInitialized = false;
document.addEventListener('scroll', () => {
  if (!aosInitialized) {
    AOS.init({
      once: true,  // Animation should happen only once
      duration: 600,  // Reduced animation duration to 600ms for a faster feel
      easing: 'ease-out',  // Faster easing function for more snappy animations
      offset: 0,  // Reduced offset to trigger animations earlier
    });
    aosInitialized = true;
  }
});


// Function to handle smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
});

// Functionality to add shadows to header when scrolling
document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
      header.classList.add('shadow-lg');
  } else {
      header.classList.remove('shadow-lg');
  }
});

// Contact form submission handling (example alert for demonstration)
document.querySelector('.contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you shortly.');
});

// Function to highlight active navigation links on scroll
document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`a[href="#${sectionId}"]`);

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLink?.classList.add('text-blue-500');
      } else {
          navLink?.classList.remove('text-blue-500');
      }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const closeButton = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  // Toggle the mobile menu visibility
  hamburger.addEventListener("click", function () {
    mobileMenu.classList.add("active");
  });

  // Close the mobile menu
  closeButton.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
  });

  // Close the mobile menu if clicking outside of it (optional)
  document.addEventListener("click", function (event) {
    if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
      mobileMenu.classList.remove("active");
    }
  });
});