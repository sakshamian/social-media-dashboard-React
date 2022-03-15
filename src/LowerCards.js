import './LowerCards.css';

const rowOne = [
    {
        type: 'Page Views',
        icon: 'images/icon-facebook.svg',
        count: '87',
        voteType: 'up',
        voteNum: '3%'
    },
    {
        type: 'Likes',
        icon: 'images/icon-facebook.svg',
        count: '52',
        voteType: 'down',
        voteNum: '2%'
    },
    {
        type: 'Likes',
        icon: 'images/icon-instagram.svg',
        count: '5462',
        voteType: 'up',
        voteNum: '2257%'
    },
    {
        type: 'Profile Views',
        icon: 'images/icon-instagram.svg',
        count: '52k',
        voteType: 'up',
        voteNum: '1375%'
    }
];

const rowTwo = [
    {
        type: 'Retweets',
        icon: 'images/icon-twitter.svg',
        count: '117',
        voteType: 'up',
        voteNum: '303%'
    },
    {
        type: 'Likes',
        icon: 'images/icon-twitter.svg',
        count: '507',
        voteType: 'up',
        voteNum: '553%'
    },
    {
        type: 'Likes',
        icon: 'images/icon-youtube.svg',
        count: '107',
        voteType: 'down',
        voteNum: '19%'
    },
    {
        type: 'Total Views',
        icon: 'images/icon-youtube.svg',
        count: '1407',
        voteType: 'down',
        voteNum: '12%'
    }
];
function LowerCards(){
    // const[mode, changeState] = useState("false");

    const row1 = rowOne.map((ele,i)=>{
        return(
            <div className="column" key={i}>
                <div className={`card`}>
                <div className="top">
                    <h4 className="fade">{ele.type}</h4>
                    <img src={ele.icon} alt="icon"/>
                </div>
                <div className="bottom">
                    <h2 className="adjust">{ele.count}</h2>
                    <div className={`low ${ele.voteType}`}>
                        <img src={`./images/icon-${ele.voteType}.svg`} alt="vote"/>
                        {ele.voteNum}
                    </div>        
                </div>
                </div>
            </div>
        );
    });
    const row2 = rowTwo.map((ele,i)=>{
        return(
            <div className="column" key={i}>
                <div className="card darkCard">
                <div className="top">
                    <h4 className="fade">{ele.type}</h4>
                    <img src={ele.icon} alt="icon"/>
                </div>
                <div className="bottom">
                    <h2 className="adjust">{ele.count}</h2>
                    <div className={`low ${ele.voteType}`}>
                        <img src={`./images/icon-${ele.voteType}.svg`} alt="vote"/>
                        {ele.voteNum}
                    </div>        
                </div>
                </div>
            </div>
        );
    });

    return(
        <div>
            <div className='row 1'>{row1}</div>
            <div className='row 2'>{row2}</div>
        </div>
    );
}

export default LowerCards;