var template = document.createElement('template');
template.innerHTML =`
  <span> </span>
`


class Localtime extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'}); 
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('span').innerHTML = new Date();
    }
   
}

window.customElements.define('local-time',Localtime);

export default Localtime;