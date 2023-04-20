
//audio elements for buttons
var a = document.getElementById("clicksound");
var b = document.getElementById("clickoffsound");
var c = document.getElementById("whoareyou");
function playAudio() {
   
    a.play();
 }
 function playAudio2() {
   
    b.play();
 }
 function playAudio3() {
   
    c.play();
 }

//buttons
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const speakOut = document.querySelector('#speakOut');
const time = document.querySelector('#time');



//speechrecognition engine
const SpeechRecognition =window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
//mic rec start
recognition.onstart = function(){
    console.log('mic active');
};
//jarvis commands and reply results
recognition.onresult = function(event){
    //console.log(event);
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    transcript=transcript.toLowerCase();//upper case to lower case
    console.log(`my commands:${transcript}`);
    
    //readOut(transcript);


   // jarvis command reply's
    if(transcript.includes("jarvis")){
        readOut("hello sir");
      //debugger  //console.log("hello sir");

    }
    if(transcript.includes("who are you")){
       // readOut("");
       playAudio3()
      //debugger  //console.log("hello sir");

    }
    if(transcript.includes("what about the time jarvis")){
       readOut(clock);
        
       //debugger  //console.log("hello sir");
 
     }
     if(transcript.includes("who is your boss")){
        // readOut("");
        readOut("my boss is vishaak k r,he developed me")
       //debugger  //console.log("hello sir");
 
     }
     if(transcript.includes("give me the report")){
        // readOut("");
        readOut("here is the report sir")
       //debugger  //console.log("hello sir");
       window.open("https://www.dareboost.com/en/report/a_4625a38ce810058746df6a72e?reportIds=a_4625a38ce810058746df6a72e")
 
     }
     if(transcript.includes("open our website")){
        readOut('opening our website sir,i test it do you want to see the report sir');
        window.open("https://vishakkr.github.io/VishakKR/");
    }
    
    //jarvis  website commands
    if(transcript.includes("open youtube")){
        readOut('opening youtube sir');
        window.open("https://www.youtube.com/");
    }
    if(transcript.includes("open google")){
        readOut('opening google sir');
        window.open("https://www.google.com/");
    }
    if(transcript.includes("open instagram")){
        readOut('opening instagram sir');
        window.open("https://www.instagram.com/");
    }
    if(transcript.includes("search for")){
        readOut("sir the result is")
        let input = transcript.split("");
        input.splice(0,11);
        //input.pop();
        input = input.join("").split("").join("+");
        console.log(input);
        window.open(`https://google.com/search?q=${input}`);
    }
    
};

//mic rec stop
recognition.onend= function () {
    //console.log(event);
    console.log('mic deactive');
};
//buttoncommands
startBtn.addEventListener("click",()=>{
    recognition.start()
})
stopBtn.addEventListener("click",()=>{
    recognition.stop()
})

//jarvis talkback
function readOut(message){
    const speech = new SpeechSynthesisUtterance()
    //const allVoices = speechSynthesis.getVoices()
    speech.text = message;
    speech.volume=1;
    //speech.voice = allVoices[0]
    window.speechSynthesis.speak(speech)
    //console.log('iam speaking')

}
//time
let date = new Date()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()

//updated time
window.onload = ()=>{
    time.textContent = `${hours}:${minutes}:${seconds}`
    setInterval(()=>{
        let date = new Date()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
clock=time.textContent= `${hours}hours ${minutes}minutes ${seconds} seconds`
    

    },1000);

}
//test1
speakOut.addEventListener("click",()=>{
    //readOut('hello vishaak bro')
    playAudio3()
    //readOut(clock)
   
}); 