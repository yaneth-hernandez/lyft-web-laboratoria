import phone from '../assets/phone.png'

export const Information = ()=>{
    return(
        <>
        <section className="containerInformation">
                {/* <article className="informationTittle">
                    <h1 className="tittle">A RIDE IN MINUTES</h1>
                    <p>Request a ride and you'll be on your way in minutes.</p>
                    <p>Request Ride. Repeat.</p>
                </article>
                <article>
                    <h1 className="tittle">SERIOUS ABOUT SAFETY</h1>
                    <p>From knowing the color of your driver's car to our 24/7</p>
                    <p>Trust & Safety Team, we got you.</p>
                </article>
                <article>
                    <h1 className="tittle">HAPPY DRIVERS</h1>
                    <h1 className="tittle">HAPPY RIDERS</h1>
                    <p>Ride with us and you'll see why 9 out of 10 rides end with five</p>
                    <p>stars.</p>
                </article> */}
            </section>

            <section className="information">
            <div className='text'>
            <article className="informationTittle">
                    <h1 className="tittle">A RIDE IN MINUTES</h1>
                    <p>Request a ride and you'll be on your way in minutes.<br/>
                    Request Ride. Repeat.</p>
                </article>
                <article className="informationTittle">
                    <h1 className="tittle">SERIOUS ABOUT SAFETY</h1>
                    <p>From knowing the color of your driver's car to our 24/7<br/>
                    Trust & Safety Team, we got you.</p>
                </article>
                <article className="informationTittle">
                    <h1 className="tittle">HAPPY DRIVERS</h1>
                    <h1 className="tittle">HAPPY RIDERS</h1>
                    <p>Ride with us and you'll see why 9 out of 10 rides end with five <br/>
                    stars.</p>
                </article> 
                </div>
                <img src={phone} className="phone"/>
                
            </section>
</>
    )
}