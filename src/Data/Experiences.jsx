const ExperienceData = () => {
    return {
        workCareer: [
            {
                title: 'Co-Founder & CTO',
                caption: 'Landack. | Nov 2022 - Dec 2024',
                desc: `
                    Landack is a digital platform which provides legal consultation and other legal services with affordable price and great accessibility for everyone in Indonesia. Landack was initiated from our concern towards the lack of literation and awareness of law in Indonesia, which drives our purpose to provide reachable legal accessibility for every people in order to raise law awareness and literation in Indonesia.
                    <br />
                    Tech Stack: <strong>PHP · Laravel · MySQL · ReactJS · React Native · Express</strong>
                `
            }, 
            {
                title: 'Co-Founder & CTO',
                caption: 'MyPangan | Jan 2021 - May 2022',
                desc: 'MyPangan is a groceries e-commerce platform that enables customers to buy their groceries online. <br/> Tech Stack: <strong>Laravel · PostgreSQL · Kotlin(Android)</strong>'
            },
            {
                title: 'Web Developer',
                caption: 'PT Animasi Kreatif Indonesia | Sept 2020 - May 2023',
                desc: 'This company provides web-based online games. Players are allowed to do an in-game purchase in this platform. <br/> Tech Stack: <strong>PHP · Lucee(CFML) · MySQL · JavaScript · JQuery · AngularJS</strong>',
            },
            {
                title: 'Intern',
                caption: 'GE Software, Shenyang | Sept 2019',
                desc: 'GE Software is an IT company located in Shenyang, Liaoning. This company is collaborating with my university to hold an internship program. The duration of the intership was three weeks. <br /> Tech Stack: <strong>Python 3</strong>'
            }
        ],
        project: [
            // {
            //     title: 'Law Firm Website',
            //     caption: 'Lexvaya Law Firm | Jul 2024',
            //     desc: `
            //         Lexvaya is a dynamic law firm specializing in Finance, Banking, and Corporate Law.
            //          <br />
            //         Tech Stack: <strong>HTML · CSS · JS</strong>
            //     `
            // },
            {
                title: 'E-commerce Website',
                caption: 'YoboyCup | June 2024 - Present',
                desc: `
                    YoboyCup website is upgraded company profile website to e-commerce, which provides transaction features for users to buy customized F&B packages. The platform consists of: 
                     <br />
                    <ul>
                        <li> Dashboard as CMS & Master Data Management </li>
                        <li> Main Core, to maintain authentication and products </li>
                        <li> Payment Core, as connector between YoboyCup & Payment Gateway </li>
                        <li> Mail Core, to send mail OTP </li>
                        <li> Client Website, where people can access and buy YoboyCup customized packages! </li>
                    </ul>
                    Tech Stack: <strong>Laravel · Express · React.js</strong>
                `,
                isActive: true
            },
            {
                title: 'House of Beef Mini POS',
                caption: 'Cahaya Meat | May 2024 - Present',
                desc: `
                    House of Beef is a mini POS system for a meat store. This system is used to manage storefront for their customers to buy House of Beef products whenever they are doing TikTok Live, and integrated with shipping services for product delivery.
                     <br />
                    Tech Stack: <strong>Laravel · Express · Next.js</strong>
                `,
                isActive: true,
            },
            // {
            //     title: 'Law Firm Website',
            //     caption: 'PRP Law Firm | Nov 2022 - Dec 2022',
            //     desc: `
            //         Pribadi Randa & Partners is a professional boutique law firm.
            //          <br />
            //         Tech Stack: <strong>HTML · CSS · JS</strong>
            //     `
            // },
            // {
            //     title: 'E-Commerce Website',
            //     caption: 'Rednavi Sneakers | Oct 2022 - Dec 2023',
            //     desc: `
            //         Develop an e-commerce website for Rednavi Sneakers Store, which provides authentic sneakers such as Air Jordan and Yeezy. The platform consists of: <br />
            //         <ul>
            //             <li> Dashboard as CMS & Master Data Management </li>
            //             <li> Core API, to connect between server DB to client website </li>
            //             <li> Client Website, where people can access and shop some sneakers! </li>
            //         </ul>
            //         Tech Stack: <strong>Laravel · Express · React.js</strong>
            //     `
            // },
            {
                title: 'SNAP Converter',
                caption: 'PT Qoin Digital Indonesia | Jul 2023 - Aug 2023',
                desc: `
                    Develop SNAP Converter as a integrator system to support them in following National Payment API Standard (SNAP) regulated by Bank of Indonesia. Scope of work includes:
                    <ul>
                        <li> SNAP Modules </li>
                        <li> Converter Modules </li>
                        <li> SNAP Developer Site Testing </li>
                    </ul>
                    Tech Stack: <strong>Express</strong>
                `
            },
            // {
            //     title: 'Interior Design Website',
            //     caption: 'Taraco Interior Design | Apr 2021 - May 2022',
            //     desc: `
            //         Creating company profile website for Taraco as furniture and interior design service. There are two special features in this website. This website implements <strong>Advanced UI/UX</strong> and use <strong>Custom Cursor</strong>. 
            //         <br/> Tech Stack: <strong>Node.js · JavaScript · React.js</strong>`
            // },
            // {
            //     title: 'Company Profile Website',
            //     caption: 'Agriculture Hub | Mar 2022',
            //     desc: `
            //         Creating company profile website for Agriculture Hub to introduce them as agricultural and forestry commodities trading company. 
            //         <br/> Tech Stack: <strong>Node.js · JavaScript · React.js</strong>
            //     `
            // },
            // {
            //     title: 'Virtual Research Poster Exhibition',
            //     caption: 'Tarumanagara University | Nov 2020 - Dec 2020',
            //     desc: `
            //         Virtual Research Poster Exhibition is an annual event held by Tarumanagara University and Minister of Research and Technology. In this project, I created database and combined it with file system to store hundreds of posters. 
            //         <br/> Tech Stack: <strong>PHP · MySQL</strong>`
            // }
        ],
        education: [
            {
                title: 'Shenyang Aerospace University',
                caption: 'Bachelor of Computer Science & Technology | Sept 2016 - July 2020',
                desc: 'Bachelor Thesis: Furniture Store Website; <br /> Furniture Store Website is focusing on Smart Recommendation System, which is studying customer behaviour, their interest on types of furnitures. Then the website will display furnitures that they are interested in. <br/> Tech Stack: <strong>JSP (Java Server Page) · MySQL</strong>'
            }
        ]
    };
}

export default ExperienceData;