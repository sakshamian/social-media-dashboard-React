import './UpperCards.css';
import './Heading.js';

const cardData = [
    {
        img: "images/icon-facebook.svg",
        name: "@nathanf",
        count: "1987",
        medium: "FOLLOWERS",
        voteIcon: "up",
        voteNum: "12"
    },
    {
        img: "images/icon-twitter.svg",
        name: "@nathanf",
        count: "1044",
        medium: "FOLLOWERS",
        voteIcon: "up",
        voteNum: "99"
    },
    {
        img: "images/icon-instagram.svg",
        name: "@realnathanf",
        count: "11 k",
        medium: "FOLLOWERS",
        voteIcon: "up",
        voteNum: "1099"
    },
    {
        img: "images/icon-youtube.svg",
        name: "NATHAN F.",
        count: "1987",
        medium: "SUBSCRIBERS",
        voteIcon: "down",
        voteNum: "144"
    },
];
function UpperCards(){
    
    const cardsArr = cardData.map((ele,i) => {
        return (
            <div className="column" key={i}>
              <div className={`card card-${i+1}`}>
                <div className="tag">
                    <img src={ele.img} alt="icon"/>
                    <div className="name fade">{ele.name}</div>
                </div>
                <h1>{ele.count}</h1>
                <div className="low fade">{ele.medium}</div>
                <div className={`low ${ele.voteIcon}`}>
                    <img src={`images/icon-${ele.voteIcon}.svg`} alt="vote"/>
                    {`${ele.voteNum} Today`}
                </div>
              </div>
            </div>
        );
    });
    return (
        <div className='row'>{cardsArr}</div>
    );
}

export default UpperCards;