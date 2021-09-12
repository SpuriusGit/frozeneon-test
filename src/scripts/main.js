import "../styles/style.scss";
import "../index.html";

document.querySelector('.tabs__links').addEventListener('click',(event)=>{
    if(event.target.tagName === 'A'){
        document.querySelector('#tab-0').style.display = 'none';
    }
});

