

document.addEventListener("DOMContentLoaded", function (){
const commentForm = document.querySelector(".form-comment");
const commentList = document.querySelector(".comments-list");
const COMMENT_LIMIT = 40;
const REPLY_LIMIT = 30;

commentForm.addEventListener("submit", function (event){
event.preventDefault();

const name = document.querySelector(".nme").value.trim();
const email = document.querySelector(".emil").value.trim();
const message = document.querySelector(".textarea").value.trim();

if(name === "" || email === "" || message === ""){
    alert("Please fill in all fields before your submitting!");
    return;
}

if(message.length > COMMENT_LIMIT) {
    alert(`Comment must be ${COMMENT_LIMIT} characters or less.`);
    return;
}


const emailHash = CryptoJS.MD5(email.trim().toLowerCase()).toString(CryptoJS.enc.Hex);
const avatarUrl = `https://www.gravatar.com/avatar/${emailHash}?s=200&d=identicon`;



const date = new Date();
const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })}, ${date.getFullYear()}`;



const commentBox = document.createElement("div");
commentBox.classList.add("comment-box", "teal");
commentBox.innerHTML = `<img src = "${avatarUrl}" alt="User Avatar" class="avatar">
<div>
<p class="comment-user">${name}<span class="comment-date"> - ${formattedDate}</span></p>
<p class="comment-text">${message}</p>
<button class="reply-btn">Reply</button>
<button class="react-btn">👍</button>
<span class="like-count">0</span>
<button class="reactt-btn">❤️</button>
<span class="heart-count">0</span>
<div class="reply-form" style="display:none;">
<textarea rows="2" placeholder="Write a reply....(Max ${REPLY_LIMIT} chars)"></textarea>
<button class="submit-reply">Send Reply</button>
</div>
</div>
`;
commentList.prepend(commentBox);
commentForm.reset();

const replyButton = commentBox.querySelector(".reply-btn");
const replyForm = commentBox.querySelector(".reply-form");
const submitReplyButton = commentBox.querySelector(".submit-reply");

replyButton.addEventListener("click", function(event){
 replyForm.style.display = replyForm.style.display === "none" ? "block" : "none";
});
submitReplyButton.addEventListener("click", function(event){
    event.preventDefault();

    const  replyMessage = replyForm.querySelector("textarea").value.trim();
    
    if (replyMessage === "") {
        alert("Please enter a reply before submitting.");
        return;
    }
    if (replyMessage.length > REPLY_LIMIT){
        alert(`Reply must be ${REPLY_LIMIT} chracters or less.`);
    }
    const replyBox = document.createElement("div");
    replyBox.classList.add("reply-box");
    replyBox.innerHTML = `<p><strong>${name}:</strong> ${replyMessage}</p>`;

   commentBox.appendChild(replyBox);
   replyForm.querySelector("textarea").value = "";
   replyForm.style.display = "none";
});
const reactButton = commentBox.querySelector(".react-btn");
const likeCount = commentBox.querySelector(".like-count");
const reacttButton = commentBox.querySelector(".reactt-btn");
const heartCount = commentBox.querySelector(".heart-count");

reactButton.addEventListener("click", function (){
    let currentLikes =  parseInt(likeCount.textContent);
    likeCount.textContent = currentLikes + 1;
});

reacttButton.addEventListener("click", function (){
    let currentHeart = parseInt(heartCount.textContent);
    heartCount.textContent = currentHeart + 1;
});


});
});
document.addEventListener("DOMContentLoaded", function (){
    function isElementInView(element){
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }
    window.addEventListener("scroll", function () {
        const recipeSection = document.querySelector(".recipey");
        const footeerSection = document.querySelector(".footeer");  
        const containerrrSection = document.querySelector(".containerrr"); 

        
        if (isElementInView(recipeSection)){
            recipeSection.classList.add("visible");
        }
       
        if (isElementInView(footeerSection)) {
            footeerSection.classList.add("visible");
        }

        if (isElementInView(containerrrSection)) {
            containerrrSection.classList.add("visible");
        }

    });

    window.dispatchEvent(new Event('scroll'));
});
function toggleContent(){
    alert("Hello!scribe my site!");
    var container = document.querySelector('.containeaer');
    var aside = document.querySelector('.sidebar');
    var button = document.querySelector('.view-more-btn');

    if (container.style.display === "none" || container.style.display === ""){
        container.style.display = "flex";
        aside.style.display = "block";
        button.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", function (){
    const chatBtn = document.getElementById("chat-btn");
    const chatBox = document.getElementById("chat-box");
    const closeBtn = document.getElementById("close-btn");
    const sendBtn = document.getElementById("send-btn");
    const chatInput = document.getElementById("chat-input");
    const chatBody = document.querySelector(".chat-body");
    const signupBtn = document.getElementById("signup-btn");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    chatBtn.style.display = "none";
    chatBox.style.display = "none";

    signupBtn.addEventListener("click", function (event) {
        event.preventDefault();
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name && emailPattern.test(email)) {
            chatBtn.style.display = "block";
            alert("Signup Successful! You can chat now with Us.");
        } else {
            alert("Please enter a valid name and email!!");
        }
    });

    chatBtn.addEventListener("click", function (){
        chatBox.style.display = "block";
        chatBtn.style.display = "none";
    });
    closeBtn.addEventListener("click", function (){
        chatBox.style.display = "none";
        chatBtn.style.display = "block";
    });
    sendBtn.addEventListener("click", function (event){
        sendMessage();
    });
    
    chatInput.addEventListener("keypress", function (event){
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    });

    function sendMessage() {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            chatBody.innerHTML += `<div class="user-message"><p>${userMessage}</p></div>`;
            chatInput.value = "";
            
            setTimeout(function (){
            chatBody.innerHTML += `<div class="bot-message"><p>Bot: I'm here to help! How can I assist you?</p></div>`;
            chatBody.scrollTop = chatBody.scrollHeight;
            }, 1000);
        }
    }
    document.addEventListener("click", function (event){
        if (!chatBox.contains(event.target) && event.target !== chatBtn) {
            if (chatBox.style.display === "block"){
                chatBox.style.display = "none";
                chatBtn.style.display = "block";
            }
        }
    });
});