import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PayPalModal from "../components/PayPalModal";
import PaystackModal from "../components/PaystackModal";
import GivingSection from "./GivingSection";

const Page = styled.div`
  padding:80px 20px;
  background:#f8fafc;
`;

const Form = styled.div`
  max-width:600px;
  margin:auto;
  background:white;
  padding:40px;
  border-radius:20px;
  box-shadow:0 10px 30px rgba(0,0,0,0.08);

  h2 {
  color:#0A3CFF;
  }
`;

const Input = styled.input`
  width:100%;
  padding:12px;
  margin-bottom:15px;
  border-radius:10px;
  border:1px solid #ddd;
`;

const Select = styled.select`
  width:100%;
  padding:12px;
  margin-bottom:15px;
`;

const Button = styled.button`
  width:100%;
  padding:14px;
  border:none;
  border-radius:30px;
  background:linear-gradient(135deg,#b8860b,#d4af37);
  color:white;
  cursor:pointer;
`;

export default function DonationsPage(){

const [form, setForm] = useState({
  name:"",
  email:"",
  phone:"",
  category:"",
  customReason:"",
  currency:"",
  amount:""
});


console.log(form)

const [showPaypal,setShowPaypal] = useState(false);
const [showPaystack,setShowPaystack] = useState(false);




const handleChange = e =>{
  setForm({...form,[e.target.name]:e.target.value});
};

const handleSubmit = () => {

  if(form.currency === "USD"){
    setShowPaypal(true);
  }

  if(form.currency === "NGN"){
    setShowPaystack(true);
  }
};


const resetForm = () => {
  setForm({
    name: "",
    email: "",
    phone: "",
    category: "",
    customReason: "",
    currency: "",
    amount: ""
  });
};

return(
<>
<GivingSection/>
<Page id="give">


<Form>

<h2>Give / Donate</h2>

<Input name="name" placeholder="Full Name" onChange={handleChange}/>
<Input name="email" placeholder="Email" onChange={handleChange}/>
<Input name="phone" placeholder="Phone Number" onChange={handleChange}/>

<Select name="category" onChange={handleChange}>
  <option value="">Select Giving Type</option>
  <option>Tithe</option>
  <option>Offering</option>
  <option>Special Seed</option>
  <option>Donation</option>
  <option>Other</option>
</Select>

{form.category === "Other" && (
<Input name="customReason" placeholder="Enter reason" onChange={handleChange}/>
)}

<Select name="currency" onChange={handleChange}>
  <option value="">Select Currency</option>
  <option value="USD">USD</option>
  <option value="NGN">NGN</option>
</Select>

<Input name="amount" placeholder="Amount" type="number" onChange={handleChange}/>

<Button onClick={handleSubmit}>
Proceed to Payment
</Button>

</Form>

{showPaypal && (
<PayPalModal form={form} close={()=>{setShowPaypal(false); resetForm()}}/>
)}

{showPaystack && (
<PaystackModal form={form} close={()=>{setShowPaystack(false); resetForm()}}/>
)}

</Page>

</>

);
}