import Mailgen from "mailgen";

const  emailVerificationMailgenContent = (username, verfication
)=> {
    return {
        body : {
            name: username ,
            intro: " Welcome to our App ! we'are exacited to have you on board .",
            action: {
                instuction: " to verify your email plese click on the following button ",
                button: {
                    color: "rgba(230, 218, 91, 0.79)",
                    text: " verify your email ",
                    link: verficationUrl,
                }, 
            },
            outro: " Need help , or have question? just reply to this email , w'd love to help  "
        },
    };
};



const  forgotPasswordMailgenContent = (username, passwordResetUrl
)=> {
    return {
        body : {
            name: username ,
            intro: "We got a request to reset  the password of your account  .",
            action: {
                instuction: " To reset your password click on the following button or lik  ",
                button: {
                    color: "rgba(235, 148, 16, 0.79)",
                    text: " reset Password Url  ",
                    link: passwordResetUrl,
                }, 
            },
            outro: " Need help , or have question? just reply to this email , w'd love to help  "
        },
    };
};

export {
    emailVerificationMailgenContent,
     forgotPasswordMailgenContent

}