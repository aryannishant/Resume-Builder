hamBttn = document.querySelector('.ham');
hamMenu = document.querySelector('.sideMenu');
previewPanel = document.querySelector('.previewMain');
let count = 0;

hamBttn.addEventListener('click', ()=>{
    if(count % 2 != 0)
    {
        hamMenu.style.display = 'block';
        previewPanel.style.width = '83%';
    }

    else
    {
        hamMenu.style.display = 'none';
        previewPanel.style.width = '98%';
    }

    ++count;
})

for(let i = 1; i < 19; i++)
{
    const imgCont = document.createElement('div');
    const imgTemp = document.createElement('img');

    imgCont.setAttribute('class', 'imageContainer');

    imgTemp.setAttribute('class', 'resumeImageBttn');
    imgTemp.setAttribute('src', `template${i}.png`);

    imgCont.appendChild(imgTemp);
    hamMenu.appendChild(imgCont);

    imgCont.addEventListener('click', ()=>{
        const templateStyle = document.querySelector('link');
        templateStyle.setAttribute('href', `template${i}.css`);
    })
}

document.querySelector('.goBackBttn').addEventListener('click', ()=>{
    document.querySelector('.formViewPort').style.display = 'flex';
    document.querySelector('.preview').style.display = 'none';

    const eep = document.querySelector('.resumeEEP');
    const aip = document.querySelector('.resumeAIP');
    const prof = document.querySelector('.resumeProf')

    while(eep.firstChild)
    {
        eep.removeChild(eep.lastChild);
    }

    while(aip.firstChild)
    {
        aip.removeChild(aip.lastChild);
    }

    while(prof.firstChild)
    {
        prof.removeChild(prof.lastChild);
    }

    const resumeAbout = document.querySelector('.about');
    if(resumeAbout.firstChild)
    {
        resumeAbout.removeChild(resumeAbout.lastChild);
    }

    const resumeName = document.querySelector('.name');
    if(resumeName.firstChild)
    {
        resumeName.removeChild(resumeName.lastChild);
    }
});

const controlTitle = ['Name', 'About', 'Titles Left', 'Contents Left', 'Titles Right', 'Contents Right', 'Hyperlinks'];
const outputClassList = ['name', 'about', 'wcardTitle', 'wcardList', 'hcardTitle', 'hcardList', 'prof'];
const defaultFontSize = [40, 14, 24, 9, 24, 14, 12]

for(let i = 0; i < controlTitle.length; i++)
{
    const container = document.createElement('fieldset');
    const title = document.createElement('legend');
    const addysun = document.createElement('button');
    const subs = document.createElement('button');
    const text = document.createElement('span');

    container.setAttribute('class', 'fontControlBttnContainer');
    title.setAttribute('class', 'controlTitle');
    addysun.setAttribute('class', 'fontAppender');
    subs.setAttribute('class', 'fontDecrease');
    text.setAttribute('class', 'fontSizeVal');

    text.innerText = defaultFontSize[i];
    title.innerText = `${controlTitle[i]}`;
    addysun.innerText = '+';
    subs.innerText = '-';

    let counter = defaultFontSize[i];
    
    addysun.addEventListener('click', ()=>{
        ++counter;
        const font = document.querySelectorAll(`.${outputClassList[i]}`);
        text.innerText = counter;
        for(let j = 0; j < font.length; j++){
            font[j].style.fontSize = `${counter}px`;
        }
    });

    subs.addEventListener('click', ()=>{
        const font = document.querySelectorAll(`.${outputClassList[i]}`);
        if(counter > 1)
        {
            --counter;
            text.innerText = counter;
            for(let j = 0; j < font.length; j++){
                font[j].style.fontSize = `${counter}px`;
            }
        }
    });

    container.appendChild(title);
    container.appendChild(addysun);
    container.appendChild(text);
    container.appendChild(subs);

    document.querySelector('.fontControlBox').appendChild(container);
}




document.querySelector('.downloadBttn1').addEventListener('click', ()=>{
    html2canvas(document.querySelector('.resume')).then(canvas => {
        document.body.appendChild(canvas);
        canvas.style.display = 'none';
        return canvas;
    })
    .then(canvas => {
        const image = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.setAttribute('download', 'resume.png')
        a.setAttribute('href', image)
        a.click()
        canvas.remove()
    })
})


window.onload = function () {
    document.querySelector(".downloadBttn")
        .addEventListener("click", () => {
            const invoice = this.document.querySelector(".resume");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: [55,5,5,5],
                filename: 'MY-RESUME.pdf',
                image: { type: 'jpeg', quality: 1.06 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'A4', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}