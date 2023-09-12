const handleClick = () => {
  let nav = document.getElementById("toggle-nav");
  let item = document.getElementById("items");

  if (String(nav.classList.value).indexOf("toggle-active") !== -1) {
    //remove active class
    nav.classList.remove("toggle-active");
    nav.classList.add("toggle-close");
    item.classList.add("hidden");
    console.log(nav.classList.value);
  } else {
    // add active and remove close classes after a delay of 50ms to avoid animation gl
    nav.classList.remove("toggle-close");
    nav.classList.add("toggle-active");
    setTimeout(() => {
      item.classList.remove("hidden");
    }, 200);
    console.log(nav.classList.value);
  }
};

let project_list = [
  {
    name: "Book Store",
    desc: "A simple book store website built using React.js and Python 'Flask' for API and handles using DevOps.",
    tech: ["web Design", "DevOps", "React.js", "Python"],
    imgUrl: "/images/mp1.png",
    link: "https://github.com/JATINKUMAR1008/Book--store.git"
  },
  {
    name: "Music App",
    desc: "A simple Music App website built using React.js and Rapid API for data.",
    tech: ["web Design", "API", "React.js"],
    imgUrl: "/images/music.png",
    link:"https://testing-26912.web.app/"
  },
  {
    name: "Todo App",
    desc: "A simple Todo App website built using React.js and Firebase for data storage and authentication.",
    tech: ["web Design", "Firebase", "React.js"],
    imgUrl: "/images/todo.png",
    link:"https://triluxo-daad9.web.app/"
  },
  {
    name: "Netflix Clone",
    desc: "A simple Clone of Netflix website built using React.js and IMwD API for movie database.",
    tech: ["web Design", "React.js"],
    imgUrl: "/images/netflix.png",
    link:"https://netflix-copy-f52b6.web.app/"
  },
];

const project_Container = document.getElementById("content-pro");
const content = project_list
  .map(
    (value) =>
      `<div class="content-pro">
    <img
      src=${value.imgUrl}
      class="pro-img"
      alt="mp-1"
      loading="lazy"
    />
    <div class="content-text-pro" >
      <div class="pro-text-head">${value.name}</div>
      <div class="content-text-des">
        ${value.desc}
      </div>
      <div class="tech-stk">
      ${value.tech
        .map(
          (value) => `<div class="tec-btn">
      ${value}
    </div>`
        )
        .join("")}
        
        
      </div>
      <div class="pro_link">
        <a href=${value.link} target="_blank class="pro-link">
          Details →
        </a>
      </div>
    </div>
  </div>
`
  )
  .join("");

project_Container.innerHTML = content;

const list = [
  {
    title: "software engineering virtual experience",
    cpy: "JPMorgan Chase & Co.",
    iss: "Issued Jun 2023",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_NASJ5ShvoBW8YFCWP_1687789365087_completion_certificate.pdf",
    imgUrl:
      "https://media.licdn.com/dms/image/C4E0BAQFN7ZGRjNcgeA/company-logo_100_100/0/1656681489088?e=1697673600&v=beta&t=--tvDzKgI2qgI4lXHK8TXX8pAH-OSD9KxzPPBaavE7s",
  },
  {
    title: "aws academy graduate - aws academy cloud foundations",
    cpy: "Amazon Web Services (AWS)",
    iss: "Issued Apr 2023",
    link: "https://www.credly.com/badges/e63fa91e-b921-4f8c-9b76-e3fb14190293/linked_in_profile",
    imgUrl:
      "https://media.licdn.com/dms/image/C560BAQER_QnUTXrPJw/company-logo_100_100/0/1670264050886?e=1697673600&v=beta&t=6aC0OTTBUVT2avH-MuwRFjB_aZje674khG5vMbtHv2Q",
  },
  {
    title: "software engineering virtual experience program",
    cpy: "Goldman Sachs",
    iss: "Issued Mar 2023",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_NASJ5ShvoBW8YFCWP_1679501293655_completion_certificate.pdf",
    imgUrl:
      "https://media.licdn.com/dms/image/C4E0BAQHm5bYK6emQSg/company-logo_100_100/0/1595518030728?e=1697673600&v=beta&t=EgZRXBNC5la0NBA00-WHC3KcohwNmXj-PKhH8C3VR2A",
  },
  {
    title: "virtual Experience Program Participants",
    cpy: "Cognizant",
    iss: "Issued Mar 2023",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant%20USA/ZZswQd6xGydd758vz_Cognizant%20USA_NASJ5ShvoBW8YFCWP_1679499817362_completion_certificate.pdf",
    imgUrl:
      "https://media.licdn.com/dms/image/D4E0BAQHDKo68h6DqgQ/company-logo_100_100/0/1688389916667?e=1697673600&v=beta&t=enUfhJwl4szv65wR6OKOPnkiAFwGy87-37SMy9Njb_I",
  },
  {
    title: "NDG Linux Unhatched",
    cpy: "Cisco",
    iss: "Issued Jan 2023",
    link: "https://drive.google.com/file/d/1oAti7UO1V6tNDK8rzrd0K7Bzqu_RuHLQ/view",
    imgUrl:
      "https://media.licdn.com/dms/image/D560BAQFVQnYFvzs9jw/company-logo_100_100/0/1688482473599?e=1697673600&v=beta&t=npdaiCPFl2f6h_YGHbPsRmUAEGoAXYe5LtPmmUuEWuU",
  },
  {
    title: "Cisco Networking Essentials",
    cpy: "Cisco",
    iss: "Issued Dec 2022",
    link: "https://drive.google.com/file/d/1ux3pgtoWwhJFrMUzRORA6kEaQHgNTOHX/view",
    imgUrl:
      "https://media.licdn.com/dms/image/D560BAQFVQnYFvzs9jw/company-logo_100_100/0/1688482473599?e=1697673600&v=beta&t=npdaiCPFl2f6h_YGHbPsRmUAEGoAXYe5LtPmmUuEWuU",
  },
];


const conatiner = document.getElementById('edu-cont')

const Pcontent = list.map(value=>
    `
    <div class="edu-item">
                    <img class="edu_img" src=${value.imgUrl}>
                        <div class="edu-text">
                            <span class="i-name">
                                ${value.title}
                            </span>
                            <span class="i-course">
                                ${value.cpy}
                            </span>
                            <span class="i-year">
                                ${value.iss}
                            </span>
                            <span class="i-link">
                                <a href=${value.link} target="_blank" class="i-link">
                                    Verification Link →
                                </a>
                            </span>
                            
                        </div>
                </div>
    `).join("")

conatiner.innerHTML=Pcontent

/*fetch("https://64b69302df0839c97e15cdf1.mockapi.io/api/v1/articles").then((res)=>{
 return res.json()
}).then((data)=>{
  console.log(data)
  const article = document.getElementById("article-content");

const content = data
  .map(
    (value) =>
      `<h3 class="art-ct-heading" id="art-ct-heading">
    ${value.title}
  </h3>
  <div class="tec-btn">
    ${value["tech"]}
  </div>
  <div class="post-date-time">
    <span class="p-date">
      ${value["date"]}
    </span>/
    <span class="r-time">
      ${value["read"]}
    </span>
  </div>
  <div class="art-cont">
    <p>${value["desc"]}</p>
  </div>
  <a href="" class="read-btn"> Read Article →</a>
  
  <div class="seprater"></div>`
  )
  .join("");
article.innerHTML = content;
})*/



const copy = document.getElementById("copy");
const year = new Date().getFullYear();
const copy_cont = `© ${year} Jatin Kumar.`;
copy.textContent = copy_cont;



//nav
