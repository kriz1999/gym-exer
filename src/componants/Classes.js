/** @format */
import React, { useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./class.css";

// import required modules
import {} from "swiper/modules";
import { Container, Typography } from "@mui/material";

import ph1 from "../img/classes/The_Gym_Group-Generic-Member_Performing_Barbell_Bicep_Curl.webp";
import ph2 from "../img/classes/upper body blast.webp";
import ph3 from "../img/classes/flexi-stretch.webp";
import ph4 from "../img/classes/The_Gym_Group-Generic-Members_Performing_Deadlifts.webp";
import ph5 from "../img/classes/body conditioning.webp";
import ph6 from "../img/classes/legs, bums & tums.webp";
import ph7 from "../img/classes/flexi-stretch.webp";
import ph8 from "../img/classes/fit balance.png";
import ph9 from "../img/classes/The_Gym_Group-Generic-Members_In_Childs_Pose.webp";
import ph10 from "../img/classes/pilates.webp";
import ph11 from "../img/classes/bootcamp.webp";
import bg1 from "../img/classes-bg/fit pump(1).webp";
import bg2 from "../img/classes-bg/upper body blast.webp";
import bg3 from "../img/classes-bg/fundamentals.webp";
import bg4 from "../img/classes-bg/deadlift workshop.webp";
import bg5 from "../img/classes-bg/body conditioning.webp";
import bg6 from "../img/classes-bg/legs, bums & tums.webp";
import bg7 from "../img/classes-bg/flexi-stretch.webp";
import bg8 from "../img/classes-bg/fit balance.webp";
import bg10 from "../img/classes-bg/pilates.webp";
import bg9 from "../img/classes-bg/yoga.webp";
import bg11 from "../img/classes-bg/bootcamp.webp";
import SwiperSwich from "./SwiperSwich";

const classes = [
  {
    name: "fit pump",
    img: ph1,
    discribe:
      "Pump to the beat in this fun barbell class designed to help you burn fat, gain strength and tone your body. You will build confidence using a barbell and learn a range of key exercises that you can use outside the class as well. Fit Pump combines low weights with high repetition movements, building your muscular endurance. Suitable for all abilities, you will see your progression from week to week.",

    ben1: "Holding a pose can build strength.",
    ben2: "Improves strength, balance and flexibility.",

    ben3: "Slow movements and deep breathing increase blood flow and warm up muscles.",
    bg: bg1,
  },
  {
    name: "upper body blast",
    img: ph2,
    discribe:
      "This class will improve your upper body strength and knowledge. It doesn't matter if you are a beginner or expert, all fitness levels are welcome. Chest, back, shoulders and arms will all be targeted in this class, helping you develop a strong upper body and good posture. You will learn new exercises that you can introduce in your own workouts as well as practicing the correct technique .",

    ben1: "Gets your blood pumping.",
    ben2: "Lowers your blood pressure.",
    ben3: "Strengthens your immune system. Improves your sleep.",
    bg: bg2,
  },
  {
    name: "fundamentals",
    img: ph3,
    discribe:
      "A total body workout that combines the 7 key functional movements of squat, lunge, push, pull, hinge, twist and walk/run. You will train your muscles to work together and improve their ability to perform daily tasks. Using a mixture of bodyweight and weighted exercises, this is a low-impact class improving your overall strength, balance and mobility.",

    ben1: "Mind & Body improves strength, balance and flexibility.",
    ben2: "Slow movements and deep breathing",
    ben3: " Increase blood flow and warm up muscles",
    bg: bg3,
  },
  {
    name: "deadlift workshop",
    img: ph4,
    discribe:
      "The deadlift is a key compound movement that improves your core strength, core stability and posture. It trains most of the muscles in your legs, lower back and core. This class will cover the fundamental coaching tips and technique needed to perform a variety of deadlift movements safely and for maximum output. Across different sessions we will cover the conventional deadlift, the straight leg deadlift, . Whether you are a total newbie or someone looking to perfect your technique.",

    ben1: "Holding a pose can build strength.",
    ben2: "Improves strength, balance and flexibility.",

    ben3: "Slow movements and deep breathing increase blood flow and warm up muscles.",
    bg: bg4,
  },
  {
    name: "body conditioning",
    img: ph5,
    discribe:
      "Here’s a class that’s designed to deliver all-round benefits, from head to toe. This whole-body workout combines cardio exercises to boost fitness levels with focused resistance training to help you trim down and tone up. You don’t have to be a fitness fanatic to take part, every exercise can be adapted to your level. This is a complimentary workout to all fitness goals, conditioning your body for all exercise-types and sports.",

    ben1: "Gets your blood pumping.",
    ben2: "Lowers your blood pressure.",
    ben3: "Strengthens your immune system. Improves your sleep.",
    bg: bg5,
  },
  {
    name: "legs, bums & tums",
    img: ph6,
    discribe:
      " Wouldn’t it be great if you could just click your fingers and ‘hey presto!’ – you’ve the leaner legs, toned tummy and the pert bum you’ve always dreamed about. Unfortunately, nothing’s ever that easy, but this class is a great place to start! Get ready to squat, lunge, crunch and lift as you burn some calories and tone the key areas of your lower body.",

    ben1: "Mind & Body improves strength, balance and flexibility.",
    ben2: "Slow movements and deep breathing",
    ben3: " Increase blood flow and warm up muscles",
    bg: bg6,
  },
  {
    name: "flexi-stretch",
    img: ph7,
    discribe:
      "This class blends stretching, strengthening postures, mobility and breathwork to help reduce stress, decrease injury and improve your flexibility.",

    ben1: "Holding a pose can build strength.",
    ben2: "Improves strength, balance and flexibility.",

    ben3: "Slow movements and deep breathing increase blood flow and warm up muscles.",
    bg: bg7,
  },
  {
    name: "fit balance",
    img: ph8,
    discribe:
      "Never tried Yoga before? This class is the perfect introduction. You’ll bend and stretch through a series of exercises that will help revitalise your mind and body. Improve the flexibility in your joints and muscles and enjoy some time to re-focus your mind. See your confidence and mobility improving from week to week",

    ben1: "Gets your blood pumping.",
    ben2: "Lowers your blood pressure.",
    ben3: "Strengthens your immune system. Improves your sleep.",
    bg: bg8,
  },
  {
    name: "yoga",
    img: ph9,
    discribe:
      "Yoga means ‘the union of mind, body and soul’. Seem a bit deep for you? Just wait until you’ve tried the stretches. Working through a sequence of postures – or asanas – you’ll improve your flexibility, build muscle strength and ease tension. As always, let your breath fuel every move. And once you’ve conquered ‘The Warrior’ and mastered ‘The Downward Facing Dog’, you’ll feel ready to take on the world. All together now, “Namaste”.",

    ben1: "Mind & Body improves strength, balance and flexibility.",
    ben2: "Slow movements and deep breathing",
    ben3: " Increase blood flow and warm up muscles",
    bg: bg9,
  },
  {
    name: "pilates",
    img: ph10,
    discribe:
      "If pounding the treadmill or lifting weights isn’t for you, Pilates could be. It’s a sequence of stretches and strengthening postures to improve balance and flexibility and boost energy levels. It also gives you heightened body awareness, what we call your ‘mind body connection’. But don’t let that fool you into thinking it’s easy. It might look gentle, but the results are 100% high impact.",

    ben1: "Holding a pose can build strength.",
    ben2: "Improves strength, balance and flexibility.",

    ben3: "Slow movements and deep breathing increase blood flow and warm up muscles.",
    bg: bg10,
  },
  {
    name: "bootcamp",
    img: ph11,
    discribe:
      "Alternating between fast-paced cardio and then strength exercises, this military-style interval workout is tough, but great fun too. Feel the energy in the room as you all push forward together towards the finish line. The combination of upper and lower body exercises, strength and cardio, will send your heart rate sky-high so you burn through calories. This class will help everyone improve their fitness levels, no matter their starting point or destination",
    ben1: "Gets your blood pumping.",
    ben2: "Lowers your blood pressure.",
    ben3: "Strengthens your immune system. Improves your sleep.",
    bg: bg11,
  },
];

const Classes = ({ slids }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Container maxWidth="lg">
        <Typography
          fontSize={{ xs: "30px", md: "50px" }}
          color="text.main"
          pl={2}
          mb={5}>
          FITNESS CLASSES
        </Typography>
        <SwiperSwich
          slids={slids}
          item={thumbsSwiper}
          setItem={setThumbsSwiper}
          array={classes}></SwiperSwich>
      </Container>
    </div>
  );
};

export default Classes;
