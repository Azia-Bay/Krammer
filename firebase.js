// Handles states and state changes
const Pages = {
  LandingPage: 0,
  Login: 1,
  Tags: 2,
  AddDescription: 3,
  MentorHomePage: 4,
  StudentHomePage: 5,
  MentorsFound: 6,
  MessagingPage: 7,
  ViewMentorProfile: 8,
  YourProfile: 9
};

const Navigation = {
  NotSignedIn: 0,
  SignedIn: 1,
  Registering: 2
};

var navigation = document.querySelector("nav");
var currentPage;
var currentNavigation;
changePage(Pages.LandingPage);

function changePage(newPage) {
  currentPage = newPage;
  // Loads and unload navigation
  switch(newPage) {
    case Pages.Tags:
    case Pages.AddDescription:
      currentNavigation = Navigation.Registering;
      break;
    case Pages.LandingPage:
    case Pages.Login:
      currentNavigation = Navigation.NotSignedIn;
      break;
    default:
      currentNavigation = Navigation.SignedIn;
  }
  updateNavigation();
  // Loads and unload page
  switch(newPage) {
    case Pages.MentorHomePage: updateMentorHomePage(); break;
    default:
  }
}

// Updates navigation
function updateNavigation() {
  // Clears navigation
  navigation.innerHTML = "<a href=\"#\">Krammer</a>\n<!-- Dynamic -->";
  // Navigation should be clear
  if(currentNavigation == Navigation.Registering) return;
  // Navigation should have a button
  else if(currentNavigation == Navigation.NotSignedIn) {
    var button = document.createElement("button");
    button.type = "button";
    button.style.alignSelf = "center";
    button.style.background = "#D9D9D9";
    button.style.borderRadius = ".76vw";
    button.style.border = "none";
    button.style.fontSize = "36px";
    button.style.fontWeight = "400";
    button.style.marginLeft = "auto";
    button.style.marginRight = "4.44vw";
    button.style.padding = "1.66vh 1.32vw 1.66vh 1.32vw";
    // Navigation should have a login button
    if(currentPage == Pages.LandingPage) {
      button.innerHTML = button.name = "Log In";
      button.addEventListener("click", () => changePage(Pages.Login));
    }
    // Navigation should have a register button
    else {
      button.innerHTML = button.name = "Sign Up";
      button.addEventListener("click", () => changePage(Pages.LandingPage));
    }
    navigation.appendChild(button);
  }
  // Navigation should have three buttons
  else {
    // TODO
  }
}
