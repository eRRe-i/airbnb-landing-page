import "./../assets/styles/CardGrid.css"

enum cardStatus { 
    soldOut = "SOLD OUT", 
    online = "ONLINE" 
}

interface cardGrid {
    cardImg: string
    cardStatus?: cardStatus
    grade: number
    country: string
    text: string
    count: number
    value: number
}

export default function CardGrid() {

    let arr = [
        {
            cardImg: "/katie-zaferes.png",
            cardStatus: cardStatus.soldOut,
            grade: 5.0,
            country: "USA",
            text: "Life lessons with Katie Zaferes",
            count: 6,
            value: 136
        },
        {
            cardImg: "/wedding-photography.png",
            cardStatus: cardStatus.online,
            grade: 5.0,
            country: "USA",
            text: "Learn wedding photography",
            count: 30,
            value: 125
        },
        {
            cardImg: "/mountain-bike.png",
            grade: 4.8,
            country: "USA",
            text: "Group Mountain Biking",
            count: 2,
            value: 50
        }
    ];

    return (
        <div className="cardGrid">
            {
                arr.map(
                    (item, index) => {
                        return (
                            <CardContainer 
                                cardImg={item.cardImg}
                                cardStatus={item.cardStatus} 
                                grade={item.grade} 
                                country={item.country}
                                text= {item.text}
                                count={item.count}
                                value={item.value} />
                            )
                    }
                )
            }
        </div>
    )
}

export function CardContainer(params : cardGrid) {
    return (
        <div className="cardContainer">
            <CardImage {...params} /> 
            <CardInfo {...params} />     
        </div>
    )
}

export function CardImage(params : cardGrid){

    return (
        <div className="cardImage">
            <img className="cardImage--img" src={params.cardImg} alt="card image" />
            {params.cardStatus && <div className="cardImage--status"><p>{ params.cardStatus}</p></div>}
        </div>
    )
}

export function CardInfo(params: cardGrid){

    return(
        <div className="cardInfo">
            <div className="cardInfo--grade">
                <img className="cardInfo--grade--star" src="./../../public/star.png" alt="star" />
                <p className="cardInfo--grade--grade">{params.grade.toFixed(1)}
                <span className="gray"> ({params.count}) · {params.country}</span></p>
            </div>
            <p className="cardInfo--text">{params.text}</p>
            <p className="cardInfo--value"><strong>From ${params.value}</strong> / person</p>
        </div>
    )

}