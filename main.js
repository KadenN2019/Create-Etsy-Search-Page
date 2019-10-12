const html= items.results.map(items=>{
    return `
    <div class="product">
        <div id=product>
            <img src="${items.Images[0].url_fullxfull}">
            <div class="heart"><a><i class="fa fa-heart"></i></a></div>
        </div>
        <div class="title">${items.title}</div>
        <div class="views">Made by: ${items.who_made}</div>
            <div class="views">Views: ${items.views}</div>
            <div class="stars">
                <div class="rate"></div>
            </div>
            <div class="price">$${items.price}</div>
        </div>
    </div>`      
}).join("")

document.querySelector("#main").innerHTML = html