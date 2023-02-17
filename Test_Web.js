function loadimages(){
    let img_var;
    for(let a = 0; a <= 8; a++)
    {
        img_var = "image_"+a.toString();
        document.getElementById(img_var).src = "https://picsum.photos/200";
    } 

}
window.onload = loadimages;