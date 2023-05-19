import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  movies : [
    {
      movieName: "Dune",
      rate : "50",
      latest_info: ["Last week collection 1 cr","4.5 rating as shown in Rotten tomato","Average 1 day collection is 40 lakhs"],
      about : "Spider-Man is a popular superhero film franchise based on the Marvel Comics character, Spider-Man. The movies follow the adventures of Peter Parker, a high school student who gains spider-like abilities after being bitten by a genetically-altered spider. The Spider-Man movies have been highly successful, with multiple actors portraying the iconic hero over the years.",
      resolution_source: "From IMDB",
      expiry_time: "11:00 pm",
      expiry_date:"26 May 2023",
      src: "https://edit.org/photos/img/blog/h1d-movie-poster-template-maker-creator-online-editor.jpg-840.jpg",
      alt: "Image 1",
      ques: "Will Dune receive a high rating on Rotten Tomatoes?",
      poll:"1233",
      id : "1",
    },
    {
      movieName: "Dune",
      rate : "50",
      latest_info: ["Last week collection 1 cr","4.5 rating as shown in Rotten tomato","Average 1 day collection is 40 lakhs"],
      about : "Spider-Man is a popular superhero film franchise based on the Marvel Comics character, Spider-Man. The movies follow the adventures of Peter Parker, a high school student who gains spider-like abilities after being bitten by a genetically-altered spider. The Spider-Man movies have been highly successful, with multiple actors portraying the iconic hero over the years.",
      resolution_source: "From IMDB",
      expiry_time: "11:00 pm",
      expiry_date:"26 May 2023",
      src: "https://static-cse.canva.com/blob/1053326/1131w-numKCOCv3a0.jpg",
      alt: "Image 2",
      ques: "Will Leonardo DiCaprio win an award for his performance in Don't Look Up?",
      poll:"2354",
      id : "2",
    },
    {
      movieName: "Dune",
      rate : "50",
      latest_info: ["Last week collection 1 cr","4.5 rating as shown in Rotten tomato","Average 1 day collection is 40 lakhs"],
      about : "Spider-Man is a popular superhero film franchise based on the Marvel Comics character, Spider-Man. The movies follow the adventures of Peter Parker, a high school student who gains spider-like abilities after being bitten by a genetically-altered spider. The Spider-Man movies have been highly successful, with multiple actors portraying the iconic hero over the years.",
      resolution_source: "From IMDB",
      expiry_time: "11:00 pm",
      expiry_date:"26 May 2023",
      src: "https://www.photowhoa.com/2015/wp-content/uploads/2021/03/Movie-poster-1-724x1024.jpg",
      alt: "Image 3",
      ques: "Will Leonardo DiCaprio win an award for his performance in Don't Look Up?",
      poll:"1200",
      id : "3",
    },
    {
      movieName: "Dune",
      rate : "50",
      latest_info: ["Last week collection 1 cr","4.5 rating as shown in Rotten tomato","Average 1 day collection is 40 lakhs"],
      about : "Spider-Man is a popular superhero film franchise based on the Marvel Comics character, Spider-Man. The movies follow the adventures of Peter Parker, a high school student who gains spider-like abilities after being bitten by a genetically-altered spider. The Spider-Man movies have been highly successful, with multiple actors portraying the iconic hero over the years.",
      resolution_source: "From IMDB",
      expiry_time: "11:00 pm",
      expiry_date:"26 May 2023",
      src: "https://www.photowhoa.com/2015/wp-content/uploads/2021/03/Movie-poster-1-724x1024.jpg",
      alt: "Image 3",
      ques: "Will The Matrix 4 be rated higher on Rotten Tomatoes than The Matrix Reloaded?",
      poll:"5332",
      id : "4",
    },
  ]
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
} = counter.actions;

export default counter.reducer;
