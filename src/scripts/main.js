import "../styles/style.scss";

document.querySelector('.tabs__links').addEventListener('click',(event)=>{
    if(event.target.tagName === 'A'){
        document.querySelector('#tab-0').style.display = 'none';
    }
});

