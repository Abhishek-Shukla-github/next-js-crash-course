import articleStyle from "../styles/Article.module.css";
import Link from "next/link";

export const ArticleItem = ({ article }) => {
    return (
        <div>
            <Link href="/article/[id]" as={`/article/${article.id}`}>
                <a className={articleStyle.card}>
                    <h3 className={articleStyle.title}>{article.title} &rarr;</h3>
                    <p>{article.body}</p>
                </a>
            </Link>
        </div>
    )
}
