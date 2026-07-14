let myPhoneNumber = "9235945511"
// console.log(myPhoneNumber)

let msg = "Hey Rishabh, I want to connect with you via What's App. I'm, <YOURNAME_HERE> and I want to discuss <TOPIC_HERE> , Thank you."
// console.log(window.btoa(msg))

// msg = window.btoa(msg)

// // // Both are predefined in javasript -------->
// // // window.btoa()  ==> str to encoded
// // // window.atoa()  ==> encoded to str

// const personalLinksDataArr = []

const personalLinksDataArr = [
    {
        id: "1",
        siteName: "Instagram",
        logo: "instagram",
        clickAble: "https://www.instagram.com/its_me_rishab_pandey?igsh=MW0zbmk0YWE3djUzbQ==",
        userId: "its_me_rishab_pandey",
    },
    {
        id: "2",
        siteName: "Twitter [X]",
        logo: "twitter",
        clickAble: "https://x.com/PandeyRish96668",
        userId: "@PandeyRish96668",
    },

    {
        id: "3",
        siteName: "Linkedin",
        logo: "linkedin-box",
        clickAble: "https://www.linkedin.com/in/rishabh-panday-29010032a",
        userId: "Rishabh Panday",
    },
    {
        id: "4",
        siteName: "Gmail",
        logo: "mail",
        // clickAble:"https://mail.google.com/mail/?view=cm&source=mailto&to=ashishkuldeep6@gmail.com",
        clickAble: `https://www.rishabhpamdey9455@gmail.com=${msg}&bcc=ashishkuldeep6@gmail.com&fs=1&tf=cm`,
        userId: "rishabhpamdey9455@gmail.com",
    },
    {
        id: "5",
        siteName: "YouTube",
        logo: "youtube",
        // clickAble:"https://mail.google.com/mail/?view=cm&source=mailto&to=ashishkuldeep6@gmail.com",
        clickAble: "https://www.youtube.com/@Rishabh-pandey970",
        userId: "@Rishabh-pandey970",
    },
    {
        id: "6",
        siteName: "What's App",
        logo: "whatsapp",
        // clickAble:"https://mail.google.com/mail/?view=cm&source=mailto&to=ashishkuldeep6@gmail.com",
        clickAble: `https://wa.me/${myPhoneNumber}?text=${msg}`,
        userId: "+91 9235945511",
    },
    {
        id: "7",
        siteName: "Snapchat",
        logo: "snapchat",
        // clickAble:"https://mail.google.com/mail/?view=cm&source=mailto&to=ashishkuldeep6@gmail.com",
        clickAble: "https://www.snapchat.com/add/rishabh20243321?share_id=NfccFLHVPYs&locale=en-GB",
        userId: "rishabh20243321",
    },
    {
        id: "8",
        siteName: "Professional Card",
        logo: "profile",
        clickAble: "#",
        userId: "professional card",
    },
];


export default personalLinksDataArr