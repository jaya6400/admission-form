import React, {useState} from 'react';
import './style.css';
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";

function RegistrationForm() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const [age, setAge] = useState(null);
    const [phoneno, setphoneno] = useState(null);
    const [batches, setBatch] = useState(null);
    const [pay, setPay] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
        if(id === "age"){
            setAge(value);
        }
        if(id === "phoneno"){
            setphoneno(value);
        }
        if(id === "batches"){
            setBatch(value);
        }
        if(id === "pay"){
            setPay(value);
        }
    }
    
    const CompletePayment = () =>{
        let obj = {
                firstName : firstName,
                lastName:lastName,
                email:email,
                password:password,
                confirmPassword:confirmPassword,
                age:age,
                phoneno:phoneno,
                pay:pay,
                batches:batches
            } 
        
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        update(ref(database), updates); 
        location.replace("\success.html");
        } 
    // const CompletePayment  = () => {
    //     console.log(firstName,lastName,email,password,confirmPassword,age,pay);
    //     
    // }
   
    
    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  className="form__input" type="text" id="lastName" value={lastName} onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="age">
                <label className="form__label">Enter Age </label>
                <input className="form__input" type="number" id="age" value={age} placeholder="Age" required min="18" max="65" onChange = {(e) => handleInputChange(e)}/>
                </div>
                <div className="phoneno">
                <label className="form__label">Contact Number</label>
                <input className="form__input" type="tel" id="phoneno" value={phoneno} placeholder="Enter contact number"  onChange = {(e) => handleInputChange(e)} required/>
                </div>
                <div className="batch">
                <label className="form__label" for="batch">Choose a batch:</label>
                  <select className="form__input" name="batches" id="batches" value={batches}>
                  <option value="batch1">Batch-1(6-7AM)</option>
                   <option value="batch2">Batch-2(7-8AM)</option>
                   <option value="batch3">Batch-3(8-9AM)</option>
                   <option value="batch4">Batch-4(5-6PM)</option>
                   </select>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
            </div>
            <div className="paying">
            <label className="form__label" for="button1">Pay ₹500 for the first month</label>
            <input className="form__input" type="number" id="pay" value={pay} required min="500" onChange = {(e) => handleInputChange(e)} placeholder="Enter Amount"/>
            </div>
            <div class="button1">
                <button onClick={()=>CompletePayment()} id="buttn1" type="submit"  class="btn"> Pay </button>
            </div>
        </div>
       
    )       
}


export default RegistrationForm