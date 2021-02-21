/*function Educlickmedia(x) {
if (x.matches) { // If media query matches
  document.getElementById('.Education').style.height="auto";
} else {
  document.getElementById('.Education').style.height="700px";
}
}
/*
function Skillfun(x) {
if (x.matches) { // If media query matches
  document.getElementById('.skills-card').style.width="auto";
} else {
  document.getElementById('.skills-card').style.width="1300px";
}
}
var x = window.matchMedia("(max-width: 576px)");
Skillfun(x);
x.addListener(Skillfun(x));
*/

function clickedu() {

  const mediaQuery = window.matchMedia('(max-width: 576px)');

  const element = document.querySelector('.education-row');
  const style = getComputedStyle(element);
  const value = style.display;
  if(value == "none"){
    document.getElementById('education-row').style.display="flex";
    document.getElementById('Education').style.display="block";
    document.getElementById('Education').style.height="auto";
    document.getElementById('edu-title').style.margin="70px auto 90px auto";
    document.getElementById('education-row').style.margin="0px auto 50px auto";
  }
  else if (value == "flex") {
    document.getElementById('education-row').style.display="none";
    document.getElementById('Education').style.display="flex";
    document.getElementById('edu-title').style.margin="0px";
    if (mediaQuery.matches) {
      document.getElementById('Education').style.height="auto";
    }
    else {
      document.getElementById('Education').style.height="700px";
    }
  }
}

function clickSkill(){
  const mediaQuery = window.matchMedia('(max-width: 576px)');

  const element = document.querySelector('.skills-card');
  const style = getComputedStyle(element);
  const value = style.display;

  if(value == "none"){
    document.getElementById('skills-card').style.display="flex";
    document.getElementById('skills-card').style.margin="0px auto 50px auto";
  }
  else if (value == "flex") {
    document.getElementById('skills-card').style.display="none";
    document.getElementById('skills-card').style.margin="0px";
  }

}

function clickProject(){
  const mediaQuery = window.matchMedia('(max-width: 576px)');

  const element = document.querySelector('.projects_hider');
  const style = getComputedStyle(element);
  const value = style.display;

  if(value == "none"){
    document.getElementById('projects_hider').style.display="flex";
  }
  else if (value == "flex") {
    document.getElementById('projects_hider').style.display="none";
  }
}

function clickIntern(){
  const mediaQuery = window.matchMedia('(max-width: 576px)');

  const element = document.querySelector('.Intern_hider');
  const style = getComputedStyle(element);
  const value = style.display;

  if(value == "none"){
    document.getElementById('Intern_hider').style.display="flex";
  }
  else if (value == "flex") {
    document.getElementById('Intern_hider').style.display="none";
  }
}

function clickCertficate(){
  const mediaQuery = window.matchMedia('(max-width: 576px)');

  const element = document.querySelector('.certi_hider');
  const style = getComputedStyle(element);
  const value = style.display;

  if(value == "none"){
    document.getElementById('certi_hider').style.display="flex";
  }
  else if (value == "flex") {
    document.getElementById('certi_hider').style.display="none";
  }
}