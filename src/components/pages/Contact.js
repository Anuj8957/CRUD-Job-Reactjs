import React from 'react'

const Contact = () => {
    return (
        <div className="container">
            <div className="py-4">
                <h1>Contact</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control"  id="exampleInputEmail1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInpuTextArea" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleInpuTextArea" ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;