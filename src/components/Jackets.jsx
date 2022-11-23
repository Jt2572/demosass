import items from "../assets/items"
import Msg from "./Msg"

const Jackets = () => {

    return (
        < >
            {items.map(i =>
                <section className={i.id !== 1 ? "jackets" : 'jackets__rev'} >
                    <img src={i.image} className="jackets__cont jackets__image" alt="" />
                    <div className="jackets__cont">

                        <h2 style={{ paddingTop: "4em" }}>{i.title}</h2>
                        <img src={i.icon} className="jackets__icon" alt={i.title} />

                        <article className="jackets__cont__info">
                            <h2> Prepara tu look para el frío </h2>
                            <p> Las últimas tendencias en Chaquetas para damas, en distintos colores y texturas.</p>
                            <Msg />
                        </article>
                    </div>
                    <div></div>
                </section>
            )}
        </>
    )
}
export default Jackets;