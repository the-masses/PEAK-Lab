// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/PEAK-Lab/";
    },
  },{id: "nav-people",
          title: "people",
          description: "We are a team of researchers excited about building algorithms that perceive and understand our world",
          section: "Navigation",
          handler: () => {
            window.location.href = "/PEAK-Lab/people/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/PEAK-Lab/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/PEAK-Lab/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "peoples-jialong-liu",
          title: 'Jialong Liu',
          description: "Jialong Liu Research Assistant Working with Prof. Changhao Chen at HKUST (GZ). Graduated from Guangdong University of Technology. Has participated in multiple robotic competitive events. Interested in integrating algorithms and hardware for robot control.",
          section: "Peoples",handler: () => {
              window.location.href = "/PEAK-Lab/peoples/10_project/";
            },},{id: "peoples-changqing-zhou",
          title: 'Changqing Zhou',
          description: "Changqing Zhou is an incoming Ph.D. student at HKUST-GZ, where he will be advised by Prof. Changhao CHEN. He holds an M.S. in Artificial Intelligence from NTU and a B.S. in Mechanical Engineering from SJTU. His research interests focus on 3D vision and scene understanding. He aims to develop embodied agents capable of perceiving and interacting with the real world, with the ultimate goal of delivering tangible benefits to everyday life.",
          section: "Peoples",handler: () => {
              window.location.href = "/PEAK-Lab/peoples/1_project/";
            },},{id: "peoples-zeyu-jiang",
          title: 'Zeyu Jiang',
          description: "Zeyu Jiang is an upcoming PhD student at HKUST-GZ, supervised by Prof. Changhao Chen. Previously, he obtained his master’s degree at NTU, supervised by Prof. Lihua Xie. Piror to that, he received his bachelor’s degree at BIT. His research interests focus on embodied perception based on visual SLAM. He is interested in robotics and committed to joining the development of embodied AI into the physical world.",
          section: "Peoples",handler: () => {
              window.location.href = "/PEAK-Lab/peoples/2_project/";
            },},{id: "peoples-qunchao-jin",
          title: 'Qunchao Jin',
          description: "Qunchao Jin is a Research Assistant at ​​Peak Lab​​, where he focuses on ​​foundation model-based embodied navigation​​. Previously, he worked as a ​​Computer Vision Researcher​​ at ​​Lenovo Research​​, developing robotic inspection systems. He holds a ​​Master’s degree​​ from ​​East China Normal University​​, with research in ​​medical image analysis​​. Driven by a broad interest in ​​AI applications across industries​​, Qunchao aims to bridge advanced research with practical solutions to real-world challenges.",
          section: "Peoples",handler: () => {
              window.location.href = "/PEAK-Lab/peoples/3_project/";
            },},{id: "peoples-dehan-shen",
          title: 'Dehan Shen​',
          description: "Dehan Shen is a research assistant working with Prof. Changhao Chen. He graduated from the University of Sheffield with a Master&#39;s degree in Robotics and from Shanghai University with a Bachelor&#39;s degree in Electronic Information Engineering. His research interests include learning-based inertial odometry and proprioceptive intelligence.",
          section: "Peoples",handler: () => {
              window.location.href = "/PEAK-Lab/peoples/4_project/";
            },},{id: "peoples-lingjie-zhang",
          title: 'Lingjie Zhang',
          description: "Lingjie Zhang is a research assistant at PEAK-LAB, HKUST(GZ), advised by Prof. Changhao Chen, and a master&#39;s student in Automotive Engineering at the Technical University of Munich. He is interested in embodied navigation, particularly in learning-based motion planning and control.",
          section: "Peoples",handler: () => {
              window.location.href = "/PEAK-Lab/peoples/5_project/";
            },},{id: "peoples-yufei-zhang",
          title: 'Yufei Zhang',
          description: "Yufei Zhang is a research assistant in PEAK lab working with Prof. Chen Changhao. He received his undergraduate degree from the School of Information Science and Engineering of Fudan University and his postgraduate degree from Nanyang Technological University. His current research interests include multimodal continuous learning and embodied intelligence.",
          section: "Peoples",handler: () => {
              window.location.href = "/PEAK-Lab/peoples/6_project/";
            },},{id: "peoples-chenyang-li",
          title: 'Chenyang Li',
          description: "Chenyang Li is a Research Assistant at HKUST(GZ), working in the PEAK Lab with Prof. Changhao Chen. He is also pursuing a Master of Science in Data Science at Nanyang Technological University. He is interested in embodied AI, robot perception and decision-making, and adversarial robustness in deep and reinforcement learning.",
          section: "Peoples",handler: () => {
              window.location.href = "/PEAK-Lab/peoples/7_project/";
            },},{id: "peoples-renmin-cheng",
          title: 'Renmin Cheng',
          description: "Renmin Cheng is a research assistant at HKUST(GZ) working with Prof.Changhao Chen. Before that, He works as RD at Baidu. He graduated from Xidian Uninersity  with a Master’s degree in Engineering , and from the Heilongjiang University with an undergraduate degree in Engineering.",
          section: "Peoples",handler: () => {
              window.location.href = "/PEAK-Lab/peoples/8_project/";
            },},{id: "peoples-zihan-zhang",
          title: 'Zihan Zhang',
          description: "Zihan Zhang is a Research Assistant Intern at HKUST(GZ) Peak Lab, Under the supervision of Prof. Changhao Chen. He is currently a second-year master student in Johns Hopkins University. He is currently working on lightweight Transformer models for matching neural networks. His research interests lies on Efficient Model Inference, Artificial Intelligence for Generative Contents and Artificial Intelligence for Healthcare.",
          section: "Peoples",handler: () => {
              window.location.href = "/PEAK-Lab/peoples/9_project/";
            },},{id: "projects-站三",
          title: '站三',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/PEAK-Lab/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/PEAK-Lab/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/PEAK-Lab/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/PEAK-Lab/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/PEAK-Lab/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/PEAK-Lab/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/PEAK-Lab/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/PEAK-Lab/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/PEAK-Lab/projects/9_project/";
            },},];
