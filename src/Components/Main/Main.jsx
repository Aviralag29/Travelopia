import React, { useEffect } from 'react'
import './main.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import img1 from '../../Assets/img1.jpeg'
import img2 from '../../Assets/img2.jpeg'
import img3 from '../../Assets/img3.jpeg'
import img4 from '../../Assets/img4.jpeg'
import img5 from '../../Assets/img5.jpeg'
import img6 from '../../Assets/img6.jpeg'
import img7 from '../../Assets/img7.jpeg'
import img8 from '../../Assets/img8.jpeg'
import img10 from '../../Assets/img10.jpeg'
import img14 from '../../Assets/img14.jpeg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Cabbage Beach',
        location: 'Paradise Island',
        grade: 'CULTURAL RELAX',
        fees: '₹27,999',
        description: 'This stunning Bahamian beach on the north coast of Paradise Island is perfect for a day of fun in the sun. The fine powdery sand and inviting waters make it an ideal spot for sunbathing (there are sunchairs and umbrellas for rent from the beach club, too), swimming, and other water activities. Be careful when swimming though—the waves can be a little rough and there is no lifeguard on duty.'
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Spirit Falls',
        location: "Washington's dc, USA",
        grade: 'CULTURAL RELAX',
        fees: '₹29,999',
        description: "Washington’s waterfalls are second to none. While our superstars like Snoqualmie Falls and Spokane Falls require no effort to see, some of our most stunning falls require a little extra effort. The next time you find yourself in the Columbia River Gorge and you are up for a challenge, try making the hike to Spirit Falls."
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Tulum Beach',
        location: "Mexico",
        grade: 'CULTURAL RELAX',
        fees: '₹22,999',
        description: "Tulum may well be one of the most Instagrammed spots in Mexico, with plenty of smoothie stands and yoga retreats, but the Caribbean beach town is so much more. In between dips in the cerulean waters, you can hike through dense jungle and explore a subterranean river at LabnaHa Eco Park. Or tour the ancient Mayan ruins that tower over town. (Tulum was the last city inhabited by the indigenous group.) Or hop on an ATV for an off-roading adventure across the sugary sand dunes. And after all that heart-pumping activity, eat your heart out at the authentic mezcalerias, low-key beach shacks, and celeb-chef, fine-dining spots."
    },

    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Taj Mahal',
        location: "Agra, India",
        grade: 'CULTURAL RELAX',
        fees: '₹9,599',
        description: "Taj Mahal is the epitome of grandeur and splendour, you cannot fathom the beauty of this white marbled monument unless you stand in front of it. As you approach Taj Mahal, it gradually becomes known to you that this is no ordinary monument, but a vision come to life! Moved by its beauty and the deep affection of Shah Jahan for Mumtaz, the Nobel Laureate Rabindranath Tagore called it a teardrop on the face of eternity. A UNESCO World Heritage Site, it is located on the bank of the Yamuna River and is counted among the most popular heritage monuments in India."
    },

    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Mediterranean White Santorini',
        location: "South Aegean, Greece",
        grade: 'CULTURAL RELAX',
        fees: '₹22,999',
        description: "White-Washed Buildings, Poolside Restaurant offering Greek dishes, Volcanic Beach nearby, can you guess where this hotel is? SMY Mediterranean White is a stylish, boutique hotel tucked away in Agia Paraskevi- Kamari. Offering unique rooms, if a stay in a Windmill is on your bucket list, you're in luck! There's Deluxe Windmill Suites with a Shared Pool!!"
    },

    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Rocky Mountain National Park',
        location: "Denver, Colorado",
        grade: 'CULTURAL RELAX',
        fees: '₹24,999',
        description: "Rocky Mountain National Park is located in Denver, Colorado. It is vast and encompasses 415 square miles of mountainous environment. Although it is not the largest park or the highest mountain in the US, it offers a lot to see and experience. It is one of the most visited national parks in the US and attracts 4.5 million visitors each year.Aside from the 350 miles of trails, the park is also home to approximately 450 miles of streams and rivers and has 150 lakes. There are about 77 mountain peaks within the park, and each point of elevation gives you a glorious view. A large part of the park, about 260,000 acres, is designated as protected wilderness."
    },

    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Cinderella Castle',
        location: "UK",
        grade: 'CULTURAL RELAX',
        fees: '₹43,999',
        description: "Cinderella Castle, the main entrance to Fantasyland, is the most photographed building at Walt Disney World. Over the years, it has undergone some changes, from being transformed to a large, pink, candy trimmed 25th Anniversary cake, to the more ornate gold-trimmed spectacle that was added to the facade during the Happiest Celebration on Earth."
    },

    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Machu Picchu',
        location: "Southern Peru",
        grade: 'CULTURAL RELAX',
        fees: '₹27,499',
        description: "Machu Picchu stands 2,430 m above sea-level, in the middle of a tropical mountain forest, in an extraordinarily beautiful setting. It was probably the most amazing urban creation of the Inca Empire at its height; its giant walls, terraces and ramps seem as if they have been cut naturally in the continuous rock escarpments. The natural setting, on the eastern slopes of the Andes, encompasses the upper Amazon basin with its rich diversity of flora and fauna."
    },
    {
        id: 9,
        imgSrc: img10,
        destTitle: 'Maldives Island',
        location: "Indian Ocean",
        grade: 'CULTURAL RELAX',
        fees: '₹29,999',
        description: "It’s truly wonderful when nature gives us a new lease of life. And that’s exactly what you can expect in the Maldives, one of the most beautiful tropical archipelagos and among the most extraordinary places on the planet. The Maldives are made up of 1,200 islands that form 26 dreamy atolls. These are truly timeless places, where you can spend the days swinging on undholi, swings of varying sizes that dotted across the landscape and give a sense of rhythm to the stillness. Enjoy them while looking out at the truly captivating sea. The world keeps turning, but here, everything stops, just for you to enjoy the watercolour-like scenery. The sea here is all shades of green and blue, turning a wonderful shade of pink in the evenings like you’ve never seen before"
    },

    {
        id: 10,
        imgSrc: img14,
        destTitle: 'Mount Fuji',
        location: "Japan",
        grade: 'CULTURAL RELAX',
        fees: '₹59,949',
        description: "Mount Fuji, with its graceful conical form, has become famous throughout the world and is considered the sacred symbol of Japan. Among Japanese there is a sense of personal identification with the mountain, and each summer thousands of Japanese climb to the shrine on its peak. Its image has been reproduced countless times in Japanese art, perhaps no more famously than in the series of woodblock prints Thirty-six Views of Mount Fuji by Hokusai, which were originally published between 1826 and 1833."
    }
]

const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    return (
        <section className='main container section'>

            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">

                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id}
                                data-aos="fade-up"
                                className="singleDestination">

                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS <HiOutlineClipboardCheck className='icon' />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </section>
    )
}

export default Main
