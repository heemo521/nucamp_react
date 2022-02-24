const RenderComments = ({ comments }) => {
    return (
        <div className={'col-md-5 m-1'}>
            <h4>Comments</h4>
            {comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <p>
                            {comment.text}
                            <br />
                            -- {comment.author},{' '}
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(
                                new Date(Date.parse(comment.date))
                            )}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default RenderComments;