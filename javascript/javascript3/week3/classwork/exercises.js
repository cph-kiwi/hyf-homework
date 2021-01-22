class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    const fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  }

  changeFirstName(newFirstName) {
    this.firstName = newFirstName;
  }

  sayHi() {
    setTimeout(
      () => console.log(`How are you, ${this.firstName} ${this.lastName}?`),
      2000
    );
  }
}

const user = new User("Beth", "Jackson");
// console.log(user);
// console.log(user.firstName);
// console.log(user.getFullName());
// user.changeFirstName("Lisa");
// console.log(user.getFullName());
// user.sayHi();

class CV {
  constructor(email) {
    this.jobs = [];
    this.educations = [];
    this.email = email;
  }

  addJob(job) {
    this.jobs.push(job);
  }

  // filter returns a new array, whereas here I want to modify the original - hence I've used a loop and splice
  removeJob(job) {
    for (let i = 0; i < this.jobs.length; i++) {
      if (this.jobs[i] === job) {
        this.jobs.splice(i, 1);
      }
    }
    // Another way to do this:
    // this.jobs = this.jobs.filter((currentjob) => currentjob.id !== job.id);
  }

  addEducation(education) {
    this.educations.push(education);
  }

  removeEducation(education) {
    for (var i = 0; i < this.educations.length; i++) {
      if (this.educations[i] === education) {
        this.educations.splice(i, 1);
      }
    }
    // Another way to do this:
    // this.educations = this.educations.filter((currentEducation) => currentEducation.id !== education.id);
  }

  renderCV() {
    const bodyElement = document.querySelector("body");
    const pElement = document.createElement("p");
    pElement.textContent = `${this.email}`;
    bodyElement.appendChild(pElement);

    const jobsH2Element = document.createElement("h2");
    jobsH2Element.textContent = "Jobs";
    bodyElement.appendChild(jobsH2Element);

    const jobsUlElement = document.createElement("ul");
    this.jobs.forEach((job) => {
      const liElement = document.createElement("li");
      liElement.classList.add("list-item");
      liElement.textContent = `Title: ${job.title}
        Description: ${job.description}
        Start date: ${new Intl.DateTimeFormat("en-GB").format(job.startDate)}
        End date: ${new Intl.DateTimeFormat("en-GB").format(job.endDate)}`;
      jobsUlElement.appendChild(liElement);
    });
    bodyElement.appendChild(jobsUlElement);

    const educationsH2Element = document.createElement("h2");
    educationsH2Element.textContent = "Education";
    bodyElement.appendChild(educationsH2Element);

    const educationsUlElement = document.createElement("ul");
    this.educations.forEach((education) => {
      const liElement = document.createElement("li");
      liElement.classList.add("list-item");
      liElement.textContent = `Title: ${education.title}
        School: ${education.school}
        Address: ${education.address}
        Start date: ${new Intl.DateTimeFormat("en-GB").format(
          education.startDate
        )}
        End date: ${new Intl.DateTimeFormat("en-GB").format(
          education.endDate
        )}`;
      educationsUlElement.appendChild(liElement);
    });

    bodyElement.appendChild(educationsUlElement);
  }
}

class Job {
  constructor(id, title, description, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
  }
}

class Education {
  constructor(id, title, school, address, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
  }
}

const myCV = new CV("beth.jack@gmail.com");

const archer = new Job(
  "archer",
  "Archer",
  "a person who shoots with a bow and arrows",
  "1105, 01, 01",
  "1109, 12, 31"
);
// console.log(archer.title);
myCV.addJob(archer);

const butcher = new Job(
  "butcher",
  "Butcher",
  "a person who slaughters and cuts up animals for food",
  "1111, 01, 01",
  "1115, 12, 31"
);
myCV.addJob(butcher);

const chef = new Job(
  "chef",
  "Chef",
  "a professional cook, typically the chief cook in a restaurant or hotel",
  "1117, 01, 01",
  "1120, 12, 31"
);
myCV.addJob(chef);

const knight = new Job(
  "knight",
  "Knight",
  "a man raised by a sovereign to honourable military rank after service as a page and squire",
  "1125, 01, 01",
  "1129, 12, 31"
);
myCV.addJob(knight);

// all jobs added
// console.log(myCV.jobs.map((job) => job.title));

myCV.removeJob(chef);

// after chef is removed
// console.log(myCV.jobs.map((job) => job.title));

const apprentice = new Education(
  "apprentice",
  "Apprentice",
  "School for Apprentices Who Want To Become Butchers",
  "12 London Way, London, England",
  "1110, 01, 01",
  "1110, 12, 31"
);
myCV.addEducation(apprentice);

const squire = new Education(
  "squire",
  "Squire",
  "School for Squires Who Want To Become Knights",
  "1 London Way, London, England",
  "1121, 01, 01",
  "1124, 12, 31"
);
myCV.addEducation(squire);

const dishwasher = new Education(
  "dishwasher",
  "Dishwasher",
  "School for Dishwashers Who Want To Become Chefs",
  "40 London Way, London, England",
  "1116, 01, 01",
  "1116, 12, 31"
);
myCV.addEducation(dishwasher);

// all educations added
// console.log(myCV.educations.map((education) => education.title));

myCV.removeEducation(dishwasher);

// after diswasher is removed
// console.log(myCV.educations.map((education) => education.title));

myCV.renderCV();
