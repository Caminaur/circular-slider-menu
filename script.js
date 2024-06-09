
const animationLayer = document.querySelector('.circular-selector');
const options = document.querySelectorAll('.circular-selector span');
const texts = document.querySelectorAll('.content div')
function setConfig(){
    spans = animationLayer.querySelectorAll('span');
    count = spans.length
    ifMain = false

    secondaryIcons = []
    spans.forEach(element => {
        if (element.dataset.selected=='true') {
            ifMain=true
            count--
            element.setAttribute('class','')   
        } else{
            secondaryIcons.push(element)
        }
    });
    setClasses(secondaryIcons)
    animationLayer.setAttribute('class',`circular-selector config-${count}`);
}

function setClasses(secondaryIcons){
    for (let index = 1; index <= secondaryIcons.length; index++) {
        span = secondaryIcons[index-1]
        if (span.dataset.selected) {
            span.setAttribute('class','')   
        }else{
            span.setAttribute('class',`position-${index}`)   
        }
    }
}

for (const option of options) {
    option.addEventListener('click',function(e){
        thereIsMain = document.querySelector('span[data-selected="true')
        if (thereIsMain!==null) {

            // old active icon position
            position = option.classList[0]; // opcion 1

            // set the new active icon
            thereIsMain.setAttribute('class',position)
            thereIsMain.dataset.selected = '';
            
            // config the now inactive icon
            option.dataset.selected = 'true';
            option.setAttribute('class','')
        } else{
            // If there's no main icon we set it
            options.forEach(o=> o.dataset.selected = '');
            option.dataset.selected = 'true';
            setConfig();
        }
        configText(option.dataset.option);
    });
}
// texts
function configText(id){
    texts.forEach((t)=>t.dataset.status='inactive')
    element = document.querySelector(`.content div[data-option="${id}"]`);
    element.dataset.status = 'active'
}

// Configuramos los iconos
setConfig();
