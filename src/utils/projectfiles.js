import ideaforaIcon from '../assets/img/ideaforaIcon.png';
import binaryliteralIcon from '../assets/img/binaryliteralIcon.png';
import quizzlestickIcon from '../assets/img/quizzlestickIcon.png';
import weathervainIcon from '../assets/img/weathervainIcon.png';
import elevenhourclockIcon from '../assets/img/elevenhourclockIcon.png';
import passwordIcon from '../assets/img/passwordIcon.png';
import botaIcon from '../assets/img/botaProject.png';

//remember to update index.css if there are any updates to the projects below
//these projects will be mapped over into the portfolio
const projects = [
    {
        name: 'ideafora',
        text: "A user-generated website where people can exchange and solicit ideas and work for websites, apps, and games. Made with the wonderful Janelle Phalon, Claudia Davis, Lisa Jean, and Adam Payne",
        image: ideaforaIcon,
        link: "https://ihaveanideafora.herokuapp.com/",
        button: "-->"
    },
    {
        name: 'binaryliteral',
        text: "This is a culture blog that can be read in binary or english, meant to evoke the spirit of the 'zine and still pop on a phone screen.",
        image: binaryliteralIcon,
        link: "https://binaryliteral.herokuapp.com/",
        button: "-->"
    },
    {
        name: 'weathervain',
        text: "A very gif-positive weather webpage. This site's pronouns are fabulous and I bet you wish you knew them.",
        image: weathervainIcon,
        link: "https://becketbowes.github.io/weathervain/",
        button: "-->"
    },
    {
        name: 'elevenhourclock',
        text: "A progressive web app that is an analogue clock that divides the day into 11 hours, with 121 minutes per hour, 121 seconds per minute.",
        image: elevenhourclockIcon,
        link: "https://becketbowes.github.io/elevenHourClock/",
        button: "-->"
    },
    {
        name: 'password-generator',
        text: "A simple web interface that creates passwords to your specifications.",
        image: passwordIcon,
        link: "https://becketbowes.github.io/password/",
        button: "-->"
    },
    {
        name: 'quizzlestick',
        text: "A simple interactive and informative quiz about the history of javascript.",
        image: quizzlestickIcon,
        link: "https://becketbowes.github.io/quizzlestick/",
        button: "-->"
    },
    {
        name: 'bota',
        text: 'Lifestyle product page for a responsible body butter brand',
        image: botaIcon,
        link: "https://dry-badlands-33284.herokuapp.com/",
        button: '-->'
    }
]

export default projects;