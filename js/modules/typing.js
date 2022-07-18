export default function initTyping() {
  let letter = 0;
  const text = '     Ruan Oliveira';

  function typeWriter() {
    if(letter < text.length) {
      document.querySelector(".principal-sentence").innerHTML += text.charAt(letter);
      letter++;
      setTimeout(typeWriter, 180)
    }
  }

  typeWriter();
}