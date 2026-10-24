// src/content.js
const content = {
  music: "/path-to-your-music.mp3",

  menu: {
    title: "pick a gift",
    subtitle: "choose one to open ↓",
    items: [
      { id: "memories", icon: "📸", label: "Captured Memories" },
      { id: "video", icon: "🎬", label: "Our Video" },
      { id: "song", icon: "🎵", label: "our song" },
      { id: "letter", icon: "💌", label: "Love Letter" }
    ]
  },

  song: {
    audioSrc: "/music/music.mp3",
    remindsText: "this song always makes me think of you",
    songTitle: "our song",
    artist: "for you 🎵",
    highlight: "every lyric feels like us 💕",
    title: "our song",
    returnButton: "RETURN"
  },

  // استخدام علامات ` بدل "" يسمح لك بالنزول بالـ Enter مباشرة بدون \n
  letter: {
    title: "a letter",
    message: `كل عيد وانتي اجمل حد في حياتي وأحلى نعمه ربنا رزقني بيها وجودك زي العيد وأيامي كلها تحلو بوجودك انتي مش بس صحبتي واختي وروحي اللي بفرح لفرحها وبزعل لزعلها  مفيش كلام يقدر يوصف قد ايه انا ممتن لوجودك جنبي في كل لحظة قد ايه ضحكتك بتخلي يومي احلى وكلامك بيهون عليا كل حاجه يارب العيد كل الأيام الجايه تكون مليانه فرح وسعاده لبكي وتحققي كل حاجه بتحلمي فيها انا دايما فخور بيكي وبوجودك في حياتي ويارب نفضل سوا العمر كله بحبحك فوق ما اي كلام يقدر يوصفك احبك لطول العمر عييد سعيد وكل سنة وانتي طيبة 🫶🏻❣️💋🎂`,

    signoff: "your love",
    signature: "yours always ♡",
    returnButton: "RETURN"
  },

  memories: {
    title: "our memories",
    images: [
      { src: "/images/placeholder-3.jpg", label: "" },
      { src: "/images/placeholder-4.jpg", label: "" },
      { src: "/images/placeholder-5.jpg", label: "" },
      { src: "/images/placeholder-6.jpg", label: "" },
    ],
    returnButton: "RETURN"
  },

  video: {
    title: "for you",
    videoSrc: "/videos/video.mp4",
    caption: "a little something I put together",
    returnButton: "RETURN"
  }
};

export default content;