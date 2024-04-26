import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div
          style={{
            display: "flex",
            margin: 40,
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 style={{ fontSize: 90 }}>Contact Me</h1>
            <h4 style={{ fontSize: 25, color: "#556475", fontWeight: 300 }}>
              I will make your product look modern and professional while saving
              you precious time.
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
                label="Write your name"
                variant="outlined"
              />
              <TextField
                style={{ marginTop: 10, marginRight: 10 }}
                id="outlined-basic"
                label="Write your email"
                variant="outlined"
              />
              <TextField
                style={{ marginTop: 10 }}
                id="filled-basic"
                label="Tell me about your project"
                variant="filled"
              />
              <Button
                style={{
                  marginTop: 10,
                  color: "white",
                  backgroundColor: "#0a82ed",
                  marginBottom: 30,
                }}
                variant="contained"
                color="primary"
              >
                Sent
              </Button>
            </div>
            <TextField
              style={{ marginTop: 10 }}
              id="outlined-number"
              label="Phone Number"
              type="Number"
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
              Rather than worrying about switching offices every couple years,
              you can instead stay in the same location and grow-up from your
              shared coworking space to an office that takes up an entire floor.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
