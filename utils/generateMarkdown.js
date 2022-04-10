// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'GNU APGLv3':
      return `[![License](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]`;
    case 'GNU GPLv3':
      return `[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
    case 'GNU LGPLv3':
      return `[![License](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]`;
    case 'Mozilla Public License 2.0':
      return `[![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
    case 'Apache License 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
    case 'MIT License':
      return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    case 'Boost Software License 1.0':
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
    case 'The Unlicense':
      return `[![License](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
  }
  return ``;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GNU APGLv3':
      return `(https://www.gnu.org/licenses/agpl-3.0)`;
    case 'GNU GPLv3':
      return `(https://www.gnu.org/licenses/gpl-3.0)`;
    case 'GNU LGPLv3':
      return `(https://www.gnu.org/licenses/lgpl-3.0)`;
    case 'Mozilla Public License 2.0':
      return `(https://opensource.org/licenses/MPL-2.0)`;
    case 'Apache License 2.0':
      return `(https://opensource.org/licenses/Apache-2.0)`;
    case 'MIT License':
      return `(https://opensource.org/licenses/MIT)`;
    case 'Boost Software License 1.0':
      return `(https://www.boost.org/LICENSE_1_0.txt)`;
    case 'The Unlicense':
      return `(http://unlicense.org/)`;
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'None' && license) {
    return `${renderLicenseBadge(license)}${renderLicenseLink(license)}
    `
  }
  else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you would like to contact me with any questions about the application, my GitHub username is ${data.username} and my email is ${data.email}
`;
}

module.exports = generateMarkdown;
