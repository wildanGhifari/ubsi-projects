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
    const exploreContainer = document.querySelector('.explore');
    const exploreArticles = document.querySelector('.exp-articles');
    const exploreArticle = document.createElement('a');
    const articleImg = document.createElement('img');
    const articleContent = document.createElement('div');
    const articleTitle = document.createElement('h3');
    const articleHighlights = document.createElement('p');
    // const articleCTA = document.createElement('a');

    exploreArticle.classList.add('exp-article');
    exploreArticle.href = '#'
    articleContent.classList.add('exp-article-content');

    const truncate = (input) => input.length > 128 ? `${input.substring(0, 128)}...` : input;
	const cropedHighlights = truncate(data.highlights);

    articleImg.src = `${PATH}${data.img}`
    articleTitle.textContent = data.judul;
    articleHighlights.textContent = cropedHighlights;
    // articleCTA.href = '#'
    // articleCTA.textContent = 'Read more'

    articleContent.append(articleTitle, articleHighlights);
    exploreArticle.append(articleImg, articleContent);
    exploreArticles.append(exploreArticle);
    exploreContainer.append(exploreArticles);
}

articles.forEach(article => {
    createNewsElement(article);
})