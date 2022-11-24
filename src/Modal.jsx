export function Modal({isOpen, closeModal}) {
    return (
        
        <div className={`sectionInitial ${isOpen && "is-open"}`}>
            <div className="sectionInitial_containerForm">
                <h1 className="sectionInitial_title">TURN MILES INTO MONEY</h1>
                <h3 className="sectionInitial_subTitle">SING UP TO DRIVE WITH LYFT</h3>
                <input className="sectionInitial_input" placeholder="Phone number" />
                <div className="sectionInitial_boxButtons">
                    <button className="sectionInitial_boxButton--become" onClick={closeModal}>Become Drive</button>
                    <button className="sectionInitial_boxButton--sing" >Sing up to ride</button>
                </div>
                <div className="sectionInitial_boxSpans">
                    <span>Already appled? Chechk the status of your applicatiom here.</span>
                    <span>Earn money for inviting friends to drive. Learn more</span>
                </div>
            </div>
            
        </div>

    )
}