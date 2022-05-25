export const PostCard = ({ title, cover, body }) => (
    <div className='post'>
        <img src={cover} alt={title} />
        <div className="post-content">
            <br />
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    </div>
);