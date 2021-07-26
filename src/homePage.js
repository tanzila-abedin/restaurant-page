const homePage = () => {
  const homeContainer = document.createElement('div')

  const heading = document.createElement("h2");
  heading.className = "nav  pb-2";
  heading.innerText = "Tanzila's Cafe";
  homeContainer.appendChild(heading)

  const about = document.createElement("div");
  about.classname = "about";
  const subheadOne = document.createElement("h3");
  subheadOne.innerText = "About";
  about.appendChild(subheadOne);
  homeContainer.appendChild(about)

  const aboutPara = document.createElement("p");
  aboutPara.className = "about-paragraph";
  aboutPara.innerText = "Welcome to the home of traditional homemade pies.The Tanzila's Cafe in Johannesburg  has been our home since 2010 and has been at the centre of the community ever since. In that time, we've found a way of doing things that has won the hearts of thousands of pie-eaters. That’s why we stick to what we’re good at, with our secret recipes and cooking methods, our prime cuts of meat and our specially-blended pastry."
  about.appendChild(aboutPara)

  const hours = document.createElement("div");
  about.classname = "hours";
  const subheadTwo = document.createElement("h3");
  subheadTwo.innerText = 'Hours'
  hours.appendChild(subheadTwo);
  homeContainer.appendChild(hours);

  const hoursPara = document.createElement("p");
  hoursPara.className = "about-paragraph";
  hoursPara.innerText = "Sunday: 8am - 8pm";
  hours.appendChild(hoursPara);
  
  const location = document.createElement("div");
  location.classname = "location";
  const subheadThree = document.createElement("h3");
  subheadThree.innerText = "Location";
  location.appendChild(subheadThree);
  homeContainer.appendChild(location);

  const locationPara = document.createElement("p");
  locationPara.className = "about-paragraph";
  locationPara.innerText = "123 Forest Drive, Forestville, Maine";
  location.appendChild(locationPara);

  return homeContainer
}

export default homePage;