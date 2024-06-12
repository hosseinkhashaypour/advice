const adviceApi = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json()
    console.log(data);
    return data
}

adviceApi()

const displayAdvice = async () => {
    const adviceData = await adviceApi()
    if (adviceData && adviceData.slip && adviceData.slip.advice) {
        const adviceText = document.createElement("div");
        adviceText.className = "advice-container"
        adviceText.innerText = adviceData.slip.advice

        const adcviceIdtext = document.createElement("div")
        const adviceId = adviceData.slip.advice
        adcviceIdtext.className = "advice-id"
        adcviceIdtext.innerText = `Adivce Id : #${adviceData.slip.id}`
        // next btn

        const nextBtn = document.createElement("button")
        nextBtn.className = "nextBtn"
        nextBtn.innerText = "Next"

        nextBtn.addEventListener('click', () => {
            location.reload()
        })
        document.body.appendChild(adcviceIdtext)
        document.body.appendChild(adviceText)
        document.body.appendChild(nextBtn)
    }
}
displayAdvice()