import { useRouter } from "next/router";
const article = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            <h1>This is the article Page for id {id}!</h1>
        </div>
    )
}

export default article;