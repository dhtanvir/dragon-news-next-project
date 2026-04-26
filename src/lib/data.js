export async function getCategories() {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/news/categories",
    );
    const categoriesData = await res.json();
    return categoriesData.data;
}
export async function getNewsByCategoryId(category_id) {
    const res = await fetch(
        `https://openapi.programming-hero.com/api/news/category/${category_id}`,
    );
    const newsData = await res.json();
    return newsData.data;
}
export async function getNewsDetailsId(news_id) {
    const res = await fetch(
        `https://openapi.programming-hero.com/api/news/${news_id}`,
    );
    const newsData = await res.json();
    return newsData.data[0];
}