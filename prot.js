//users data

var users = [
  {
    frofile: "",
    video: "video1.mp4",
    background:
      "https://lh3.googleusercontent.com/pw/AP1GczM_PuMi1Sw2kHqSlw4Ck5gLzN9uDozTgBm2419YCMt3F2Tys14zIbWTJxj2av1kvOiFyM9NxZ-n1DUiLVtaOkHT2MxLqluK9lM5lGscgeo97M8z1WvoYK8MUeEXCaTMy1FmsFCW1rYlouVLnO6I5afq=w711-h948-s-no-gm?authuser=0",
    name: "Shivam",
    location: "INDIA,Jhoosi",
    age: "10",
    interest: ["FF", "ClashSquad"],
    bio: "Mai Sirf Bermunda Ranked khelta hoo, Ek matck BR phir CS",
  },
  {
    frofile: "",
    video: "video2.mp4",
    background:
      "https://lh3.googleusercontent.com/pw/AP1GczM8cg72OTn24HBo3Dn4Vy88ANv1pRpTrO5OodQiPYqdMERjZOSsTHntEy-iH42mwA_ozREqPH6NgqsAuhLHDXRKkr49z01ZD4_79x-iXemH2BZe2k3PMX4GrSuxIDO1JDp8KWojKfUMawHkSI4bTxsb=w423-h948-s-no-gm?authuser=0",
    name: "Ritest",
    location: "INDIA,Bagalme",
    age: "10",
    interest: ["music", "painnting"],
    bio: "Ritest se poochne ke baad likhunga uske bio me",
  },
  {
    frofile: "",
    video: "video3.mp4",
    background:
      "https://lh3.googleusercontent.com/pw/AP1GczPE62ZJnTEZnMvg8xTxdegWAcJ78OpUpiiOr3viNHhbOURtmtZBk6MVDWU2iIkPQoArXzwlI4zyGvSCErC6YcJlpYjog6j5c1J4EFNW2_m0EstagdWiBJPiwI8Ol499BGZuzwQtWh3C4IAq0qGdHigm=w705-h939-s-no-gm?authuser=0",
    name: "Aman",
    location: "INDIA,Bambhrauli",
    age: "10",
    interest: ["FF", "KoiBhiGun"],
    bio: "Kiski bhund phadoo , bhund de do koi bhund bhund bhund bhund ....",
  },
  {
    frofile: "",
    video: "video4.mp4",
    background:
      "https://lh3.googleusercontent.com/pw/AP1GczMchiO1ZvwiwdppsAFqSgoraXSe9uj8Du2npRlYbiqc6baayRNnTJOyzlt9gdfP4uo0VzNBkA0kifqkke7r8mz0FMT7ALYkl2IV4BUQAWoUUu6K2Z0bs_shjSsCczBAzDZdv8z-rkXBzxQ2sX25mGYD=w711-h948-s-no-gm?authuser=0",
    name: "Pranjal",
    location: "INDIA,Yahi",
    age: "10",
    interest: ["music", "shorts"],
    bio: "Pranjal batayega yaha kya bharna hai ",
  },
  {
    frofile: "",
    video: "video5.mp4",
    background:
      "https://images.unsplash.com/photo-1539614474468-f423a2d2270c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "De",
    location: "LONDON,Paris",
    age: "10",
    interest: ["music", "helo"],
    bio: "Bhai mere ko nahi pata inke bare me Aman pooch ke bataka bhai",
  },
  {
    frofile: "",
    video: "video6.mp4",
    background:
      "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Dunga",
    location: "USA,California",
    age: "10",
    interest: ["music", "effect"],
    bio: "Iske bhi bare me kuch nahi pata Aman hi batayega tab likh dunga",
  },
  {
    frofile: "",
    video: "",
    background: "",
    name: "",
    location: "INDIA,Yahi",
    age: "",
    interest: ["music", "shorts"],
    bio: "Lorem ipsum dolor sit amet",
  },
];

// to handle the current user

var lengthOfusers = users.length;
var curr = lengthOfusers - 2;
curr = 0;

function select(emem) {
  return document.querySelector(emem);
}

function setInitial() {
  select(".concontainer1").style.backgroundImage =
    "url('" + users[curr].background + "')";
  select(".concontainer2").style.backgroundImage =
    "url('" + users[curr].background + "')";
  select(".ltext h2").innerText = users[curr].location;
  select(".name p").innerHTML =
    "<p>" + users[curr].name + " <span>Age</span></p> ";
  select(".bio p").textContent = users[curr].bio;
  select(".vid").src = users[curr].video;

  //gsap animation on footerContainer
  gsap.from(".ltext,.name,.interest,.bio", {
    y: 100,
    duration: 0.5,
  });
  //animation on background images
}
setInitial();

function increase() {
  if (curr < 5) {
    curr += 1;
  } else {
    curr = 0;
  }
  setInitial();
}
function decrease() {
  if (curr > 0) {
    curr -= 1;
  } else {
    curr = 5;
  }
  setInitial();
}

//for developer informaion
var cat = 0;

function chaloo() {
  if (cat == 0) {
    select(".devinfo").style.visibility = "visible";
    cat = 1;
  }
}

function band() {
  if (cat == 1) {
    select(".devinfo").style.visibility = "hidden";
    cat = 0;
  }
}

//loading animation

var prel = document.querySelector(".loadcontainer");
window.addEventListener("load", function () {
  prel.style.display = "none";
});

//video controls

function videorun() {
  select(".name p").addEventListener("click", function () {
    select(".videocontainer").style.display = "block";
    console.log("hello");
  });
}
videorun();

select(".close").addEventListener("click", function () {
  select(".videocontainer").style.display = "none";
});

//for videos

var videos = select(".vid");

select(".name p").addEventListener("click", function () {
  // Check if video is paused, if so, play it
  if (videos.paused) {
    videos.play();
  }
});

// Add event listener to the pause button
select(".close").addEventListener("click", function () {
  // Check if video is playing, if so, pause it
  if (!videos.paused) {
    videos.pause();
  }
});
