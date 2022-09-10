import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import styles from "../../styles/contact-us/section1.module.scss";
import { contactUsSocialMedia } from "../../utils";
import cn from "classnames";

const Section1 = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [educationalLevel, seteducationalLevel] = useState("");
  const [course, setcourse] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [submitting, setsubmitting] = useState(false);
  const [submitted, setsubmitted] = useState(false);
  const formBlock = [
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "",
      value: firstName,
      onTextChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setfirstName(e.target.value),
    },
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "",
      value: lastName,
      onTextChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setlastName(e.target.value),
    },
    {
      id: "educationalLevel",
      label: "Educational Level",
      type: "select",
      placeholder: "",
      value: educationalLevel,
      onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
        seteducationalLevel(e.target.value),
    },
    {
      id: "course",
      label: "Course",
      type: "text",
      placeholder: "Enter your course of choice",
      value: course,
      onTextChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setcourse(e.target.value),
    },
    {
      id: "phoneNumber",
      label: "Phone Number",
      type: "tel",
      placeholder: "+234 810 000 0000",
      value: phone,
      onTextChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setphone(e.target.value),
    },
    {
      id: "mail",
      label: "Mail",
      type: "email",
      placeholder: "yourmail@gmail.com",
      value: email,
      onTextChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setemail(e.target.value),
    },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Write your message",
      value: message,
      onTextareaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setmessage(e.target.value),
    },
  ];
  function sendButtonClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (
      firstName != "" &&
      lastName != "" &&
      educationalLevel != "" &&
      course != "" &&
      phone != "" &&
      email != "" &&
      message != ""
    ) {
      e.preventDefault();
      setsubmitting(true);
      const data = {
        firstName,
        lastName,
        educationalLevel,
        course,
        phone,
        email,
        message,
      };
      console.table(data);
      fetch("/api/contact-us", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          console.log("Response received", res);
          if (res.status === 200) {
            console.log("Response succeeded!");
            setsubmitting(false);
            setsubmitted(true);
            setfirstName("");
            setlastName("");
            seteducationalLevel("");
            setphone("");
            setcourse("");
            setemail("");
            setmessage("");
          }
        })
        .catch((reason) => {
          console.log("Failed");
          console.log(reason);
        });
      return;
    }
  }
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1>Contact Us</h1>
        <p>Any questions or enquiries ? Just write us a message!</p>
      </div>
      <section className={styles.card}>
        <aside className={styles.contactArea}>
          <h2>Contact Information</h2>
          <p>Fill up the form, and we will respond to you within 24 hours.</p>
          <address>
            <a href="tel:+2348126003334" className={styles.contactUsPhoneNos}>
              +234 812 600 3334
            </a>
            <br />
            <a
              href="mailto:Firstsoareducation@gmail.com"
              className={styles.contactUsEmail}
            >
              Firstsoareducation@gmail.com
            </a>
          </address>
          <div className={styles.socialMedia}>
            {contactUsSocialMedia.map((b) => (
              <a href={b.url} key={b.name}>
                <Image
                  src={b.logo}
                  alt={b.name}
                  width={38}
                  height={38}
                  priority
                />
              </a>
            ))}
          </div>
        </aside>
        <form>
          {formBlock.map((b, i) =>
            b.type === "textarea" ? (
              <div
                className={cn([styles.custonInputs, styles.textarea])}
                key={i}
              >
                <label htmlFor={b.id}>{b.label}</label>
                <textarea
                  value={b.value}
                  name={b.label}
                  id={b.id}
                  required
                  placeholder={b.placeholder}
                  onChange={b.onTextareaChange}
                  rows={1}
                ></textarea>
              </div>
            ) : b.type === "select" ? (
              <div className={styles.custonInputs} key={i}>
                <label htmlFor={b.id}>{b.label}</label>
                <select
                  value={b.value}
                  name={b.label}
                  id={b.id}
                  required
                  placeholder={b.placeholder}
                  onChange={b.onSelectChange}
                >
                  <option value=""></option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                </select>
              </div>
            ) : (
              <div className={styles.custonInputs} key={i}>
                <label htmlFor={b.id}>{b.label}</label>
                <input
                  value={b.value}
                  type={b.type}
                  name={b.label}
                  id={b.id}
                  required
                  placeholder={b.placeholder}
                  minLength={3}
                  maxLength={40}
                  onChange={b.onTextChange}
                  pattern={
                    b.type === "tel"
                      ? "+[0-9]{3} [0-9]{3} [0-9]{3} [0-9]{4}"
                      : undefined
                  }
                />
              </div>
            )
          )}
          <div className={styles.end}>
            <p>
              FSE will not share your details with others without your
              permission.
            </p>
            <button disabled={submitting} onClick={sendButtonClick}>
              Send
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Section1;
