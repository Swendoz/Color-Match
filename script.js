let winPercent = 95;
let isAssist = false;

let inputRed = document.querySelector("#input-red");
let inputGreen = document.querySelector("#input-green");
let inputBlue = document.querySelector("#input-blue");

let percentRed = document.querySelector("#percent-red");
let percentGreen = document.querySelector("#percent-green");
let percentBlue = document.querySelector("#percent-blue");

let rgbText = document.querySelector(".color-text");
let colorBox = document.querySelector(".color-box");
let container = document.querySelector(".container");

let cong = document.querySelector("#cong");

function getValues()
{
    let valueRed = inputRed.value;
    let valueGreen = inputGreen.value;
    let valueBlue = inputBlue.value;

    rgbText.textContent = `RGB(${ valueRed }, ${ valueGreen }, ${ valueBlue })`;
    container.style.backgroundColor = `rgb(${ valueRed }, ${ valueGreen }, ${ valueBlue })`;
}

let percentRedText;
let percentGreenText;
let percentBlueText;

let checkRed = document.querySelector("#check-red");
let checkGreen = document.querySelector("#check-green");
let checkBlue = document.querySelector("#check-blue");

let redWin;
let greenWin;
let blueWin;

inputRed.addEventListener("input", () =>
{
    getValues();
    getPercentRed();
    checkWin();
})

function getPercentRed()
{
    if (randomRed < inputRed.value)
    {
        percentRedText = parseInt((randomRed / inputRed.value) * 100);
        percentRed.textContent = percentRedText + "%";
    }
    else
    {
        percentRedText = parseInt((inputRed.value / randomRed) * 100);
        percentRed.textContent = percentRedText + "%";
    }

    if (percentRedText >= winPercent)
    {
        if (isAssist)
        {
            checkRed.style.opacity = "1";
        }
        redWin = true;
        console.log(redWin);
    }
    else
    {
        if (isAssist)
        {
            checkRed.style.opacity = "0";
        }
        redWin = false;
    }
}

inputGreen.addEventListener("input", () =>
{
    getValues();
    getPercentGreen();
    checkWin();
})

function getPercentGreen()
{
    if (randomGreen < inputGreen.value)
    {
        percentGreenText = parseInt((randomGreen / inputGreen.value) * 100);
        percentGreen.textContent = percentGreenText + "%";
    }
    else
    {
        percentGreenText = parseInt((inputGreen.value / randomGreen) * 100);
        percentGreen.textContent = percentGreenText + "%";
    }

    if (percentGreenText >= winPercent)
    {
        if (isAssist)
        {
            checkGreen.style.opacity = "1";
        }
        greenWin = true;
        console.log(greenWin);
    }
    else
    {
        if (isAssist)
        {
            checkGreen.style.opacity = "0";
        }
        greenWin = false;
    }
}

inputBlue.addEventListener("input", () =>
{
    getValues();
    getPercentBlue();
    checkWin();
})

function getPercentBlue()
{
    if (randomBlue < inputBlue.value)
    {
        percentBlueText = parseInt((randomBlue / inputBlue.value) * 100);
        percentBlue.textContent = percentBlueText + "%";
    }
    else
    {
        percentBlueText = parseInt((inputBlue.value / randomBlue) * 100);
        percentBlue.textContent = percentBlueText + "%";
    }

    if (percentBlueText >= winPercent)
    {
        if (isAssist)
        {
            checkBlue.style.opacity = "1";
        }
        blueWin = true;
        console.log(blueWin);
    }
    else
    {
        if (isAssist)
        {
            checkBlue.style.opacity = "0";
        }
        blueWin = false;
    }
}

// Play

function getRandom(min, max)
{
    return parseInt(Math.random() * (max - min) + min);
}

let randomRed;
let randomGreen;
let randomBlue;

function resetGame()
{
    redWin = false;
    greenWin = false;
    blueWin = false;
    console.log("Resetted");
}

function playGame()
{
    resetGame();

    randomRed = getRandom(0, 256);
    randomGreen = getRandom(0, 256);
    randomBlue = getRandom(0, 256);

    console.log("Game Started");
    console.log(`rgb(${ randomRed }, ${ randomGreen }, ${ randomBlue })`);

    colorBox.style.backgroundColor = `rgb(${ randomRed }, ${ randomGreen }, ${ randomBlue })`;

    getValues();
    getPercentRed();
    getPercentGreen();
    getPercentBlue();
}

function checkWin()
{
    if (redWin && greenWin && blueWin)
    {
        setTimeout(gameWin, 2000);
    }
}

function gameWin()
{
    if (redWin && greenWin && blueWin)
    {
        console.log("You won");
        playGame();
        clearTimeout(gameWin);
        cong.volume = 0.3;
        cong.play();
    }
}

playGame();

// Skip

let skipButton = document.querySelector(".skip");
let skipText;

skipButton.addEventListener("mouseover", () =>
{
    skipText = skipButton.textContent;
    skipButton.textContent = "I am noob";
})

skipButton.addEventListener("mouseout", () =>
{
    skipButton.textContent = skipText;
})

skipButton.addEventListener("click", () =>
{
    playGame();
})

// Checkbox

let noSettings = document.querySelector("#no-setting");
let assistSetting = document.querySelector("#assist-setting");
let percentSetting = document.querySelector("#percent-setting");

noSettings.addEventListener("change", () =>
{
    percentRed.classList.add("hide");
    percentGreen.classList.add("hide");
    percentBlue.classList.add("hide");
    isAssist = false;
    checkRed.style.opacity = "0";
    checkGreem.style.opacity = "0";
    checkBlue.style.opacity = "0";
})

assistSetting.addEventListener("change", () =>
{
    percentRed.classList.add("hide");
    percentGreen.classList.add("hide");
    percentBlue.classList.add("hide");
    isAssist = true;
})

percentSetting.addEventListener("change", () =>
{
    percentRed.classList.remove("hide");
    percentGreen.classList.remove("hide");
    percentBlue.classList.remove("hide");
    isAssist = false;
    checkRed.style.opacity = "0";
    checkGreem.style.opacity = "0";
    checkBlue.style.opacity = "0";
})

