// Start of Data Declaration 
const articles = [
    {
        "img" : "test.jpg",
        "judul" : "This is a title for article 1",
        "highlights" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae.",
        "p1" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae.",
        "p2" : "Debitis delectus tempore sequi eveniet eum magnam natus deleniti in itaque facilis dolores dolorem atque, ipsa culpa aspernatur impedit ab illo sapiente! Officiis ipsum hic, non debitis repudiandae dolorum in dolorem atque.",
        "p3" : "Impedit reprehenderit, esse ea eos, sed, modi molestias dignissimos reiciendis soluta ab expedita cum dolor? Laboriosam, alias. Vel, voluptas repudiandae voluptatum inventore fugit itaque, minima dolore aspernatur est adipisci commodi! Cum quis officia modi ratione sit iusto quia?"
    },
    {
        "img" : "test.jpg",
        "judul" : "This is a title for article 2",
        "highlights" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae.",
        "p1" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae.",
        "p2" : "Debitis delectus tempore sequi eveniet eum magnam natus deleniti in itaque facilis dolores dolorem atque, ipsa culpa aspernatur impedit ab illo sapiente! Officiis ipsum hic, non debitis repudiandae dolorum in dolorem atque.",
        "p3" : "Impedit reprehenderit, esse ea eos, sed, modi molestias dignissimos reiciendis soluta ab expedita cum dolor? Laboriosam, alias. Vel, voluptas repudiandae voluptatum inventore fugit itaque, minima dolore aspernatur est adipisci commodi! Cum quis officia modi ratione sit iusto quia?"
    },
    {
        "img" : "test.jpg",
        "judul" : "This is a title for article 3",
        "highlights" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae.",
        "p1" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae.",
        "p2" : "Debitis delectus tempore sequi eveniet eum magnam natus deleniti in itaque facilis dolores dolorem atque, ipsa culpa aspernatur impedit ab illo sapiente! Officiis ipsum hic, non debitis repudiandae dolorum in dolorem atque.",
        "p3" : "Impedit reprehenderit, esse ea eos, sed, modi molestias dignissimos reiciendis soluta ab expedita cum dolor? Laboriosam, alias. Vel, voluptas repudiandae voluptatum inventore fugit itaque, minima dolore aspernatur est adipisci commodi! Cum quis officia modi ratione sit iusto quia?"
    },
    {
        "img" : "test.jpg",
        "judul" : "This is a title for article 4",
        "highlights" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae.",
        "p1" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae.",
        "p2" : "Debitis delectus tempore sequi eveniet eum magnam natus deleniti in itaque facilis dolores dolorem atque, ipsa culpa aspernatur impedit ab illo sapiente! Officiis ipsum hic, non debitis repudiandae dolorum in dolorem atque.",
        "p3" : "Impedit reprehenderit, esse ea eos, sed, modi molestias dignissimos reiciendis soluta ab expedita cum dolor? Laboriosam, alias. Vel, voluptas repudiandae voluptatum inventore fugit itaque, minima dolore aspernatur est adipisci commodi! Cum quis officia modi ratione sit iusto quia?"
    },
    {
        "img" : "test.jpg",
        "judul" : "This is a title for article 5",
        "highlights" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae.",
        "p1" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae.",
        "p2" : "Debitis delectus tempore sequi eveniet eum magnam natus deleniti in itaque facilis dolores dolorem atque, ipsa culpa aspernatur impedit ab illo sapiente! Officiis ipsum hic, non debitis repudiandae dolorum in dolorem atque.",
        "p3" : "Impedit reprehenderit, esse ea eos, sed, modi molestias dignissimos reiciendis soluta ab expedita cum dolor? Laboriosam, alias. Vel, voluptas repudiandae voluptatum inventore fugit itaque, minima dolore aspernatur est adipisci commodi! Cum quis officia modi ratione sit iusto quia?"
    }
]
// END of Data Declaration 

const PATH = './imgs/'

const createNewsElement = (data) => {
    const mainContainer = document.querySelector('#articles');
    const articleContainer = document.querySelector('.article-container');
    const article = document.createElement('article');
    const img = document.createElement('img');
    const articleContent = document.createElement('div');
    const judul = document.createElement('h3');
    const highlights = document.createElement('p');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const cta = document.createElement('a');

    // articleContainer.classList.add('article-container')
    articleContent.classList.add('article-content');
    cta.classList.add('cta-read')

    const truncate = (input) => input.length > 128 ? `${input.substring(0, 128)}...` : input;
	const cropedHighlights = truncate(data.highlights);
    
    img.src = `${PATH}${data.img}`;
    judul.textContent = data.judul
    highlights.textContent = cropedHighlights
    p1.textContent = data.p1
    p2.textContent = data.p2
    p3.textContent = data.p3

    cta.href = '#';
    cta.innerText = 'Read more'

    articleContent.append(judul, highlights, cta);
    article.append(img, articleContent)
    articleContainer.append(article);
    mainContainer.append(articleContainer)
}

// Looping data articles
for (article of articles){
    createNewsElement(article);
}