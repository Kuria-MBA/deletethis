/*
<div class="grid">
    <a class="grid_item">gfsdzfg</a>
    <a class="grid_item">dsffa</a>
    <a class="grid_item">fdsfds</a>
</div>
*/

document.body.onload = grid_items;

function grid_items(){
    for(let a = 1; a <= 3; a++)
    {
    const newDiv = document.createElement("div");//we create a new div 
    newDiv.classList.add("grid");//we set the div to a grid type
    
    const item_0 = document.createElement("a");//we create a new a value
    item_0.classList.add("grid_item");//we set the div to a grid type

    const item_1 = document.createElement("a");//we create a new a value
    item_1.classList.add("grid_item");//we set the div to a grid type

    const item_2 = document.createElement("a");//we create a new a value
    item_2.classList.add("grid_item");//we set the div to a grid type

    const item_value_0 = document.createElement("img");
    item_value_0.src = "https://picsum.photos/200";
    item_value_0.style.width = "100%";
    item_value_0.style.borderRadius = "10px";

    const item_value_1 = document.createElement("img");
    item_value_1.src = "https://picsum.photos/200";
    item_value_1.style.width = "100%";
    item_value_1.style.borderRadius = "10px";

    const item_value_2 = document.createElement("img");
    item_value_2.src = "https://picsum.photos/200";
    item_value_2.style.width = "100%";
    item_value_2.style.borderRadius = "10px";

    item_0.appendChild(item_value_0);
    item_1.appendChild(item_value_1);
    item_2.appendChild(item_value_2);
        
    newDiv.appendChild(item_0);
    newDiv.appendChild(item_1);
    newDiv.appendChild(item_2);
    const place = document.getElementById("here");
    const space = document.createElement("br");//we create a new div 
    document.body.insertBefore(space,place);
    document.body.insertBefore(newDiv,place);
    }
}

///this is for control of the navigation bar :/
////////everytime the bar function runs the page reloads, Please stop this 