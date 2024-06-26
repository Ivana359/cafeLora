import "./style.css"
export const Drink =({name, image})=>{
    return (


<div className="drink">
              <div className="drink__product">
                <div className="drink__cup">
                  <img src={image} alt = {name} />
                </div>
                <div className="drink__info">
                  <h3>{name}</h3>
                 
                </div>
              </div>
              <form className="drink__controls">
               
                <button className="order-btn">
                  Objednat
                </button>
              </form>
            </div>
         )
        }