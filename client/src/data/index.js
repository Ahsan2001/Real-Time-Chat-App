

export const SampleChat = [
    
    {
        avatar : ["https://www.w3schools.com/howto/img_avatar2.png"],
        name : "Ahsan",
        _id : "1",
        groupChat : false,
        members : ["1","2"],
    },

    {
        avatar : ["https://www.w3schools.com/howto/img_avatar2.png"],
        name : "Talha",
        _id : "2",
        groupChat : true,
        members : ["1","2"],
    },
]

export const SampleUser = [
    {
        avatar : ["https://www.w3schools.com/howto/img_avatar2.png"],
        name : "Ahsan",
        _id : "1",
    },


    {
        avatar : ["https://www.w3schools.com/howto/img_avatar2.png"],
        name : "Zeeshan",
        _id : "2",
    },
]


export const SampleNotifications = [
    {
        sender: {
            avatar : ["https://www.w3schools.com/howto/img_avatar2.png"],
            name : "Ahsan", 
        },
        _id : "1",
    },
    {
        sender: {
            avatar : ["https://www.w3schools.com/howto/img_avatar2.png"],
            name : "Zeeshan", 
        },
        _id : "2",
    }, 
]



export const SampleMessages = [
    {
        attachments: [ 
            {
                public_id: "asdfghh",
                url: "https://www.w3schools.com/howto/img_avatar2.png"
            }
        ],
        content : "Hello mister how are you",
        _id: "112512516qwdq51qfawf",
        sender : {
            name: "Ahsan",
            _id: "user._id"
        },
        chat: "chatid1",
        createdAt: "2022-03-28T10:43:00.000Z",

    },
    {
        attachments: [ 
            {
                public_id: "asdfghh",
                url: "https://www.w3schools.com/howto/img_avatar2.png"
            }
        ],
        content : "Fine hoo YAAAAAA",
        _id: "112512516qwdq51qfawf",
        sender : {
            name: "Zeesahn",
            _id: "akjsdkhayufg"
        },
        chat: "chatid1",
        createdAt: "2022-03-28T10:43:00.000Z",

    }
]  


