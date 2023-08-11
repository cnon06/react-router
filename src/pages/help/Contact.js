import {React}from "react";
import { Form, redirect  , useActionData} from "react-router-dom";

export const Contact = () => {
  const errors = useActionData();
  return (
    <div className="contact">
      <h3>Contact</h3>
      <Form method="post" action="/help/contact">
        <div>
          <label htmlFor="email">E-Mail: </label>
          <input type="text" name="email" id="" />
          {errors?.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
          {errors?.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export const contactAction = async ({ request }) => {
  const data = await request.formData();
 
  const email = data.get("email");
  const message = data.get("message");
 
  const errors = {};
  
  if ( !email.includes("@")) {
    errors.email = "You must enter an email address with the @ sign in it.";
  }

  if (message.length<10) {
    errors.message = "You must enter more than 10 characters for the message..";
  }
 
 
  if(Object.keys(errors).length)
  {
    return errors;
  }
  return redirect("/");
  

};
