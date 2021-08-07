import styles from "./post-body.module.css";

const PostBody = ({ body }) => {
	return (
		<div className={styles["markdown-body"]}>
			<article dangerouslySetInnerHTML={{ __html: body }} />
		</div>
	);
};

export default PostBody;
