const colors=["#FAEBD7","#00FFFF","#7FFFD4","#FFE4C4","#8A2BE2","#DEB887",
"#7FFF00","#FFF8DC","#DC143C","#008B8B","#2F4F4F","#CD5C5C","#2E8B57","#87CEEB","#008080",
"#D8BFD8","#FF6347"]



const b=document.getElementById("btn");
const res=document.body;

b.addEventListener('click',fun)

function fun()
{
const color=Math.floor(Math.random()*colors.length)
res.style.backgroundColor=colors[color]
}


