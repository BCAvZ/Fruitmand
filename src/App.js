import React from 'react';
import './App.css';
import {useForm} from "react-hook-form";
import Button from "./components/Button";
import Fruitcounter from "./components/Fruitcounters";



function App() {

    const [banaanAmount, setBanaanAmount] = React.useState(0);
    const [aardbeiAmount, setAardbeiAmount] = React.useState(0);
    const [appelAmount, setAppelAmount] = React.useState(0);
    const [kiwiAmount, setKiwiAmount] = React.useState(0);

    const { register, handleSubmit } = useForm();


    const logResults = (data) => {
        console.log(data)
        console.log(`Er zijn ${banaanAmount}bananen besteld`, aardbeiAmount, appelAmount, kiwiAmount)
    }

    const resetFruitAmount = () => {
        setBanaanAmount(0)
        setAardbeiAmount(0)
        setAppelAmount(0)
        setKiwiAmount(0)
    }

    return (
        <>
            <main>
                <section id="outer-container">
                    <article id="inner-container">
                            <div className="fruit">
                                <h1>Fruitmand bezorgservice</h1>

                                <h2>🍌 Bananen</h2>

                                <Fruitcounter
                                    fruit={banaanAmount}
                                    setFruit={setBanaanAmount}
                                    fruitId='banaanCounter'
                                ></Fruitcounter>

                                {/*<button disabled={banaanAmount === 0} onClick={() => setBanaanAmount (banaanAmount-1)}>-</button>*/}
                                {/*<label htmlFor="banaanCounter"/>*/}
                                {/*<input type='number' value={banaanAmount} readOnly='value' name="banaanAmount" id="banaanCounter"/>*/}
                                {/*<button onClick={() => setBanaanAmount (banaanAmount+1)}>+</button>*/}

                                <h2>🍓 Aardbeien</h2>

                                <Fruitcounter
                                    fruit={aardbeiAmount}
                                    setFruit={setAardbeiAmount}
                                    fruitId='aardbeiCounter'
                                ></Fruitcounter>


                                {/*<button disabled={aardbeiAmount === 0} onClick={() => setAardbeiAmount (aardbeiAmount-1)}>-</button>*/}
                                {/*<label htmlFor="aardbeienCounter"/>*/}
                                {/*<input type='number' value={aardbeiAmount} name="aardbeienAmount" readOnly='value' id="aardbeienCounter"/>*/}
                                {/*<button onClick={() => setAardbeiAmount (aardbeiAmount+1)}>+</button>*/}

                                <h2>🍏 Appels</h2>

                                <Fruitcounter
                                    fruit={appelAmount}
                                    setFruit={setAppelAmount}
                                    fruitId='appelCounter'
                                ></Fruitcounter>

                                {/*<button disabled={appelAmount === 0} onClick={() => setAppelAmount (appelAmount-1)}>-</button>*/}
                                {/*<label htmlFor="appelCounter"/>*/}
                                {/*<input type='number' value={appelAmount} name="appelAmount" readOnly='value' id="appelCounter"/>*/}
                                {/*<button onClick={() => setAppelAmount (appelAmount+1)}>+</button>*/}

                                <h2>🥝 Kiwi's</h2>

                                <Fruitcounter
                                    fruit={kiwiAmount}
                                    setFruit={setKiwiAmount}
                                    fruitId='kiwiCounter'
                                ></Fruitcounter>

                                {/*<button disabled={kiwiAmount === 0} onClick={() => setKiwiAmount (kiwiAmount-1)}>-</button>*/}
                                {/*<label htmlFor="kiwiCounter"/>*/}
                                {/*<input type='number' value={kiwiAmount} name="kiwiAmount" readOnly='value' id="kiwiCounter"/>*/}
                                {/*<button onClick={() => setKiwiAmount (kiwiAmount+1)}>+</button>*/}

                                <div>
                                    {/*<button onClick={resetFruitAmount}> Reset </button>*/}
                                    <Button
                                        onClick={resetFruitAmount}
                                        type="button"
                                        >
                                            Reset
                                    </Button>

                                </div>


                            </div>


                            <form onSubmit={handleSubmit(logResults)}>

                                <label htmlFor="name">Voornaam</label>
                                <input type="text" {...register("name")}/>

                                <label htmlFor="surname">Achternaam</label>
                                <input type="text" {...register("surname")}/>

                                <label htmlFor="age">Leeftijd</label>
                                <input type="number" {...register("age")}/>

                                <label htmlFor="postal-code">Postcode</label>
                                <input type="text" {...register("postal-code")}/>


                                Bezorgfrequentie
                                <select {...register("bezorgfrequentie")}>

                                    <option value="iedere week">Iedere week</option>
                                    <option value="iedere week">Om de week</option>
                                    <option value="iedere week">Iedere maand</option>

                                </select>
                                <div>
                                    <input type="radio" {...register('delivery-time')} id="test1" value="Overdag" name="delivery-time"/>
                                    <label htmlFor="test1">Overdag</label>
                                </div>

                                <div>
                                    <input type="radio" {...register("delivery-time")} id="test2" value="'s Avonds" name="delivery-time"/>
                                    <label htmlFor="test2">'s Avonds</label>
                                </div>

                                <textarea {...register("opmerkingen")} id="comments" cols="30" rows="10"></textarea>

                                <div>
                                    <input type="checkbox"/> Ik ga akkoord met de voorwaarden
                                </div>

                                {/*<button type="submit">Verzend</button>*/}
                                <Button
                                    type="submit"
                                >
                                    Verzend
                                </Button>
                            </form>
                    </article>
                </section>
            </main>




        </>
    );
}

export default App;
