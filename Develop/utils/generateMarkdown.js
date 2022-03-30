// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  if (typeof answers.license_choice === 'string') {
    switch (answers.license_choice) {
      case 'GNU AGPLv3':
        response = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
        break;
      case 'GNU GPLv3':
        response = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        break;
      case 'GNU LGPLv3':
        response = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
        break;
      case 'Mozilla Public License 2.0':
        response = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        break;
      case 'Apache License 2.0':
        response = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        break;
      case 'MIT License':
        response = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        break;
      case 'Boost Software License 1.0':
        response = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
        break;
      case 'The Unlicense':
        response = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
        break;
      default:
        response = ''
        break;
    }
  };
  console.log(response);
  return response;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license_choice) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license_choice) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers.project_title);
  return `# ${answers.project_title}

`;
}

module.exports = generateMarkdown;
module.exports = renderLicenseBadge;
