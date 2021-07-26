const homePage = () => {
  const heading = document.createElement("h2");
  heading.className = "nav  pb-2";
  heading.innerHTML += "<h5 class='Tanzila's Cafe</h5>";

  const about = document.createElement("div");
  about.classname = "about";
  const subheadOne = document.createElement("h3");
  about.appendChild("subheadOne");

  const aboutPara = document.createElement("p");
  aboutPara.className = "about-paragraph";
  aboutPara.innerText = "Welcome to the home of traditional homemade pies.The Tanzila's Cafe in Johannesburg  has been our home since 2010 and has been at the centre of the community ever since. In that time, we've found a way of doing things that has won the hearts of thousands of pie-eaters. That’s why we stick to what we’re good at, with our secret recipes and cooking methods, our prime cuts of meat and our specially-blended pastry."
  about.appendChild('aboutPara')

  const hours = document.createElement("div");
  about.classname = "hours";
  const subheadTwo = document.createElement("h3");
  subheadTwo.innerText = 'Hours'
  about.appendChild("subheadTwo");

  const hoursPara = document.createElement("p");
  hoursPara.className = "about-paragraph";
  about.appendChild("hoursPara");
  



  const location = document.createElement("div");
  about.classname = "location";
  const subheadThree = document.createElement("h3");
  subheadThree.innerText = "Contact";
  about.appendChild("subheadThree");

  const contactPara = document.createElement("p");
  contactPara.className = "about-paragraph";
  about.appendChild("contactPara");
}

export default homePage;