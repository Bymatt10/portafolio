export const languages = {
    es: 'Español',
    en: 'English',
};

export const defaultLang = 'es';

export const ui = {
    es: {
        'nav.about': 'Sobre mí',
        'nav.experience': 'Experiencia',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',
        'nav.cv': 'CV',
        'hero.greeting': 'Hola, mi nombre es',
        'hero.role': 'Backend Engineer.',
        'hero.subtitle': 'Construyendo soluciones escalables en la nube.',
        'hero.description': 'Soy un Ingeniero de Software Full Stack con más de 3 años de experiencia. Especializado en Java y Spring Boot para el backend, con sólida experiencia en arquitecturas de microservicios, AWS, Docker y Kubernetes.',
        'hero.cta.experience': 'Ver Experiencia',
        'hero.cta.contact': 'Contáctame',
        'experience.title': 'Dónde he trabajado',
        'projects.title': 'Cosas que he construido',
        'contact.pretitle': '04. ¿Qué sigue?',
        'contact.title': 'Ponte en contacto',
        'contact.description': 'Actualmente estoy buscando nuevas oportunidades. Ya sea que tengas una pregunta o solo quieras saludar, ¡haré mi mejor esfuerzo por responder!',
        'contact.cta': 'Saludar',
        'contact.github': 'o visita mi GitHub',
        'footer.text': 'Diseñado & Construido con Astro',
    },
    en: {
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'nav.cv': 'Resume',
        'hero.greeting': 'Hi, my name is',
        'hero.role': 'Backend Engineer.',
        'hero.subtitle': 'Building scalable cloud solutions.',
        'hero.description': 'I am a Full Stack Software Engineer with over 3 years of experience. Specialized in Java and Spring Boot for backend, with solid experience in microservices architectures, AWS, Docker, and Kubernetes.',
        'hero.cta.experience': 'View Experience',
        'hero.cta.contact': 'Contact Me',
        'experience.title': 'Where I’ve Worked',
        'projects.title': 'Things I’ve Built',
        'contact.pretitle': '04. What’s Next?',
        'contact.title': 'Get In Touch',
        'contact.description': 'I’m currently looking for new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!',
        'contact.cta': 'Say Hello',
        'contact.github': 'or visit my GitHub',
        'footer.text': 'Designed & Built with Astro',
    },
} as const;

export const experienceData = {
    es: [
        {
            company: 'Envi',
            role: 'Full Stack Developer',
            period: 'Jul 2024 – Presente',
            description: 'Desarrollo de microservicios backend usando Java 17, Spring Boot, JPA e Hibernate. Implementación de APIs REST y procesamiento asíncrono orientado a eventos con Kafka. Uso de servicios AWS (EC2, S3, Lambda, Athena). Desarrollo frontend con Angular.',
            tags: ['Java 17', 'Spring Boot', 'Kafka', 'AWS', 'Angular']
        },
        {
            company: 'Tizo',
            role: 'Java Developer',
            period: 'May 2023 – Jun 2024',
            description: 'Diseño y desarrollo de microservicios usando Java (7+), Spring Boot y arquitectura orientada a servicios. Implementación de CI/CD pipelines con Jenkins y GitHub Actions. Despliegue en Docker y Kubernetes. Integración de bases de datos MySQL y PostgreSQL.',
            tags: ['Java', 'Spring Boot', 'Kubernetes', 'Docker', 'CI/CD']
        },
        {
            company: 'Agent7',
            role: 'Software Developer / IT Support',
            period: 'Ene 2022 – Abr 2023',
            description: 'Implementación y soporte de sistemas TI y redes. Desarrollo y mantenimiento de sitios web WordPress con integraciones de API. Optimización de sistemas para mejorar estabilidad y rendimiento.',
            tags: ['IT Support', 'WordPress', 'API Integrations', 'Network']
        }
    ],
    en: [
        {
            company: 'Envi',
            role: 'Full Stack Developer',
            period: 'Jul 2024 – Present',
            description: 'Developed backend microservices using Java 17, Spring Boot, JPA, and Hibernate. Implemented REST APIs and asynchronous, event-driven processing with Kafka. Used AWS services such as EC2, S3, Lambda, and Athena for data storage and analytics. Developed frontend applications with Angular.',
            tags: ['Java 17', 'Spring Boot', 'Kafka', 'AWS', 'Angular']
        },
        {
            company: 'Tizo',
            role: 'Java Developer',
            period: 'May 2023 – Jun 2024',
            description: 'Designed and developed applications and microservices using Java (7+), Spring Boot, and service-oriented architecture. Implemented CI/CD pipelines using Jenkins and GitHub Actions. Deployed containerized applications using Docker and Kubernetes. Integrated relational databases including MySQL and PostgreSQL.',
            tags: ['Java', 'Spring Boot', 'Kubernetes', 'Docker', 'CI/CD']
        },
        {
            company: 'Agent7',
            role: 'Software Developer / IT Support',
            period: 'Jan 2022 – Apr 2023',
            description: 'Implemented and supported IT systems, networks, and technical services. Developed and maintained WordPress websites, including API integrations. Provided technical support and optimized systems to improve stability and performance.',
            tags: ['IT Support', 'WordPress', 'API Integrations', 'Network']
        }
    ]
};

export const projectsData = {
    es: [
        {
            title: 'Arquitectura de Microservicios con Spring Boot',
            description: 'Implementación robusta de microservicios utilizando Java 17 y Spring Cloud. Comunicación asíncrona mediante Apache Kafka y orquestación de contenedores con Kubernetes.',
            tags: ['Java', 'Spring Boot', 'Kafka', 'K8s'],
            href: 'https://github.com/Bymatt10/microservices-architecture'
        },
        {
            title: 'Cloud Native & DevOps Pipeline',
            description: 'Automatización completa de CI/CD utilizando Jenkins y GitHub Actions. Despliegue en AWS (EC2, S3, RDS) infraestructura como código y contenedores Docker.',
            tags: ['AWS', 'Docker', 'Jenkins', 'DevOps'],
            href: 'https://github.com/Bymatt10/automated-devops-pipeline'
        },
        {
            title: 'Desarrollo Frontend SPA con Angular',
            description: 'Aplicaciones de una sola página (SPA) modernas y reactivas integradas con servicios backend RESTful. Gestión de estado y diseño responsivo.',
            tags: ['Angular', 'TypeScript', 'RxJS', 'HTML/CSS'],
            href: 'https://github.com/Bymatt10/angular-modern-spa'
        },
        {
            title: 'Gestión de Datos & Analytics',
            description: 'Diseño e integración de bases de datos relacionales (MySQL, PostgreSQL) y NoSQL (MongoDB, Redis). Procesamiento de datos con AWS Athena.',
            tags: ['SQL', 'NoSQL', 'Redis', 'Athena'],
            href: 'https://github.com/Bymatt10/iot-data-analytics'
        }
    ],
    en: [
        {
            title: 'Microservices Architecture with Spring Boot',
            description: 'Robust implementation of microservices using Java 17 and Spring Cloud. Asynchronous communication via Apache Kafka and container orchestration with Kubernetes.',
            tags: ['Java', 'Spring Boot', 'Kafka', 'K8s'],
            href: 'https://github.com/Bymatt10/microservices-architecture'
        },
        {
            title: 'Cloud Native & DevOps Pipeline',
            description: 'Full CI/CD automation using Jenkins and GitHub Actions. Deployment on AWS (EC2, S3, RDS) infrastructure as code and Docker containers.',
            tags: ['AWS', 'Docker', 'Jenkins', 'DevOps'],
            href: 'https://github.com/Bymatt10/automated-devops-pipeline'
        },
        {
            title: 'SPA Frontend Development with Angular',
            description: 'Modern and reactive Single Page Applications (SPA) integrated with RESTful backend services. State management and responsive design.',
            tags: ['Angular', 'TypeScript', 'RxJS', 'HTML/CSS'],
            href: 'https://github.com/Bymatt10/angular-modern-spa'
        },
        {
            title: 'Data Management & Analytics',
            description: 'Design and integration of relational (MySQL, PostgreSQL) and NoSQL (MongoDB, Redis) databases. Data processing with AWS Athena.',
            tags: ['SQL', 'NoSQL', 'Redis', 'Athena'],
            href: 'https://github.com/Bymatt10/iot-data-analytics'
        }
    ]
};
