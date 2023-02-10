const ProficiencyData = () => {
    return [
        {
            title: 'Back-end',
            items: [
                'PHP',
                'Laravel Framework',
                'Lucee (CFML)',
                'Express (Node JS)',
                'Database Design',
                'MySQL',
                'PostgreSQL',
                'Basic Python'
            ],
            icon: ['fas', 'code']
        },
        {
            title: 'Front-end',
            items: [
                'Bootstrap',
                'SASS/SCSS',
                'JavaScript',
                'JQuery',
                'AngularJS',
                'ReactJS'
            ],
            icon: ['far', 'file-code']
        },
        {
            title: 'Tools',
            items: [
                'Git (Version Control System)',
                'Web Hosting',
                'Basic Linux',
                'Docker'
            ],
            icon: ['fas', 'gear']
        },
        {
            title: 'Spoken Languages',
            items: [
                'Indonesia',
                'English',
                'Chinese'
            ],
            icon: ['fas', 'globe']
        }
    ]
}

export default ProficiencyData;