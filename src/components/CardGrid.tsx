import "./../assets/styles/CardGrid.css"

type cardStatus = "SOLD OUT" | "ONLINE";

interface cardGrid {
    cardImg: string
    cardStatus: cardStatus
    grade: number
    country: string
    text: string
    count: number
    value: number
}

export default function CardGrid() {

    let katie: cardGrid = {
        cardImg: "./../../public/katie-zaferes.png",
        cardStatus: "SOLD OUT",
        grade: 5.0,
        country: "USA",
        text: "Life lessons with Katie Zaferes",
        count: 6,
        value: 136
    }

    let arr = [katie];

    return (
        <div>
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
            <div className="cardImage--status"><p>{params.cardStatus}</p></div>
        </div>
    )
}

export function CardInfo(params: cardGrid){

    return(
        <div className="cardInfo">
            <span className="cardInfo--grade">
                <img className="cardInfo--grade--star" src="./../../public/star.png" alt="star" />
                <p className="cardInfo--grade--grade">{params.grade.toFixed(1)}</p>
                <p className="cardInfo--grade--count-country">({params.count}) · {params.country}</p>
            </span>
            <p className="cardInfo--text">{params.text}</p>
            <p className="cardInfo--value"><strong>From ${params.value}</strong> / person</p>
        </div>
    )

}