import { sanityUrl } from "./env.js";
import { readUrl } from "./utils.js";
import { handleParagraphs } from "./utils.js";

const urlString = readUrl();

const queryAllProjects = `
*[_type == "skill"]{
    _id,
    skill,
    "logo": logo.asset->url,
  }
`;

const queryProjectsGalleri = `
*[_type == "project"]{
    "mainImage": mainImage.asset->url,
    tools,
    slug,
    body,
    title,
}
`;

async function getProjectGalleri() {
  const response = await fetch(
    `${sanityUrl}${encodeURI(queryProjectsGalleri)}`
  );
  const { result } = await response.json();
}
getProjectGalleri();

async function getGalleri() {
  const response = await fetch(
    `${sanityUrl}${encodeURI(queryProjectsGalleri)}`
  );
  const { result } = await response.json();

  const projectsEl = document.querySelector(".gallery-cards");

  result.forEach((project) => {
    const cardEl = document.createElement("a");
    cardEl.classList.add("flex");
    cardEl.classList.add("galleri-container");
    cardEl.classList.add("grow-rotate-on-hover");
    cardEl.setAttribute("href", `/projects/?${project.slug.current}`);

    const cardImgEl = document.createElement("img");
    cardImgEl.setAttribute("src", project.mainImage);
    cardImgEl.setAttribute(
      "style",
      "width: 208px; height: 144px; object-fit: cover;"
    );
    cardEl.append(cardImgEl);
    projectsEl.append(cardEl);
  });
}

getGalleri();






/* result - title not working*/
async function renderSingelProject() {
  const response = await fetch(
    `${sanityUrl}${encodeURI(queryProjectsGalleri)}`
  );
  const { result } = await response.json();
  console.log(result);

  const titleEl = document.querySelector(".project-title");

  handleParagraphs(result[0].process, "processContent");
  handleParagraphs(result[0].coreproblem, "core-problem");
}








renderSingelProject();

async function getAllProject() {
  const response = await fetch(`${sanityUrl}${encodeURI(queryAllProjects)}`);
  const { result } = await response.json();

  const projectsEl = document.querySelector(".slideshow-container");

  result.forEach((project) => {
    const cardEl = document.createElement("div");
    cardEl.classList.add("mySlides");
    cardEl.classList.add("fade");

    const cardImgEl = document.createElement("img");
    cardImgEl.setAttribute("src", project.logo);
    cardImgEl.setAttribute("style", "width: 64px", "margin-right: 32px");
    cardEl.append(cardImgEl);
    projectsEl.append(cardEl);
  });
}

/* minimerer api request */
if (urlString === undefined) {
  getAllProject();
}

const querySingleProject = `
  *[slug.current == "${urlString}"]{
    title,
    "mainImage": mainImage.asset->url,
    link,
    "logo": logo.asset->url,
    body,
    publishedAt,
  }
`;

async function getProject() {
  const response = await fetch(`${sanityUrl}${encodeURI(querySingleProject)}`);
  const { result } = await response.json();

  const coverEl = document.querySelector(".cover-project");
  coverEl.setAttribute("src", result[0].mainImage);
  const projectTitleEl = document.querySelector(".project-title");
  projectTitleEl.classList.add("hind");
  projectTitleEl.textContent = result[0].title;

  console.log(result[0].body);
  handleParagraphs(result[0].body, "cover-p");
}

function renderSingleProject(result) {
  const titleEl = document.querySelector(".single-project__title");
  titleEl.textContent = result[0].title;
  const coverProjectEl = document.querySelector(".project__cover");
  coverProjectEl.setAttribute("src", result[0].cover);

  handleParagraphs(result[0].process, "processContent");
  handleParagraphs(result[0].coreproblem, "core-problem");
}

if (urlString !== undefined) {
  getProject();
}
