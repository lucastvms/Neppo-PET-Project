const KEYS = {
    articles: 'articles',
    articleId: 'articlesId'
}

export const getCategoryCollection = () => ([
    { id: '1', title: 'Development' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
])

export function insertArticle(data) {
    let articles = getAllArticles();
    data['id'] = generateArticleId()
    articles.push(data)
    localStorage.setItem(KEYS.articles, JSON.stringify(articles))
}

export function updateArticle(data) {
    let articles = getAllArticles();
    let recordIndex = articles.findIndex(x => x.id == data.id);
    articles[recordIndex] = { ...data }
    localStorage.setItem(KEYS.articles, JSON.stringify(articles));
}

export function deleteArticle(id) {
    let articles = getAllArticles();
    articles = articles.filter(x => x.id != id)
    localStorage.setItem(KEYS.articles, JSON.stringify(articles));
}

export function generateArticleId() {
    if (localStorage.getItem(KEYS.articleId) == null)
        localStorage.setItem(KEYS.articleId, '0')
    var id = parseInt(localStorage.getItem(KEYS.articleId))
    localStorage.setItem(KEYS.articleId, (++id).toString())
    return id;
}

export function getAllArticles() {
    if (localStorage.getItem(KEYS.articles) == null)
        localStorage.setItem(KEYS.articles, JSON.stringify([]))
    let articles = JSON.parse(localStorage.getItem(KEYS.articles));
    //map categoryID to category title
    let categories = getCategoryCollection();
    return articles.map(x => ({
        ...x,
        category: categories[x.categoryId - 1].title
    }))
}