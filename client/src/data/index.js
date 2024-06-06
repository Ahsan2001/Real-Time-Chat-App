

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
        // attachments: [ 
        //     {
        //         public_id: "asdfghh",
        //         url: "https://www.w3schools.com/howto/img_avatar2.png"
        //     }
        // ],
        content : "picture bhj bhai",
        _id: "112512516qwdq51qfawf",
        sender : {
            name: "Ahsan",
            _id: "user._id"
        },
        chat: "chatid1",
        createdAt: "2024-06-06T10:13:00.000Z",

    },
    {
        attachments: [ 
            {
                public_id: "asdfghh",
                url: "https://www.w3schools.com/howto/img_avatar2.png"
            }
        ],
        // content : "Fine hoo YAAAAAA",
        _id: "112512516qwdq51qfawf",
        sender : {
            name: "Zeesahn",
            _id: "akjsdkhayufg"
        },
        chat: "chatid1",
        createdAt: "2024-06-06T10:00:00.000Z",

    },
    {
        // attachments: [ 
        //     {
        //         public_id: "asdfghh",
        //         url: "https://www.w3schools.com/howto/img_avatar2.png"
        //     }
        // ],
        content : "ja esh kar",
        _id: "112512516qwdq51qfawf",
        sender : {
            name: "Zeesahn",
            _id: "akjsdkhayufg"
        },
        chat: "chatid1",
        createdAt: "2024-06-06T10:00:00.000Z",

    }
]  


