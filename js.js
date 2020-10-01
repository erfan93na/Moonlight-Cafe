let body = document.getElementsByTagName("html")[0]
window.addEventListener("scroll", function () {

    if (window.scrollY >= 150) {
        document.getElementById("hours").style.height = "0px";

        document.getElementById("hoursdata").style.height = "0px";
        document.getElementById("navcontain").style.backgroundColor = "black"
    } else {
        document.getElementById("hours").style.height = "50px";
        //document.getElementById("hoursdata").style.height = "5"

        document.getElementById("navcontain").style.backgroundColor = "transparent";
    }
})

var list = [
    {
        name: "Lobster Bisque",
        recipe: "Lorem, deren, trataro, filede, nerada",
        add: "lobster-bisque.jpg",
        price: "6.5$",
        type: "starter"
    }, {
        name: "Bread Barrel",
        recipe: "Lorem, deren, trataro, filede, nerada",
        add: "bread-barrel.jpg",
        price: "5.8$",
        type: "special"
    }, {
        name: "Crab Cake",
        recipe: "A delicate crab cake served on a toasted roll with lettuce and tartar sauce",
        add: "cake.jpg",
        price: "4.6$",
        type: "starter"
    }, {
        name: "Caesar Selections",
        recipe: "Lorem, deren, trataro, filede, nerada",
        add: "caesar.jpg",
        price: "4.5$",
        type: "salad"
    }, {
        name: "Tuscan Grilled",
        recipe: "Grilled chicken with provolone, artichoke hearts, and roasted red pesto",
        add: "tuscan-grilled.jpg",
        price: "5.5$",
        type: "special"
    }, {
        name: "Mozzarella Stick",
        recipe: "Lorem, deren, trataro, filede, nerada",
        add: "mozzarella.jpg",
        price: "9$",
        type: "starter"
    }, {
        name: "Greek Salad",
        recipe: "Fresh spinach, crisp romaine, tomatoes, and Greek olives",
        add: "greek-salad.jpg",
        price: "11$",
        type: "salad"
    }, {
        name: "Spinach Salad",
        recipe: "Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette",
        add: "greek-salad.jpg",
        price: "12$",
        type: "salad"
    }, {
        name: "Lobster Roll",
        recipe: "Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll",
        add: "lobster-roll.jpg",
        price: "3.5$",
        type: "special"
    }
]
var content = "";
for (var i = 0; i < list.length; i++) {
    content += ' <li class=" flex-row menurow mb-5 ' + list[i].type + '"><img src=' + list[i].add + ' class="foodimg"><div class="foodtext d-flex flex-column  ml-3"> <div class="foodtitle d-flex flex-row justify-content-between"> <div class="foodname">' + list[i].name + '</div> <div class="foodprice">' + list[i].price + '</div> </div> <div class="fooddesc">' + list[i].recipe + ' </div> </div> </li>'
}
document.getElementById("menulist").innerHTML = content

const buttons = document.getElementsByClassName("menubutton")
for (var k = 0; k < buttons.length; k++) {
    buttons[k].addEventListener("click", function () {
            var newlist = "";
            if (event.target.id == "all") {
                document.getElementById("menulist").innerHTML = content

            } else {
                for (var j = 0; j < list.length; j++) {
                    if (list[j].type == event.target.id) {
                        newlist += ' <li class=" flex-row menurow mb-5 ' + list[j].type + '"><img src=' + list[j].add + ' class="foodimg"><div class="foodtext d-flex flex-column  ml-3"> <div class="foodtitle d-flex flex-row justify-content-between"> <div class="foodname">' + list[j].name + '</div> <div class="foodprice">' + list[j].price + '</div> </div> <div class="fooddesc">' + list[j].recipe + ' </div> </div> </li>'
                        document.getElementById("menulist").innerHTML = newlist


                    }
                }
            }

        }
    )
}


var specials = [{
    name: "Modi sit es",
    desc: "Et blanditiis nemo veritatis exceptur",
    text: "Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem ver"
,add:"specials-1.png",id:"sp1"
}, {
    name: "Unde praesentium sed",
    desc: "Architecto ut aperiam autem i",
    text: "Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventor"
    ,add:"specials-2.png",id:"sp2"
}, {
    name: "Pariatur explicabo vel",
    desc: "Impedit facilis occaecati odio neque aperiam si",
    text: "Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pa"
    ,add:"specials-3.png",id:"sp3"
}, {
    name: "Nostrum qui quasi",
    desc: "Fuga dolores inventore laboriosam ut est accusamus laboriosam dolor",
    text: "voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque ",add:"specials-4.png",id:"sp4"
}, {name: "Iusto ut expedita au", desc: "Est eveniet ipsam sindera pad rone matrelat sando red",id:"sp5", text: "Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate ve",add:"specials-5.png"
}]


for (var i=0;i<specials.length;i++) {
    var li=document.createElement("LI")
    var a=document.createElement("A")
    a.innerHTML=specials[i].name
  //  a.setAttribute("href","#specials")
    a.setAttribute("class","specialrow")
    a.setAttribute("id",specials[i].id)
    li.appendChild(a)

    document.getElementById("speciallist").appendChild(li)

}

document.getElementById("specialtext").innerHTML=" <div class='specialfull m-0 w-100 py-0 px-0 row'><div class='specialdesc col-sm-7 p-0 m-0 '><h3>"+specials[0].desc+"</h3><p class='mt-4'>"+specials[0].text+"</p></div><div class='p-0 col-sm-5'><img style='width:100%;height:auto'class=' p-0 ' src="+specials[0].add+"></div></div>"


var quotes=[
    {text:"Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil.",person:"Dan Bruan",post:"Freelancer",photo:"testimonials-1.jpg"},{text:"",person:"Nick Fred",post:"Developer",photo:"testimonials-2.jpg"},{text:"",person:"Michael Smith",post:"Developer",photo:"testimonials-3.jpg"},{text:"",person:"Kay Abrams",post:"Founder",photo:"testimonials-4.jpg"},{text:"",person:"Matt Oliver",post:"CEO",photo:"testimonials-5.jpg"}
]

var allquotes=""

quotes.forEach(function (item) {
    allquotes+="<div class='owlitem ' style=''><div class='font-italic rounded quotetext  bg-dark ' style=''><span>“  </span>"+quotes[0].text+"<span>  ”</span><div class='quoteowner'> <img src="+item.photo+" class='mb-3'><div style='color:gold;font-style:normal'>"+item.person+"</div><p  style='font-size:0.8rem 'class='position'>"+item.post+"</p></div></div></div>"
})

document.getElementById("owlcont").innerHTML=allquotes
var pics=""
for (var v=1;v<9;v++)
{ pics+="<div class='imgcont'><img src='gallery-"+v+".jpg'></div>"}
document.getElementById("gallcont").innerHTML=pics