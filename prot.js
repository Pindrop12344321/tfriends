//users data

var users = [
  {
    frofile: "",
    video: "video1.mp4",
    background:
      "https://lh3.googleusercontent.com/pw/AP1GczP_hCzKmWNHDdhhePaKU1p_WDjuAv0lhJIngQGFC2ZxIGCr6oC6dEyfaLmkrIPSUlAkBa59fkEizDyrIqa_eSn5W4HsBRM3L46pC8thv08T1xFogzhz2lFKaFVAuBVM8WCDVz5epWSySIGGe6aTYHmo=w759-h1011-s-no-gm?authuser=0",
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
      "https://lh3.googleusercontent.com/pw/AP1GczPmt-WGQT04dueh4pLTYZ7KKlW4-tuA9lOHy36AjhIv3MCZJnQ3ZZaWL7p8l01cDeIL3C1OOhVumVr-_tlrjo_-2BE3-H9YVYusT6jcv63vUdMmfVkEWxktq-DzCjJ10WhP-s3r6psqhK8Pw8kmhqpW=w759-h1011-s-no-gm?authuser=0",
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
      "https://lh3.googleusercontent.com/pw/AP1GczN0glhEGnxHfTlMQRvoFe_r5dVGy36RXEQARR9XN2WQReJz3g9cHKWVhBhgeGD49z9SRFXwjqNLytQYNbqDObCZliXJTdQLn_OCTiVHjnOin-FboetLdXblQAbkhrO18T-XqO4akeez7J1fPl1DwMNU=w759-h1011-s-no-gm?authuser=0",
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
      "https://lh3.googleusercontent.com/pw/AP1GczMPCMBHrQ_2PcMS4Zxx5XxSp11ssE5hBsLo1GKJ2LQfxV6h0eSEpsUd686CAAf3RbD0RUszMW7smLxawuxg8ry8Rz9BWZnktJqDo5DpvBLEURiPrG2T2tQRxUjeOKqWoy741Zm4NxPUP_AYWeUOfc1I=w759-h1011-s-no-gm?authuser=0",
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
