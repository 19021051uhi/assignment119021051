import './css/hints.css'
import { Button} from 'react-bootstrap';


function HintsSection(){

    return (

    <div className="col-sm">
        <h3 className="text-center">Hints</h3> 
        <div className="p-3 mb-2 bg-light"> 
            <div className="row"> 

                <div className="col-2 text-center"> 
                    
                    <div className="mb-5 d-grid gap-2"> 
                    <p className="txt_g" >Overall solution strategy</p>

                    </div>
                    <div className="mb-5 d-grid gap-2"> 
                    <p className="txt_g">Moments</p>

                    </div>
                    <div className="mb-5 d-grid gap-2"> 
                    <p className="txt_g">Gravity</p>

                    </div>
                </div>

                <div className="col-5 text-center"> 
                    <p>General</p>
                    <div className="mb-5 d-grid gap-2"> 
                        <Button variant="primary">VIDEO</Button>
                        <Button variant="primary">SUMMARY</Button>
                    </div>
                    <div className="mb-5 d-grid gap-2"> 
                        <Button variant="primary">VIDEO</Button>
                        <Button variant="primary">SUMMARY</Button>
                    </div>
                    <div className="mb-5 d-grid gap-2"> 
                        <Button variant="primary">VIDEO</Button>
                        <Button variant="primary">SUMMARY</Button>
                    </div>
                </div>
                <div className="col-5 text-center"> 
                    <p>Problem specific</p>
                    <div className="mb-5 d-grid gap-2"> 
                        <Button variant="primary">VIDEO</Button>
                        <Button variant="primary">SUMMARY</Button>
                    </div>
                    <div className="mb-5 d-grid gap-2"> 
                        <Button variant="primary">VIDEO</Button>
                        <Button variant="primary">SUMMARY</Button>
                    </div>
                    <div className="mb-5 d-grid gap-2"> 
                        <Button variant="primary">VIDEO</Button>
                        <Button variant="primary">SUMMARY</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default HintsSection;