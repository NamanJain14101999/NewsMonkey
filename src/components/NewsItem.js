import React from 'react'
const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3 ">
            <div className="card">
                <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>

                    <span class="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img src={!imageUrl ? "https://images.news18.com/ibnlive/uploads/2021/08/1628329189_tax-1-1600x900.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}    </h5>
                    <p class="card-text">{description}</p>

                    <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" class="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
