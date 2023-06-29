import React, { useEffect, useId, useState } from 'react'

const viewdata = () =>{
    let view = JSON.parse(localStorage.getItem("s_data"));
    if(view != null){
        return view;
    }
    return [];
}

const viewdelete = () =>{
    let d_view = JSON.parse(localStorage.getItem("s_delete"));
    if(d_view != null){
        return d_view;
    }
    return [];
}


function Students_data() {

    const [details, setDetails] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        address: ''
    })

    const [showdetails, setShowdetails] = useState(viewdata());
    const [up_details, setUp_Details] = useState(false);
    const[index_de, setIndex_De] = useState(null);
    const [de_details, setDe_Details] = useState(viewdelete());

    const handlechange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setDetails({ ...details, [name]: value })
    }

    const handlesubmit = (e) => {
        e.preventDefault();

        if(up_details){
            let newup = [...showdetails];
            newup[index_de] = details;

            setShowdetails(newup);
            setUp_Details(false);
        }
        else{
            let userid = Math.floor(Math.random () * 1000);
            let name = ({id: userid, ...details});
            setShowdetails([...showdetails, name]);
        }
        setDetails({
            fname: '',
            lname: '',
            email: '',
            phone: '',
            address: ''
        })
    }

    const handleDelete = (id) =>{
        console.log("click",id);
        let a_data = viewdata();
        console.log("a data",a_data);

        let d_delete = a_data.filter((de) =>{
            if(de.id == id){
                setDe_Details([...de_details,de])
            }
            else{
                console.log("val",de);
                return de.id != id;
            }
        })
        setShowdetails(d_delete);
        // localStorage.setItem("s_data",JSON.stringify(ans));
    }

    const handleUpdate = (id,index) =>{
        console.log("click",id);
        let m_data = viewdata();
        // console.log("m_data",m_data);
        let single_data = m_data.filter((sd) => {
            // console.log("sd",sd);
            return sd.id == id;
        })
        console.log("single_data", single_data);
        setDetails(single_data[0]);
        setUp_Details(true);
        setIndex_De(index);
    }

    useEffect(()=>{
        localStorage.setItem("s_data",JSON.stringify(showdetails));
    }, [showdetails])

    useEffect(()=>{
        localStorage.setItem("s_delete",JSON.stringify(de_details));
    }, [de_details])

    
    return (
        <>
            <form onSubmit={handlesubmit}>
                <input type='hidden' name="userid"/>
                {/* name 45 email 45 password 16 phone 10 */}
                <label>First Name :</label>
                <input type="text" name="fname" value={details.fname} onChange={handlechange} placeholder="Enter Your FirstName" />
                <br />
                <br />
                <label>Last Name :</label>
                <input type="text" name="lname" value={details.lname} onChange={handlechange} placeholder="Enter Your LastName" />
                <br />
                <br />
                <label>Email : </label>
                <input type="email" name="email" value={details.email} onChange={handlechange} placeholder="Enter Your Email Id" />
                <br />
                <br />
                <label>Phone : </label>
                <input type="number" name="phone" value={details.phone} onChange={handlechange} placeholder="Enter Phone Number" />
                <br />
                <br />
                <label>Address : </label>
                <textarea rows="4" cols="30" name="address" value={details.address} onChange={handlechange} placeholder="Enter Your Address"></textarea>
                <br />
                <br />
                <div className="se_btn">
                    <input type="submit" value="Submit" className="btn" />
                    {/* <input type="button" value="Edit" className="btn" /> */}
                </div>
            </form>
            <br />
            <br />
            <br />
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Address</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        showdetails.map((sd,index) => {
                            return (
                                <>
                                    <tr>
                                        <td>{sd.id}</td>
                                        <td>{sd.fname}</td>
                                        <td>{sd.lname}</td>
                                        <td>{sd.email}</td>
                                        <td>{sd.phone}</td>
                                        <td>{sd.address}</td>
                                        <td>
                                            <button className="btns" type="button" onClick={(e) => {handleDelete(sd.id)}}>Delete</button> ||
                                            <button className="btns" type="button" onClick={(e) => {handleUpdate(sd.id,index)}}>Update</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Students_data