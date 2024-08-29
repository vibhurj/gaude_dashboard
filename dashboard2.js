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
function tblclick(){
    v=document.getElementById("tbl1").style.display
    if(v=='none'){
        document.getElementById("tbl1").style.display="block"
    }
    else
    {
        document.getElementById("tbl1").style.display="none"
    }
}
function tblclick2(){
    v=document.getElementById("tbl2").style.display
    if(v=='none'){
        v=document.getElementById("tbl2").style.display="block"
    }
    else
    {
        v=document.getElementById("tbl2").style.display="none"
    }
}
function tblclick3(){
    v=document.getElementById("tbl3").style.display
    if(v=='none'){
        document.getElementById("tbl3").style.display="block"
    }
    else
    {
        document.getElementById("tbl3").style.display="none"
    }
}
