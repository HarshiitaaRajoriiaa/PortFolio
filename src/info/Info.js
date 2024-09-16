import am from "../img/2am.jpg"
import brain from "../img/brain.jpg"
import food from "../img/foodpoint.jpg"


export let colors = ["#CB80AB" ,"#624E88" ];
export let singlePage = true; 
export const info = {
    firstName: "Harshita ;",
    lastName: "Rajoria",
    // initials: "hr", // the example uses first and last, but feel free to use three or more if you like.
    position: "a web developer",
    // selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
        {
            text: ' </> Fueled by coffee'
        },
        {
            text: " </> Pre Final Year student at IGTDUW"
        },
        {
            text: " </> harshitarajoria02@gmail.com"
        },
        {
            text: " </> Download resume from here: "
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/theycallme_harshita/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        
        {
            link: "https://github.com/HarshiitaaRajoriiaa",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/harshita-rajoria-68110b24a/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
    ],
    bio: "Hi! I'm Harshita. I'm a student at Indira Gandhi Delhi Technical University. I enjoy looking at mountains for hours, and I have keen interest in designing and web development. you should hire me if you want to make your website more beautiful and user friendly",
    skills:
        {
            proficientWith: ['javascript;',  'git;', 'github;',  'html5;', 'css3;', 'figma;', 'Java;' , 'SQL;' , 'Tailwind;'],
            exposedTo: [ 'react;' , 'python;' , 'R;' ]
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '</>'
        },
        {
            label: 'Dancing',
            emoji: '</>'
        },
        {
            label: 'Traveling',
            emoji: '</>'
        },
        {
            label: 'cooking',
            emoji: '</>'
        }

    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "2 A.M Thoughts",
            source: "https://github.com/HarshiitaaRajoriiaa/2-A.M-Thoughts?tab=readme-ov-file", // this should be a link to the **repository** of the project, where the code is hosted.
            image: am
        },
        {
            title: "Brain Tumor Classification",
            source: "https://github.com/HarshiitaaRajoriiaa/Brain-Tumor-Classifiction",
            image: brain
        },
        {
            title: "E-Commerce website",
            source: "https://github.com/HarshiitaaRajoriiaa/Food-point-website",
            image: food
        }
    ]
}