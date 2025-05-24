const Texttovoice=document.getElementById("text-to-voice");
const selectvoice=document.getElementById("select-voice");
const btn=document.getElementById("voice");

let ovozlar=[];

function loadVoices(){
    ovozlar = window.speechSynthesis.getVoices();
    if(ovozlar.length>0){
        selectvoice.innerHTML='';
        ovozlar.forEach((ovoz,index)=>{
            const option = document.createElement("option");
            option.value=index;
            option.textContent=ovoz.lang+" - "+ovoz.name;
            selectvoice.appendChild(option);
        })
    }else{
        selectvoice.innerHTML='<option value=""> Ovozlar topilmadi!!</option>';
    }
    
}

function tekshir(){
    if(ovozlar.length==0){
        loadVoices();
    }
    if(ovozlar.length==0){
        setTimeout(tekshir,500);
    }
}
loadVoices();
tekshir();





function gapir(){
    const msg=new SpeechSynthesisUtterance();
    msg.text=Texttovoice.value;
    const o = selectvoice.value;
    if(o){
        msg.voice=ovozlar[o];
    }
    speechSynthesis.speak(msg);
}


btn.addEventListener("click",()=>{
    gapir();
})