import React, {useState} from "react";
import Button from './Button';

const Jumbotron = (prop) => {

    const [shield, setShield] = useState(false);

    const shieldsUp = () => {
        setShield(true);
    }

    return (
        <div className="Jumbotron jumbotron"
             style={{backgroundImage: `url('${prop.img}')` }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 mx-auto">
                        <h1>Your quest starts here.</h1>
                        <div className="form-row align-items-center">
                            <div className="col">
                                <input className="form-control" type="text" />
                            </div>
                            <div className="col-auto">
                                <Button clickFunction={shieldsUp}>Armor up!</Button>
                            </div>
                        </div>
                    <br/>
                        {shield && <div className="alert alert-success">Let all arrows fly!</div>}
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default Jumbotron;
