const Parallax = () => {
    // template => {
    //     imageName,
    //     opacity,
    //     title,
    //     titleIcon,
    //     height
    // }

    return [
        {
            imageName: 'firstbackground.jpg',
            opacity: 0.3,
            height: '27vh'
        },
        {
            imageName: 'secondbackground.JPG',
            opacity: 0.1,
            title: 'Proficiencies',
            titleIcon: ['fas', 'gears']
        },
        {
            imageName: 'thirdbackground.png',
            opacity: 0.2,
            title: 'Experience',
            titleIcon: ['fas', 'suitcase']
        },
        {
            imageName: 'fourthbackground.jpg',
            opacity: 0.1,
            title: 'Projects',
            titleIcon: ['fas', 'clipboard']
        },
        {
            imageName: 'thirdbackground(alternate).png',
            opacity: 0.2,
            title: 'Contact'
        }
    ];
}

export default Parallax;