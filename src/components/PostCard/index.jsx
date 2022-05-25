export const PostCard = ({ title, cover, body }) => (
    <div className='post'>
        <img src={cover} alt={title} />
        <div className="post-content">
            <br />
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    </div>
);