function sdbarshw(){
    var shcl=document.getElementById('iconshcl')
    if (shcl.classList.contains("bi-list"))
{
    shcl.classList.replace("bi-list","bi-x")
    document.getElementById("sdbar").style.marginLeft="0px"
    document.getElementById("log").style.marginLeft="0px"
}
else{
    shcl.classList.replace("bi-x","bi-list")
    document.getElementById("sdbar").style.marginLeft="-260px"

    document.getElementById("log").style.marginLeft="-220px"
}
    
}
function tblenter1(){
        document.getElementById("tbl1").style.display="block"
}
function tblout1(){
    document.getElementById("tbl1").style.display="none"
}

function tblenter2(){
    document.getElementById("tbl2").style.display="block"
}
function tblout2(){
document.getElementById("tbl2").style.display="none"
}

function tblenter3(){
    document.getElementById("tbl3").style.display="block"
}
function tblout3(){
document.getElementById("tbl3").style.display="none"
}
