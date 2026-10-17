import "./SectionLeftCard.css"
function SectionLeftCard(props) {
    return (
        <>
            <section id="section-left-card">
                <div id="rounded-icon">
                    {props.icon}
                </div>
                <div id="section-left-titles">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div>
            </section>
        </>
    )   
}

export default SectionLeftCard
