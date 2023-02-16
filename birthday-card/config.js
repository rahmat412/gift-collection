// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Give it to me", //Here, the last comma at the end of each sentence must be in English!! Very important!!
        "Dear girl", // ditto...
        "Today is your birthday",
        "This is what we are together",
        "23rd birthday!",
        "yeayy",
        "strange look",
        "cute look",
        "look angry",
        "It's all the way I like it",
        "By the way, have you received all the gifts?",
        "Eat well this year",
        "feed full",
        "Happy birthday~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Give it to me": "./imgs/1.jpg",
        "Dear girl": "./imgs/2.jpg",
        "Today is your birthday": "./imgs/3.jpg",
        "This is what we are together": "./imgs/4.jpg",
        "23rd birthday!": "./imgs/5.jpg",
        "In the past two years, I have seen you": "./imgs/6.jpg",
        "Strange look": "./imgs/7.jpg",
        "Cute look": "./imgs/8.jpg",
        "Angry look": "./imgs/9.jpg",
        "It's all the way I like it": "./imgs/10.jpg",
        "By the way, have you received all the gifts?": "./imgs/13.jpg",
        "Eat well this year": "./imgs/12.jpg",
        "feed full": "./imgs/14.jpg",
        "Happy Birthday~~": "./imgs/11.jpg"
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Click me to start",
        play: "Play Music",
        bannar_coming: "Kok ada yg kurang ya",
        balloons_flying: "Yeayyy, Selamat Ulang Tahun yg ke-23 ya",
        cake_fadein: "Kuenya mana?",
        light_candle: "Ini lilinnya juga mana?",
        wish_message: "Make a Wish",
        story: "A MESSAGE FOR YOU"
    },

    // 结束语
    loveText: 'LOVE YOU, THASYA'
};
