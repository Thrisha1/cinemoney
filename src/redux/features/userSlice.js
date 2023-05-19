import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_details: {
    name: "John Doe",
    username:"john007",
    email: "john@gmail.com",
    avatar:"/profileAssests/avatar.svg",
    password:"",
    mobile: "+91",
    dob: "01/01/2000",
    gender:"Male",
    total_amount: "",
    redeemed_amount: "",
    pending_amount: "",
    particiated_events: [
      {
        adId: 1,
        title: "Ad 1",
        desc: 'Eid is a digital advertising platform that helps you find the right ad for your business.',
        imageSrc: "https://img.freepik.com/free-vector/realistic-eid-mubarak-greeting-card_1017-31239.jpg?w=2000",
        Amt: 100,
        link: "https://www.google.co.in/",
        shared: false,
        screenShot_uploaded: false,
        screenShot_data: "",
        accept_ad: false,
      },
    ],
  },
  profile_images : [
    {
      id: 1,
      imageSrc: "/profileAssests/avatar.svg",
    },
    {
      id: 2,
      imageSrc: "/profileAssests/avatar.svg",
    },
    {
      id: 3,
      imageSrc: "/profileAssests/avatar.svg",
    },
    {
      id: 4,
      imageSrc: "/profileAssests/avatar.svg",
    },
    {
      id: 5,
      imageSrc: "/profileAssests/avatar.svg",
    },
    {
      id: 6,
      imageSrc: "/profileAssests/avatar.svg",
    },
    {
      id: 7,
      imageSrc: "/profileAssests/avatar.svg",
    },
    {
      id: 7,
      imageSrc: "/profileAssests/avatar.svg",
    },
    {
      id: 7,
      imageSrc: "/profileAssests/avatar.svg",
    },
  ]
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
    fetchContacts: (state) => {
      state.user_details.dob = "25/03/2003";
      state.user_details.contacts = 2500;
    },
    fetchDob: (state) => {
      state.user_details.dob = "25/03/2003";

    },
    decrement: (state, action) => {
      state.user_details.mobile = action.payload;
    },
    incrementByAmount: (state, action) => {
      state.user_details.pincode = action.payload;
    },
    setGender: (state, action) => {
      console.log(action.payload)
      state.user_details.gender = action.payload;
    },
  },
});

export const {
  fetchContacts,
  fetchDob,
  setGender,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
  sharedAds,
} = user.actions;

export default user.reducer;
