import React from 'react'

function ExtraContent() {
    return (
        <section className="more__content">
            <h1>Extra Content</h1>
            <p>This is an extra content for which the carousel and video box can be tested properly</p>
            <p>In this page, I've used a Carousel in which text color of the content paragraph changing dynamically. <br /> <strong>The Approach behind the random text color is: </strong>I've extracted the all the dominent colors present in the background image. After collecting the colors, I've taken the average of all the dominent colors and finally a particular colors is created. That color is further processed and used as a text color of the content </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam provident aspernatur deleniti illo. Dicta, quod a nam veritatis suscipit harum, saepe nobis sint nulla voluptate ipsa minus voluptates rerum rem maxime dignissimos odio numquam velit ad molestiae. Et repellat ipsum officia rem ea tempore, itaque ex blanditiis cumque architecto iste.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam provident aspernatur deleniti illo. Dicta, quod a nam veritatis suscipit harum, saepe nobis sint nulla voluptate ipsa minus voluptates rerum rem maxime dignissimos odio numquam velit ad molestiae. Et repellat ipsum officia rem ea tempore, itaque ex blanditiis cumque architecto iste.</p>
        </section>
    )
}

export default ExtraContent
