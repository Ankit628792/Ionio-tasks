import React from 'react'

function Video() {
    return (
        <>
            <div className="video__div">

                <iframe
                    src="https://www.youtube.com/embed/j8Jy1YwPSK8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

            </div>
        </>
    )
}

export default Video
