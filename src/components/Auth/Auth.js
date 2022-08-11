import { useState } from 'react'
import { signupUser, signinUser } from '../../reducers/authReducer'
import { useDispatch, useSelector } from 'react-redux';
import './Auth.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Auth() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setcPassword] = useState('')
    const [fname, setfName] = useState('')
    const [lname, setlName] = useState('')
    const dispatch = useDispatch()
    const [auth, setAuth] = useState('signin')
    const { loading, error } = useSelector(state => state.user)
    const authenticate = () => {
        if (auth == 'signin') {
            dispatch(signinUser({ email, password }))
        } else {
            dispatch(signupUser({ email, password, fname, lname, cpassword }))
        }
    }

    return (
        <>
            <div className='container form'>
                {loading &&
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div>

                }
                <h3>please {auth}!</h3>
                {error &&
                    <h5>{error}</h5>
                }
                <input
                    className='form-control'
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className='form-control'
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                {
                    auth == "signin" ?
                        <h6 onClick={() => setAuth('signup')}>Dont have an account ?</h6> :
                        <h6 onClick={() => setAuth('signin')}>Already have an account?</h6>
                }
                <button className="btn btn-info" onClick={() => authenticate()}>{auth}</button>
                {/* <a className='' href='/signup'><button className="btn btn-info">Sign Up</button></a> */}
                <Button variant="primary" onClick={handleShow}>
                    Sign Up
                </Button>
            </div>
            <div>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Sign Up</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <label for="recipient-name" className="col-form-label">Frist Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={fname}
                                placeholder="Frist Name"
                                onChange={(e) => setfName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label for="recipient-name" className="col-form-label">Last Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={lname}
                                placeholder="Last Name"
                                onChange={(e) => setlName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label for="recipient-name" className="col-form-label">Email</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={email}
                                placeholder="Eamil"
                                onChange={(e) => setEmail(e.target.value)}
                                />
                                
                        </div>
                        <div className="form-group">
                            <label for="recipient-name" className="col-form-label">Password</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={password}
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label for="recipient-name" className="col-form-label">Conform Password</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={cpassword}
                                placeholder="Conform Password"
                                onChange={(e) => setcPassword(e.target.value)}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <button className="btn btn-info" onClick={() => authenticate()}>Submit</button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default Auth
