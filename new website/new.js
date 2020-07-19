console.log("this is news.js")
//news api parameters
let apiKey = 'd405e6eb9e7b43d09560574d5090159d';
let source = 'the-times-of-india';

let newsAccordion = document.getElementById("newsAccordion")

//Create a ajax get request
const xhr = new XMLHttpRequest();

//Open te object
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=bbc-news&s=${apiKey}`, true);


xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText)
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element,index) {
            // console.log(element,index)

            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                        data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                         <b>BREAKING NEWS ${index+1}!</b> ${element["title"]}
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                                data-parent="#newsAccordion">
                                <div class="card-body">
                                ${element["description"]}. <a href="${element["url"]}" target="_blank">Read full story.. </a>
                                   
                                </div>
                            </div>
                        </div>`

            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;

    }
    else
        console.log('some error occurred', this.status)
}

xhr.send();
console.log("done")



