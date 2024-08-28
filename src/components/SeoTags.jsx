import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

export default function SeoTags() {
    const { pathname } = useLocation()
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    const [img, setImg] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        if (pathname === "/") {
            setName("Home")
            setTitle("Top IT Services Company - Technic Mentors")
            setUrl("https://technicmentors.com/")
            setImg("https://technicmentors.com/static/media/technicblue.524a6a4b92880f2eb36b.png")
            setDescription("Enhance your business operations and technological capabilities by partnering with the ideal IT services company to provide tailored solutions and support..")
        } else if (pathname === "/about") {
            setName("About")
            setTitle("About Us - Technic Mentors")
            setUrl("https://technicmentors.com/about")
            setImg("https://technicmentors.com/assets/img/technologies.webp")
            setDescription("Technic mentors is the best IT consulting company to look at when searching for extraordinary software and technology solutions. We provide value-added and..")
        } else if (pathname === "/team") {
            setName("Team")
            setTitle("Meet Our Expert Software Development Team - Technic Mentors")
            setUrl("https://technicmentors.com/team")
            setImg("https://technicmentors.com/assets/img/team/nadeem-pic Technic Mentors.webp")
            setDescription("Meet the expert software development team at Technic Mentors. Our skilled professionals deliver innovative solutions tailored to your business needs.")
        } else if (pathname === "/our-portfolio") {
            setName("Our Portfolio")
            setTitle("Innovative Software Projects - Our Portfolio of Success")
            setUrl("https://technicmentors.com/our-portfolio")
            setImg("https://technicmentors.com/assets/img/portfolio-img.png")
            setDescription("Our portfolio showcases a spectrum of software services, from web and mobile app development to custom solutions, AI, blockchain, and cloud technologies..")
        } else if (pathname === "/web-development-services") {
            setName("Web Development Services")
            setTitle("Web Design & Development Services - Technic Mentors")
            setUrl("https://technicmentors.com/web-development-services")
            setImg("https://technicmentors.com/assets/img/web-development-services.gif")
            setDescription("Web development services encompass two essential steps: web design and web development. Web design focuses on the aesthetics and visual appeal of your website..")
        } else if (pathname === "/software-development-services") {
            setName("Software Development Services")
            setTitle("Software Development Services - Technic Mentors")
            setUrl("https://technicmentors.com/software-development-services")
            setImg("https://technicmentors.com/assets/img/software-development-services.gif")
            setDescription("Software development services encompass a series of essential steps involving the developing business solutions. These steps include identifying needs, analy..")
        } else if (pathname === "/mobile-app-development-services") {
            setName("Mobile App Development Services")
            setTitle("Mobile App Development Services - Technic Mentors")
            setUrl("https://technicmentors.com/mobile-app-development-services")
            setImg("https://technicmentors.com/assets/img/mobile-app-development-services.gif")
            setDescription("Mobile app development services play a pivotal role in elevating businesses, offering a range of benefits. In today’s digital landscape, mobile applications..")
        } else if (pathname === "/seo-services") {
            setName("Seo Services")
            setTitle("Best SEO Services - Technic Mentors")
            setUrl("https://technicmentors.com/seo-services")
            setImg("https://technicmentors.com/assets/img/seo-services.gif")
            setDescription("SEO services involve optimizing your website to improve its ranking on search engine result pages when users search for products or services related to your..")
        } else if (pathname === "/digital-marketing-services") {
            setName("Digital Marketing Services")
            setTitle("Digital Marketing Services - Technic Mentors")
            setUrl("https://technicmentors.com/digital-marketing-services")
            setImg("https://technicmentors.com/assets/img/digital-marketing.gif")
            setDescription("promoting brands via internet-based platforms, social media, and various digital communication channels is commonly referred to as digital marketing services.")
        } else if (pathname === "/graphics-designing-services") {
            setName("Graphics Designing Services")
            setTitle("Best Graphic Designing Services - Technic Mentors")
            setUrl("https://technicmentors.com/graphics-designing-services")
            setImg("https://technicmentors.com/assets/img/graphics-designing-services.gif")
            setDescription("Graphics designing services involve the skilled creation of visual content aimed at effectively conveying messages. Designers employ typography and graphics..")
        } else if (pathname === "/education-management-system") {
            setName("Education Management System")
            setTitle("Education Management System - Technic Mentors")
            setUrl("https://technicmentors.com/education-management-system")
            setImg("https://technicmentors.com/assets/img/erp-accounting-software.webp")
            setDescription("Manage schools, colleges, and universities with our Educational Management System. Streamline operations, boost learning, track student progress efficiently.")
        } else if (pathname === "/erp-solutions") {
            setName("Erp Solutions")
            setTitle("Enterprise Resource Planning- Technic Mentors")
            setUrl("https://technicmentors.com/erp-solutions")
            setImg("https://technicmentors.com/assets/img/erp-accounting-software.webp")
            setDescription("We offer a full range of value-added ERP accounting software and Customer Relationship Management services for customers with new and existing solution deplo..")
        } else if (pathname === "/ecommerce-solutions") {
            setName("Ecommerce Solutions")
            setTitle("Ecommerce Solutions - Technic Mentors")
            setUrl("https://technicmentors.com/ecommerce-solutions")
            setImg("https://technicmentors.com/assets/img/ecommerce-solutions.webp")
            setDescription("Our Ecommerce Solutions are designed to help your business thrive in the competitive online landscape. We offer a user-friendly platform with seamless..")
        } else if (pathname === "/point-of-sale") {
            setName("Point Of Sale")
            setTitle("Best POS Software- Technic Mentors")
            setUrl("https://technicmentors.com/point-of-sale")
            setImg("https://technicmentors.com/assets/img/point-of-sale.webp")
            setDescription("The efficiency and effectiveness of your Point of Sale (POS) system can make all the difference. Our cutting-edge POS solution is engineered to empower busi..")
        } else if (pathname === "/industries") {
            setName("Industries")
            setTitle("Industries We Serve")
            setUrl("https://technicmentors.com/industries")
            setImg("https://technicmentors.com/static/media/healthTech.7f3b9393fa88e356846e.webp")
            setDescription("Explore the diverse industries supported by Technic Mentors software solutions. From retail to education, find tailored software for your business needs.")
        } else if (pathname === "/help") {
            setName("Help")
            setTitle("Technic Mentors Help Info")
            setUrl("https://technicmentors.com/help")
            setImg("https://technicmentors.com/static/media/help-img.e98695db018ac2bee340.avif")
            setDescription("Visit Technic Mentors Help Center for guides and support on school management software, including troubleshooting, administration, and live reporting.")
        } else if (pathname === "/blog") {
            setName("Blog")
            setTitle("Blogs - Technic Mentors")
            setUrl("https://technicmentors.com/blog")
            setDescription("Explore insights, tips, and latest trends in IT on Technic Mentors blog. Stay informed and inspired with our expert articles and updates on tech innovations.")
        } else if (pathname === "/faq-page") {
            setName("FAQ'S")
            setTitle("Faq's - Technic Mentors")
            setUrl("https://technicmentors.com/faq-page")
            setDescription("Find answers to common questions about our IT services at Technic Mentors. If your query isn't covered, contact us—we're here to help with all your tech needs!")
        } else if (pathname === "/contact") {
            setName("Contact")
            setTitle("Contact Us - Technic Mentors")
            setUrl("https://technicmentors.com/contact")
            setDescription("Have any query? Our support team is always there to respond you. Just drop a message here and we will get back to you.")
        }
    }, [pathname])
    return (
        <>
            <Helmet>
                <title>{title}</title>
                {/* open grapgh tag */}
                <meta property="og:title" content={name} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={img} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />

                {/* twitter card  */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@TechnicMentors" />
                <meta name="twitter:title" content={name} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={img} />

                {/* Schema.org structured data */}
                <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": url,
            "name": "Technic Mentors",
            "description": description ,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://technicmentors.com/search?q={search_term_string}",
                "actionPlatform": [
                  "https://schema.org/DesktopWebPlatform",
                  "https://schema.org/IOSPlatform",
                  "https://schema.org/AndroidPlatform"
                ]
              },
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>
                <link rel="canonical" href={url} />
                <meta name="description" content={description} />
            </Helmet>
        </>
    )
}
