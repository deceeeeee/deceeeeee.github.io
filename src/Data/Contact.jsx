const ContactInfo = () => {
    return {
        'maps'   : {
            link: 'https://www.google.com/maps/place/Jl.+Green+Lake+City+Boulevard+No.B-15,+Petir,+Kec.+Cipondoh,+Kota+Tangerang,+Banten+15147/@-6.1821279,106.7097069,17.53z/data=!4m5!3m4!1s0x2e69f9cd092c2f07:0xa5d1579ad26e89e9!8m2!3d-6.1823774!4d106.7096752',
            image: 'gmaps/taraco-loc.png'
        },
        'address': "Rukan New Castle B15 \n Green Lake City Boulevard \n Cipondoh, South Tangerang",
        'phoneno': '+62 851-6280-6181',
        'email': 'info@tarcodesign.id',
        'socmed': [
            {
                name: "Instagram",
                link: "https://www.instagram.com/taracodesign/",
                show: true,
                faIcon: ['fab', 'instagram']
            },
            {
                name: "Facebook",
                link: 'https://www.facebook.com/taracodesign/',
                show: true,
                faIcon: ['fab', 'facebook']
            },
            {
                name: "LinkedIn",
                link: '',
                show: false,
                faIcon: ['fab', 'linkedin']
            }
        ]
    };
}

export default ContactInfo;