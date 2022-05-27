import './styles.css';

export const PostCard = ({ title, cover, body, id }) => (
    <div className='post'>
        <img src={cover} alt={title} />
        <div className="post-content">
            <br />
            <h2>{id}-{title}</h2>
            <p>{body}</p>
        </div>
    </div>
);