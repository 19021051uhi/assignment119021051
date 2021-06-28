import data from './data'


function QuestionsSection(){


    return (

        <div className="col-sm"> 
        <h3 className=" qtitle text-center">{data.balances.questions.title}</h3> 
        <div className="p-3 mb-2 bg-light">
            <div className="text-center">
                <img className="mb-4 rounded img-fluid" alt="balance" src='https://i-want-to-study-engineering.org/figs/balances.png' />
            </div>
            <p>{data.balances.questions.fullquestion.question}</p> 
        </div> 
    </div>

    );
}

export default QuestionsSection;