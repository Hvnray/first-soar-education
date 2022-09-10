import type { NextComponentType  } from 'next'
import type { NextPage } from "next";
import { AppProps } from 'next/app';

const FirstSoarEducation = "First Soar Education";

const FaceBook = "Facebook Account";
const Instagram = "Instagram Account";
const Twitter = "Facebook Twitter";

interface PageExtender{
  title: string
}
//Add custom appProp type then use union to add it
export type CustomAppProps = AppProps & {
  Component: NextComponentType & PageExtender // add auth type
}


export type CustomPageProps = NextPage & PageExtender;

export const info = [
  {
    image: "/section4/icon1.svg",
    imageAlt: "Vercel Logo",
    title: "Education Counselling",
    text: "One on One educational consultation with our team.",
  },
  {
    image: "/section4/icon2.svg",
    imageAlt: "Vercel Logo",
    title: "Accommodation Assistance",
    text: "Getting an apartment is made easier upon arrival in the Philippines.",
  },
  {
    image: "/section4/icon3.svg",
    imageAlt: "Vercel Logo",
    title: "Visa Assistance",
    text: "We assist in getting students the necessary documents needed for the student visa processing.",
  },
  {
    image: "/section4/icon4.svg",
    imageAlt: "Vercel Logo",
    title: "Airport Assistance",
    text: "Pick up and drop off upon arrival in the country.",
  },
  {
    image: "/section4/icon5.svg",
    imageAlt: "Vercel Logo",
    title: "70+ Enrolled",
    text: "We have successfully enrolled over 70 students in accredited institutions in the Philippines.",
  },
  {
    image: "/section4/icon6.svg",
    imageAlt: "Vercel Logo",
    title: "Funds Transfer",
    text: "Receiving funds from Nigeria is made easy to our students.",
  },
  {
    image: "/section4/icon1.svg",
    imageAlt: "Vercel Logo",
    title: "50+ Graduates",
    text: "Over 50+ successful graduates doing exceptionally well in their various field globally.",
  },
];

export const studentsFeedBack = [
  {
    image: "/section6/stephenOmoOgun.svg",
    name: "Stephen Omo-Ogun",
    message:
      "I am a final year medical student, currently doing my internship program in the Philippines. We are exposed with the opportunity to work with medical professionals and hands-on experience with clinical cases.",
  },
  {
    image: "/section6/doctorAzike.svg",
    name: "Doctor Azike",
    message:
      "Furthering my studies in the Philippines was the best decision I made for my career. I am currently practicing as a medical doctor in Australia.",
  },
  {
    image: "/section6/richardManagor.svg",
    name: "Richard Managor",
    message:
      "I graduated with a Bachelor of Art degree in literature in the Philippines. Earning this degree has paved way for me in my career as a professional writer and has opened employment opportunities for me globally.",
  },
  {
    image: "/section6/joqueenUloko.svg",
    name: "Joqueen Uloko",
    message:
      "I am a second year pharmacy student at a higher institution in the Philippines. Philippines is one of the best place to study. Good tropical weather, affordable tuition fees, friendly and healthy learning environment with lecturers who are professionals willing and ready to invest in the life of students. I am happy I chose Philippines.",
  },
  {
    image:'/section6/doctorIjeoma.svg',
    name:'Doctor Ijeoma',
    message:'I am a 1st year medical resident in family medicine in Minnesota USA. I graduated from medical school in the Philippines. It is the best and most affordable place to earn a medical degree with a good highly structured health education.',
  },
  {
    image:'/section6/egnrValerie.svg',
    name:'Egnr. Valerie',
    message:'Studying engineering in the Philippines was made easy for me because most theories were practicality with quality and functional equipments. I’m a graduate currently running a franchise of General Safety and Engineering Firm and processing my Masters in the UK.',
  },
  {
    image:'/section6/sharonArinze.svg',
    name:'Sharon Arinze',
    message:'Philippines is a country I explored so well. I received quality training and with my knowledge on Psychology which I studied there, I’ve been able to work with many patients with mental and developmental disabilities, it feels good serving the society. ',
  },
];

export const meetTheTeam = [
  {
    image: "/section8/doctorNaya.svg",
    name: "Doctor Naya",
  },
  {
    image: "/section8/doctorChigozie.svg",
    name: "Doctor Chigozie",
  },
  {
    image: "/section8/danielAka.svg",
    name: "Daniel Aka",
  },
];

export const FAQ = [
  {
    title: "Is Medicine degree from the Philippines valid in the USA",
    body: "Medicine degree from the Philippines is absolutely valid in the United States of America, as the study pattern is related to US medical education pattern and also valid worldwide.",
  },
  {
    title: "Is IELTS Mandatory to study Medicine?",
    body: "No IELTS is not mandatory.",
  },
  {
    title: "What is the official language in the Philippines?",
    body: "English language is the official language of the Philippines",
  },
  {
    title: "What is the university fees structure like?",
    body: "University fees ranges from 200,000 - 500,000 pesos annually, depending on the course of choice.",
  },
  {
    title: "Can I work with a student visa in the Philippines?",
    body: "Foreigners with students visa are not allowed to be employed.",
  },
  {
    title: "Are their certificates issued in English?",
    body: "Yes English language is used in issuing all certificates.",
  },
  {
    title: "What is the medium of instruction used in the Philippines?",
    body: "English Serves as the medium of instruction used to teach from elementary to university level.",
  },
];

export const SocialMedia = [
  {
    url: "www.instagram.com",
    logo: "/footer/instagram.svg",
    name: `${FirstSoarEducation} ${Instagram}`,
  },
  {
    url: "www.facebook.com",
    logo: "/footer/facebook.svg",
    name: `${FirstSoarEducation} ${FaceBook}`,
  },
  {
    url: "www.twitter.com",
    logo: "/footer/twitter.svg",
    name: `${FirstSoarEducation} ${Twitter}`,
  },
];
export const contactUsSocialMedia = [
  {
    url: "www.instagram.com",
    logo: "/contact-us/instagram.svg",
    name: `${FirstSoarEducation} ${Instagram}`,
  },
  {
    url: "www.facebook.com",
    logo: "/contact-us/facebook.svg",
    name: `${FirstSoarEducation} ${FaceBook}`,
  },
  {
    url: "www.twitter.com",
    logo: "/contact-us/twitter.svg",
    name: `${FirstSoarEducation} ${Twitter}`,
  },
];
export const footerNavLinks = [
  {
    route: "/",
    name: "Home",
  },
  {
    route: "/medicine",
    name: "Study Medicine",
  },
  {
    route: "/choosing-philippines",
    name: "Explore Philippines",
  },
  {
    route: "/#FAQS",
    name: "FAQs",
  },
  {
    route: "/contact-us",
    name: "Contact Us",
  },
];

export const mobileMenuSocials = [
  {
    link: "https://www.instagram.com/hvnray",
    image: "/navbar/instagram.svg",
    alt: `${FirstSoarEducation} ${Instagram}`,
  },
  {
    link: "https://www.instagram.com/hvnray",
    image: "/navbar/facebook.svg",
    alt: `${FirstSoarEducation} ${FaceBook}`,
  },
  {
    link: "https://www.instagram.com/hvnray",
    image: "/navbar/twitter.svg",
    alt: `${FirstSoarEducation} ${Twitter}`,
  },
];

export const degreesInPhillipines = [
  "Nursing",
  "Business Administration",
  "Medicine",
  "Dentistry",
  "Engineering",
  "Computer Science",
  "Psychology",
  "Biological Sciences",
  "medical Technology",
  "Education",
  "Literature",
  "Architecture",
  "Public Health",
  "Hospital Management",
  "Public Administration",
  "Pharmacy"
];
