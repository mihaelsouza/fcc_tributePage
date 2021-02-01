const cardData = {
  card1: {
    A: {
      src: "media/card1A.jpg",
      alt: "Drawing of people using face masks adorned with various country flags.",
      cc0: '<span class="cc0">Photo by <a target="_blank" href="https://unsplash.com/@ashkfor121?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ashkan Forouzani</a> on <a target="_blank" href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span><br><br>',
      text: "Body language has always been a huge part of social interactions, and facial expressions even more so. You could somewhat tell when someone was happy, angry or amused, and if necessary course correct. People say that the eyes are the window for the soul. If that is the case, the face is the whole wall and you can see even the paint chips."
    },
    B: {
      src: "media/card1B.jpg",
      alt: "",
      cc0: '<span class="cc0">Made available by the United Nations</span>',
      text: ""
    },
    state: "A"
  },
  card2: {
    A: {
      src: "media/card2A.jpg",
      alt: "Company employees discussing strategy in a meeting room.",
      cc0: '<span class="cc0">Photo by <a target="_blank" href="https://unsplash.com/@youxventures?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">You X Ventures</a> on <a target="_blank" href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span><br><br>',
      text: "Typical office day. Endless meetings and noise around the cubicles while you are trying to hammer away that last deliverable before the end of day deadline. You have already heard about the latest office gossip through the grapevine and Carol told you about that amazing weekend she is planning around the watercooler while overhearing Bob talk about last night's game. At this point, all you can think about is getting home..."
    },
    B: {
      src: "media/card2B.jpg",
      alt: "",
      cc0: '<span>Photo by <a href="https://unsplash.com/@cwmonty?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Chris Montgomery</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span><br><br>',
      text: ""
    },
    state: "A"
  },
  card3: {
    A: {
      src: "media/card3A.jpg",
      alt: "Bustling city street at night with shops and stalls.",
      cc0: '<span class="cc0">Photo by <a target="_blank" href="https://unsplash.com/@keepsakes_and_daydreams?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Steven Skerritt</a> on <a target="_blank" href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span><br><br>',
      text: "Friday night! Time to get fancy, put on your best clothes and join your friends for a night in the town. All you're looking for is cold beer or maybe a smooth drink with some good music. Oh, and definitely that huge $2 hotdog dripping in sauce that you can get by the gas station at the end of the evening. Because, you know, Mike is such a nice guy!"
    },
    B: {
      src: "media/card3B.jpg",
      alt: "",
      cc0: '<span>Photo by <a href="https://unsplash.com/@andyadcon?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">De an Sun</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span><br><br>',
      text: ""
    },
    state: "A"
  },
  card4: {
    A: {
      src: "media/card4A.jpg",
      alt: "New York City Central Station with a lot of people walking around.",
      cc0: '<span class="cc0">Photo by <a target="_blank" href="https://unsplash.com/@jackofallstreets?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jack Finnigan</a> on <a target="_blank" href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span><br><br>',
      text: "You've been planning this the whole year, after finally getting that vacation request approved. Time to enjoy some Mai Tais by a beach somewhere, or go skiing in the mountains. Of course, you have to get there first. And so you muster all your inner peace to brave the train station/airport crowds..."
    },
    B: {
      src: "media/card4B.jpg",
      alt: "",
      cc0: '<span>Photo by <a href="https://unsplash.com/@apollo_y?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">A P O L L O</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span><br><br>',
      text: ""
    },
    state: "A"
  },
  card5: {
    A: {
      src: "media/card5A.jpg",
      alt: "Family and friends gathered together at the beach watching the sunset.",
      cc0: '<span class="cc0">Photo by <a target="_blank" href="https://unsplash.com/@jtylernix?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Tyler Nix</a> on <a target="_blank" href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span><br><br>',
      text: "It's finally Christmas! Or the New Year?! ...Maybe Thanksgiving? Okay, definitely Earth Day! No matter, you are just looking forward to eating nana May's cobbler or aunt Mary's cherry pie. Just ready to enjoy some peaceful family time. (Okay, not always peaceful...)"
    },
    B: {
      src: "media/card5B.jpg",
      alt: "",
      cc0: '<span>Photo by <a href="https://unsplash.com/@jonathanborba?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jonathan Borba</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span><br><br>',
      text: ""
    },
    state: "A"
  }
};

var fillContentInDiv = function (cardData, divName) {
  let data = cardData[divName][cardData[divName]['state']];
  var figure = document.createElement('figure');
  var image = document.createElement('img');
  var figcaption = document.createElement('figcaption');
  var paragraph = document.createElement('p');

  // Set the necessary id for the first figure to pass the test units in freeCodeCamp
  divName === 'card1' ? figure.id = 'img-div' : {};
  divName === 'card1' ? image.id = 'image' : {};
  divName === 'card1' ? figcaption.id = 'img-caption' : {};

  // Set the necessary attributes in image to style and give content to the tag
  image.classList.add('image');
  image.src = data['src'];
  image.alt = data['alt'];
  figure.appendChild(image);

  // Add copyright information to the figcaption
  figcaption.classList.add('fig-caption');
  figcaption.innerHTML = data['cc0'].trim();
  figure.appendChild(figcaption);

  // Add the textual content to the paragraph
  paragraph.classList.add('tribute-text');
  paragraph.innerText = data['text'];

  // Add these elements to the correct div, based on divName
  document.getElementById(divName).appendChild(figure);
  document.getElementById(divName).appendChild(paragraph);

  // Change the active state
  //data['state'] === "A" ? data['state'] = 'B' : data['state'] = 'A';
}

document.addEventListener('DOMContentLoaded', function () {
  for (i=1; i<6; i++) {
    fillContentInDiv(cardData, `card${i}`);
  }
}, false);