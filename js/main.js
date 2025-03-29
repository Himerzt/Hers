const contentDiv = document.getElementById('content');
const surpriseBtn = document.getElementById('surpriseBtn');

const data = [
    {
        title: "Tôi kể bạn nghe nhá ",
        text: "Không biết từ bao giờ, tôi đã lỡ thích bạn",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Love_heart_uidaodjsdsew.gif"
    },
    {
        title: "Nhưng mà vẫn là thích bạn",
        text: "Lúc bạn gởi bài post này cho tôi là tôi đã cười mũm mĩm cả ngày",
        image: "../img/img01.png" 
    },
    {
        title: "Lúc trở lại thành phố này",
        text: "Từ lần đó có lẽ trong đầu tôi đã muốn nghĩ tới tương lai của tui với bạn",
        image: "" 
    },
    {
        title: "Nhất là khi đó tôi muốn bạn ôm vào đi là tôi nói thật á",
        text: "Tôi thích bạn nhưng mà không dám nói ra vì sợ, sợ sẽ mất bạn",
        image: ""   
    },
    {
        title: "Nhưng mà tôi quyết định rồi tôi muốn nói ra",
        text: "Tôi thích bạn, thương bạn, muốn ở bên bạn, muốn chăm sóc bạn, muốn đồng hành cùng bạn",
        image: ""
    },
    {
        title: "Cho tôi một cơ hội để chở bạn chậm rãi khi cần",
        text: "Cho tôi một cơ hội để ga lăng hơn với bạn, chăm sóc bạn, yêu thương bạn",
        image: "../img/img02.png"
    },
    {
        title: "Tôi thích bạn",
        text: "Tôi đã do dự, đã ngẫm nghĩ, đã lo lắng, đã sợ hãi, đã nhận xét lại bản thân và nhận ra rằng tôi thực sự thích bạn",
        image: ""
    },
];

function renderContent() {
    data.forEach((item, index) => {
        const section = document.createElement('div');
        section.classList.add('section');
        section.style.animationDelay = `${index * 2.5}s`;

        let imageHtml = item.image ? `<img src="${item.image}" alt="${item.title}" class="section-image">` : '';
        section.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.text}</p>
            ${imageHtml}
        `;
        contentDiv.appendChild(section);
    });

    setTimeout(() => {
        surpriseBtn.style.display = 'block';
    }, data.length * 3000);
}


renderContent();

surpriseBtn.addEventListener('click', () => {
    contentDiv.innerHTML = `<h2>Để mình theo đuổi bạn nha</h2>
        <p>Đồng hành với bạn trên chặn đường sắp tới sẽ là minh chứng rõ nhất cho tình cảm của tui cho bạn</p>
        <p>Yêu nhau nha bạn ơi !</p>`;
    surpriseBtn.style.display = 'none';
    confetti(); 
});


