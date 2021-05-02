import React from 'react';
import ProjectShow from '../ProjectShow/ProjectShow';

const Projects = () => {
    const projects = [
        {
            name: 'Thirst Quencher',
            description: 'This is a full stack cocktail shop management website. [20th-29th April,2021]',
            features: [
                { feature: 'Different link for user and admin panel. Admin panel is fully protected.' },
                { feature: 'Payment system implemented using Stripe.' }
            ],
            livelink: 'https://cocktail-collection.web.app',
            clientlink: 'https://github.com/silviaplabon/Cocktail_collection_client',
            serverlink: ' https://github.com/silviaplabon/Cocktail_db_server',
            image: 'https://i.ibb.co/q7Ks8f2/cocktail1111.png',
            tools: ['HTML', 'Bootstrap', 'React', 'Node.js', 'Express.js', 'CRUD operations', 'MongoDB', 'FirebaseAuth']
        },
        {
            name: 'Mammoth Travel',
            description: 'This is a full stack web app providing travel service.[15th-18th April,2021]',
            features: [
                { feature: 'Selecting a service leads to a user to checkout page. From there User can place order.' },
                { feature: 'Admin can manage orders and products.' },
                { feature: 'Services are under processing for a user till checked by an admin.' },
            ],
            livelink: 'https://mammoth-travel.web.app',
            clientlink: 'https://github.com/silviaplabon/Mammoth-Travel-Client',
            serverlink: 'https://github.com/silviaplabon/Mammoth-Travel-Server',
            image: 'https://i.ibb.co/1QCRYMj/11111.png',
            tools: ['HTML', 'Bootstrap', 'React', 'Node.js', 'Express.js', 'CRUD operations', 'MongoDB', 'FirebaseAuth']
        },
        {
            name: 'Fragrences Stack',
            description: 'This is a fully responsive web app for a fragrences store.[27th -29th March],',
            features: [
                { feature: 'Different link for user and admin panel. Admin panel is fully protected.' },
                { feature: 'Payment system implemented using Stripe.' }
            ],
            livelink: 'https://productcollection-silvia.web.app/',
            clientlink: 'https://github.com/silviaplabon/Fragrences-Stack-Client',
            serverlink: 'https://github.com/silviaplabon/Fragrences-Stack-Server',
            image: 'https://i.ibb.co/gJWHTKv/frag.png',
            tools: ['HTML', 'Bootstrap', 'React', 'Node.js', 'Express.js', 'CRUD operations', 'MongoDB', 'FirebaseAuth'],
        },
        {
            name: 'Tiptop Riders',
            description: 'A front end based responsive ride sharing app.[20th -21th March],',
            features: [
                { feature: 'App has private route and google map' },
                { feature: 'Authentication using firebase' },
                { feature: 'Tools: HTML, Bootstrap, React, React-Google-Maps,FirebaseAuth.' }
            ],
            livelink: 'https://modest-euclid-ecd574.netlify.app/',
            clientlink: 'https://github.com/silviaplabon/Tiptop-Rider',
            serverlink: '',
            image: 'https://i.ibb.co/HxyzHh3/tiptop1.png',
            tools: ['HTML', 'Bootstrap', 'React', 'Google-Maps', 'FirebaseAuth'],
        },
        {
            name: 'English Sports Affiliation',
            description: 'a responsive front end based english sports collection app.[23th -24th February]',
            features: [
                { feature: 'Using api for loading leagues and detail' },
                { feature: 'Used route parameter dynamically and conditional formatting' }
            ],
            tools: ['HTML', 'Bootstrap', 'React'],
            livelink: 'https://blissful-shirley-3e9284.netlify.app/',
            clientlink: 'https://github.com/silviaplabon/English-Sports-Affiliation',
            serverlink: '',
            image: 'https://i.ibb.co/ZdsrzfY/englishsports.png'
        },



    ]
    console.log(projects)
    console.log(projects[0].features)
    return (
        <div className="">
            <h3 className="fw-bold text-center">MY BEST PROJECTS</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">
                {
                    projects.map(project => <ProjectShow project={project}></ProjectShow>)
                }

            </div>
        </div>
    );
};

export default Projects;