const CntDisp = (probs) => {


    const input = probs.input;
    return (
        <article>
            <h1>입력값: {input} , 입력값 2배:{input *2}</h1>
        </article>
    );
}

export default CntDisp;