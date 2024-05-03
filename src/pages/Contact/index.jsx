import React, { useRef, useState } from "react";
import { TextField } from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7w24tx9",
        "template_2c6fl4e",
        form.current,
        "X9V4twZZAeXHPOuSO"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email is sent successfully. We will contact you soon");
          setSuccess("sent");
        },
        (error) => {
          console.log(error.text);
          toast.error("email did not send ");
          setSuccess("not sent");
        }
      );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form
          id="userForm"
          ref={form}
          onSubmit={sendEmail}
          style={{
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div className="flex flex-row items-center justify-between mx-10 my-5">
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h1 style={{ fontSize: 90 }}>Contact Me</h1>
              <h4 style={{ fontSize: 25, color: "#556475", fontWeight: 300 }}>
                I will make your product look modern and professional while
                saving you precious time.
              </h4>
            </section>

            <img
              style={{ width: 500, Height: 350 }}
              src="https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration6.svg"
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyConten: "space-between",
              width: "90%",
              margin: 50,
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  style={{ marginTop: 10, marginRight: 10 }}
                  id="outlined-basic"
                  name="from_name"
                  autoComplete="given-name"
                  placeholder="Your Name"
                  required
                  label="Write your name"
                  variant="outlined"
                />
                <TextField
                  style={{ marginTop: 10, marginRight: 10 }}
                  id="outlined-basic"
                  label="Write your email"
                  name="email"
                  autoComplete="email"
                  placeholder="Your Email"
                  required
                  variant="outlined"
                />
                <TextField
                  style={{ marginTop: 10 }}
                  id="filled-basic"
                  label="Title"
                  name="heading"
                  required
                  variant="filled"
                />
                <textarea
                  placeholder="Write a Message"
                  cols="30"
                  rows="10"
                  required
                  name="message"
                  className="border py-[14px] pr-[14px] pl-5 border-zinc-200 rounded"
                ></textarea>
                <div>
                  <button
                    type="submit"
                    form="userForm"
                    className="bg-[#4B6BFB] hover:bg-[#313f7c] py-2 px-4 text-white rounded-md mt-8 "
                  >
                    Send Message
                  </button>
                </div>
              </div>
              <TextField
                style={{ marginTop: 10 }}
                id="outlined-number"
                label="Phone Number"
                type="Number"
                name="phone"
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div
              style={{
                width: "50%",
                marginLeft: 50,
                borderLeft: "1px solid black",
                paddingLeft: 20,
              }}
            >
              <h1 style={{ fontSize: 32 }}>Contact detail</h1>
              <p>
                Please provide me with your contact information including your
                name, email, and phone number. Additionally, if you're
                interested in discussing further details about your idea,
                including its title and additional information, I would be more
                than happy to arrange a call back at your convenience.
              </p>
            </div>
          </div>
        </form>
      </motion.div>
    </>
  );
}
