const inputList = ["Skill", "Edu", "Exp", "Ach", "Int", "Proj", "Cont"];
const inputTypes = ["Skills", "Education", "Experience", "Achievements", "Interests", "Projects", "Contacts"];
const formContainer = document.querySelector('.form');
const resumeCardAppend = document.querySelector('.resumeContent');

for(let i = 0; i < inputList.length; i++)
{
    const inputBox = document.createElement('input');
    inputBox.setAttribute('class', `input${inputList[i]}`);
    const appBttn = document.createElement('button');
    appBttn.setAttribute('class', 'appendBttn');
    appBttn.innerText = '+';

    const inputContainerBox = document.createElement('div');
    inputContainerBox.setAttribute('class', 'inputList');
    const inputLegend = document.createElement('legend');
    inputLegend.innerText = `${inputTypes[i]}`;

    const inputFS = document.createElement('fieldset');
    inputFS.setAttribute('class', 'inputContainer');

    inputContainerBox.appendChild(inputBox);
    inputContainerBox.appendChild(appBttn);

    inputFS.appendChild(inputLegend);
    inputFS.appendChild(inputContainerBox);

    formContainer.appendChild(inputFS);

    let counter = 4;
    if(inputTypes[i] === 'Skills')
    {
        counter = 9;
    }

    if(counter)
    {
        appBttn.addEventListener('click', ()=>{
            const appInputBox = document.createElement('input');
            appInputBox.setAttribute('class', `input${inputList[i]}`);

            const appInputContainerBox = document.createElement('div');
            appInputContainerBox.setAttribute('class', 'inputList');

            const removeInput = document.createElement('button');
            removeInput.setAttribute('class', 'appendBttn');
            removeInput.innerText = '-';

            if(counter)
            {
                appInputContainerBox.appendChild(appInputBox);
                appInputContainerBox.appendChild(removeInput);
                inputFS.appendChild(appInputContainerBox);
                --counter
            }

            removeInput.addEventListener('click', ()=>{
                appInputContainerBox.remove();
                ++counter;
            })
        })
    }
}




//This Important Function Move to Next Page as well as create resume
document.querySelector('.nextBttn').addEventListener('click', ()=>{
    document.querySelector('.formViewPort').style.display = 'none';
    document.querySelector('.preview').style.display = 'flex';

    document.querySelector('.name').innerHTML = document.querySelector('.inputName').value;
    document.querySelector('.about').innerHTML = document.querySelector('.inputAbout').value;

    for(let i = 0; i < inputList.length; i++)
    {
        const a = document.querySelector(`.input${inputList[i]}`).value;
        if(inputList[i] === 'Skill' || inputList[i] === 'Ach' || inputList[i] === 'Int')
        {
            if(a)
            {
                pumpAIP(inputList[i], inputTypes[i]);
            }
        }

        else if(inputList[i] === 'Edu' || inputList[i] === 'Exp' || inputList[i] === 'Proj')
        {
            if(a)
            {
                pumpEEP(inputList[i], inputTypes[i]);
            }
        }

        else if(inputList[i] === 'Cont' && a)
        {
            const apend = document.querySelectorAll('.inputCont');
            for(let j = 0; j < apend.length; j++)
            {
                const text = document.createElement('span');
                text.setAttribute('class', 'prof');
                const val = apend[j].value
                text.innerHTML = `${j + 1}. ${val}`;
                document.querySelector('.resumeProf').appendChild(text);
            }

        }
    }
});

const pumpAIP = (cls, val) =>{
    const card = document.createElement('div');
    const title = document.createElement('div');
    const content = document.createElement('div');
    const text1 = document.createElement('span');

    card.setAttribute('class', 'hList');
    title.setAttribute('class', 'hcardHeader');
    content.setAttribute('class', 'hcardContent');
    text1.setAttribute('class', 'hcardTitle');

    text1.innerHTML = `${val}`;

    const sel = document.querySelectorAll(`.input${cls}`);
    for(let j = 0; j < sel.length; j++)
    {
        const text2 = document.createElement('span');
        text2.setAttribute('class', 'hcardList');
        const list = sel[j].value;
        text2.innerHTML = `${j + 1}. ${list}`;
        content.appendChild(text2);
    }

    title.appendChild(text1);
    card.appendChild(title);
    card.appendChild(content);
    document.querySelector('.resumeAIP').appendChild(card);
}

const pumpEEP = (cls, val) =>{
    const card = document.createElement('div');
    const title = document.createElement('div');
    const content = document.createElement('div');
    const text1 = document.createElement('span');

    card.setAttribute('class', 'wList');
    title.setAttribute('class', 'wcardHeader');
    content.setAttribute('class', 'wcardContent');
    text1.setAttribute('class', 'wcardTitle');

    text1.innerHTML = `${val}`;

    const sel = document.querySelectorAll(`.input${cls}`);
    for(let j = 0; j < sel.length; j++)
    {
        const text2 = document.createElement('span');
        text2.setAttribute('class', 'wcardList');
        const list = sel[j].value;
        text2.innerHTML = `${j + 1}. ${list}`;
        content.appendChild(text2);
    }

    title.appendChild(text1);
    card.appendChild(title);
    card.appendChild(content);
    document.querySelector('.resumeEEP').appendChild(card);
}

document.querySelector('.closeBttn').addEventListener('click', ()=>{
    formElement.style.display = 'none';
    landingElement.style.display = 'flex';
})