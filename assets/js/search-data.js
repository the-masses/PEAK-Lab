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
          section: "News",},{id: "peoples-vincent-sitzmann1",
          title: 'Vincent Sitzmann1',
          description: "Vincent is the principal investigator of the Scene Representation Group at MIT CSAIL, where he works as an assistant professor. Previously, he finished his PhD at Stanford University and a postdoc at MIT.  His research interest lies in neural scene representations — the way neural networks learn to represent information on our world.",
          section: "Peoples",handler: () => {
              window.location.href = "/PEAK-Lab/peoples/1_project/";
            },},{id: "peoples-vincent-sitzmann2",
          title: 'Vincent Sitzmann2',
          description: "Vincent is the principal investigator of the Scene Representation Group at MIT CSAIL, where he works as an assistant professor. Previously, he finished his PhD at Stanford University and a postdoc at MIT.  His research interest lies in neural scene representations — the way neural networks learn to represent information on our world.",
          section: "Peoples",handler: () => {
              window.location.href = "/PEAK-Lab/peoples/2_project/";
            },},{id: "peoples-vincent-sitzmann3",
          title: 'Vincent Sitzmann3',
          description: "Vincent is the principal investigator of the Scene Representation Group at MIT CSAIL, where he works as an assistant professor. Previously, he finished his PhD at Stanford University and a postdoc at MIT.  His research interest lies in neural scene representations — the way neural networks learn to represent information on our world.",
          section: "Peoples",handler: () => {
              window.location.href = "/PEAK-Lab/peoples/3_project/";
            },},{id: "peoples-vincent-sitzmann4",
          title: 'Vincent Sitzmann4',
          description: "Vincent is the principal investigator of the Scene Representation Group at MIT CSAIL, where he works as an assistant professor. Previously, he finished his PhD at Stanford University and a postdoc at MIT.  His research interest lies in neural scene representations — the way neural networks learn to represent information on our world.",
          section: "Peoples",handler: () => {
              window.location.href = "/PEAK-Lab/peoples/4_project/";
            },},{id: "peoples-vincent-sitzmann5",
          title: 'Vincent Sitzmann5',
          description: "Vincent is the principal investigator of the Scene Representation Group at MIT CSAIL, where he works as an assistant professor. Previously, he finished his PhD at Stanford University and a postdoc at MIT.  His research interest lies in neural scene representations — the way neural networks learn to represent information on our world.",
          section: "Peoples",handler: () => {
              window.location.href = "/PEAK-Lab/peoples/5_project/";
            },},{id: "peoples-vincent-sitzmann6",
          title: 'Vincent Sitzmann6',
          description: "Vincent is the principal investigator of the Scene Representation Group at MIT CSAIL, where he works as an assistant professor. Previously, he finished his PhD at Stanford University and a postdoc at MIT.  His research interest lies in neural scene representations — the way neural networks learn to represent information on our world.",
          section: "Peoples",handler: () => {
              window.location.href = "/PEAK-Lab/peoples/6_project/";
            },},{id: "peoples-vincent-sitzmann7",
          title: 'Vincent Sitzmann7',
          description: "Vincent is the principal investigator of the Scene Representation Group at MIT CSAIL, where he works as an assistant professor. Previously, he finished his PhD at Stanford University and a postdoc at MIT.  His research interest lies in neural scene representations — the way neural networks learn to represent information on our world.",
          section: "Peoples",handler: () => {
              window.location.href = "/PEAK-Lab/peoples/7_project/";
            },},{id: "peoples-vincent-sitzmann8",
          title: 'Vincent Sitzmann8',
          description: "Vincent is the principal investigator of the Scene Representation Group at MIT CSAIL, where he works as an assistant professor. Previously, he finished his PhD at Stanford University and a postdoc at MIT.  His research interest lies in neural scene representations — the way neural networks learn to represent information on our world.",
          section: "Peoples",handler: () => {
              window.location.href = "/PEAK-Lab/peoples/8_project/";
            },},{id: "peoples-vincent-sitzmann9",
          title: 'Vincent Sitzmann9',
          description: "Vincent is the principal investigator of the Scene Representation Group at MIT CSAIL, where he works as an assistant professor. Previously, he finished his PhD at Stanford University and a postdoc at MIT.  His research interest lies in neural scene representations — the way neural networks learn to represent information on our world.",
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
