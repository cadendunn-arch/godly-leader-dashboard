function tick(){document.getElementById('clock').textContent=new Date().toLocaleString();}
setInterval(tick,1000);tick();
const g=localStorage.getItem('goal');if(g){document.getElementById('goal').value=g;document.getElementById('saved').textContent=g;}
function saveGoal(){const v=document.getElementById('goal').value;localStorage.setItem('goal',v);document.getElementById('saved').textContent='Saved: '+v;}